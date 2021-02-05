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
