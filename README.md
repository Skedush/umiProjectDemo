# 使用docker搭建持续化集成环境

> 环境：centos 7 ，docker 1.13.1
## 一、docker部署gitlab-ce


1. 拉取gitlab-ce镜像
```
docker pull gitlab/gitlab-ce:latest
```
2. 运行gitlab-ce容器
```
sudo docker run -d -p 30001:22 -p 30000:80 -p 30002:443 --privileged=true \
-h 127.0.0.1:30000 \
--name gitlab-ce \
-v $HOME/gitlab/config:/etc/gitlab \
-v $HOME/gitlab/logs:/var/log/gitlab \
-v $HOME/gitlab/data:/var/opt/gitlab \
gitlab/gitlab-ce:latest
```

> - -d : 后台进程方式启动  
> - –p 30001:22 ：分别使用30000 ~ 30002 端口映射端口80，22，443  
> - 在创建docker容器的选项中加入--privileged=true，使创建的容器拥有root权限，即可正常访问。
> - –-hostname gitlab ：发布域名叫gitlab，还需要配置域名绑定  
> - –-restart always ：电脑启动时自动启动  
> - –-volume $GITLAB_HOME/config:/etc/gitlab ：挂接卷，映射gitlab的配置到本地文件夹  
> - –-volume $GITLAB_HOME/logs:/var/log/gitlab ：挂接卷，映射gitlab的日志到本地文件夹  
> - –-volume $GITLAB_HOME/data:/var/opt/gitlab ：挂接卷，映射gitlab的数据到本地文件夹  


3. 找到Nginx监听端口行文件$HOME/gitlab/config/gitlab.rb中  找到并修改#nginx['listen_port']=nil-->nginx['listen_port'] = 80，或者直接添加nginx['listen_port'] = 80保存  
external_url 'http://0.0.0.0:30000/' git克隆项目url
	

`docker restart gitlab-ce `

4. 等待5分钟左右访问localhost\:30000或者127.0.0.1\:30000或者0.0.0.0\:30000,要是还在启动中访问会报502错误

5. 配置gitlab，不配置gitlab很消耗内存和cpu，默认的配置消耗资源很高,在映射的宿主机路径$HOME/gitlab/config/gitlab.rb修改或添加相关配置，里面的配置都注释掉了，查看官方文档。以下是我添加的配置

```
 unicorn['worker_memory_limit_min'] = "200 * 1 << 20"
 unicorn['worker_memory_limit_max'] = "300 * 1 << 20"
 sidekiq['concurrency'] = 8
 postgresql['max_worker_processes'] = 3
 unicorn['worker_timeout'] = 60
 unicorn['worker_processes'] = 3
 postgresql['shared_buffers'] = "256MB"
```

6. 创建一个项目，进入项目中的ci/cd设置，展开Runner设置，能看到specific Runner的地址与token后面配置runner的时候要用。

## 二、Docker搭建Gitlab CI Runner
1. 拉取gitlab-runner镜像

```
sudo docker pull gitlab/gitlab-runner:latest
```
2. 运行gitlab-runner容器
```
sudo docker run -d --privileged=true --name gitlab-runner \
  -v $HOME/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock \ # 宿主机的docker路径映射
  gitlab/gitlab-runner:latest
```



3. 进入git-runner容器内部
`docker exec -it gitlab-runner bash`
4. 注册runner这里要用到上面gitlab中项目的地址与token。

```
gitlab-runner register
```
```

Please enter the gitlab-ci coordinator URL:
# 这里不能用127.0.0.1与localhost，使用ip或者域名如：http://192.168.0.0.1:30000
Please enter the gitlab-ci token for this runner:
# xxxxxx
Please enter the gitlab-ci description for this runner:
# 示例：这是一个node项目
Please enter the gitlab-ci tags for this runner (comma separated):
# 示例：node
Please enter the executor: docker, parallels, shell, kubernetes, docker-ssh, ssh, virtualbox, docker+machine, docker-ssh+machine:
# docker
Please enter the default Docker image (e.g. ruby:2.1):
# docker:latest 使用docker容器运行runner脚本，运行完成后会关闭docker
```

> docker访问不了宿主机的服务导致regiter访问不到gitlab  
> 关闭防火墙命令  
> sudo firewall-cmd --permanent --zone=trusted --change-interface=docker0  
> sudo firewall-cmd --reload

成功之后在gitlab项目的runner配置下面有激活的runner

5.拉取项目并新建一个以numiProjectDemo项目为例子，编写文件  

dockerfile

```
#制定node镜像的版本
FROM nginx:latest
#声明作者
MAINTAINER xl
#移动当前目录下面的文件到app目录下
COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
#安装依赖
#对外暴露的端口
EXPOSE 80
#程序启动脚本
CMD ["nginx","-g","daemon off;"]
```

.gitlab-ci.yml

> 这里的DOCKER_HOST参数改成自己宿主机的docker端口
> git push之后持续化集成开始会报错，找不到docker，在宿主机上暴露docker端口
> vim /usr/lib/systemd/system/docker.service  
> 在 ExecStart=/usr/bin/dockerd-current 后 增加  
> -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock  
```
image: docker:1.13.1
variables: #2
  # DOCKER_DRIVER: overlay2
  DOCKER_HOST: tcp://10.211.55.5:2375 # docker host我们要使用宿主机的docker，本地可不写
  IMAGE: umi-project   #定义创建的镜像名称
  NAME: demo  #定义容器名称

before_script:
  - echo "hello gitlab ci"
stages:
  - build
  - deploy

build_job: # 定义一个job
  image: node:14.15.4

  cache:
    paths:
      - ./node_modules/
      - ./dist/

  stage: build # 设置job所属的stage
  tags:
    - umi #对应gitlab-runner创建的tag
  script: # 定义后面Runner来执行的具体脚本
    - npm install --registry https://registry.npm.taobao.org
    - npm run build

deploy_job: # 定义一个job
  image: docker:1.13.1
  cache:
    paths:
      # - ./node_modules/
      - ./dist/

  stage: deploy # 设置job所属的stage
  tags:
    - umi #对应gitlab-runner创建的tag
  script: # 定义后面Runner来执行的具体脚本
    - docker rmi -f $IMAGE || true  #删除原来容器
    - docker build -t $IMAGE .  #使用Dockerfile创建镜像
    - docker rm -f $NAME || true  #删除原来容器
    - docker run -d --name $NAME -p 80:80 $IMAGE   #创建容器映射容器端口80到宿主机80

```
nginx.conf
```
http {
  # gzip设置
  gzip on;
  gzip_vary on;

  gzip_comp_level 6;
  gzip_buffers 16 8k;

  gzip_min_length 1000;
  gzip_proxied any;
  gzip_disable "msie6";
  #gzip_http_version 1.0;
  gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript;

  include /etc/nginx/mime.types;
  default_type application/octet-stream;
  server {
      listen       80;
      server_name  localhost;

      location / {
          root   /usr/share/nginx/html;
          index  index.html index.htm;
          # 其作用是按顺序检查文件是否存在，返回第一个找到的文件或文件夹（结尾加斜线表示为文件夹），如果所有的文件或文件夹都找不到，会进行一个内部重定向到最后一个参数。
          try_files $uri /index.html;
      }
      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
          root   /usr/share/nginx/html;
      }
  }
}
events {
    worker_connections  1024;
}

```

> dockerfile 是gitlab-ci创建的镜像容器的文件，gitlab-runner检测项目push，检测到之后会运行.gitlab-ci.yml里面的脚本，脚本使用dockerfile创建镜像与容器部署项目

8. git push 之后成功自动部署流水线开始。
