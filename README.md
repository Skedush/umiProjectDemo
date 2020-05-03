@[toc]
# 一、什么是react
**React**[<sup>1</sup>](#refer-1)[<sup>2</sup>](#refer-1) 起源于 **Facebook** 的内部项目，因为该公司对市场上所有 **JavaScript MVC**框架，都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在**2013年5月**开源了。

由于 **React**的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 **Web** 开发的主流工具。
这个项目本身也越滚越大，从最早的**UI**引擎变成了一整套前后端通吃的 **Web App** 解决方案。衍生的 **React Native** 项目，目标更是宏伟，希望用写 **Web App** 的方式去写 **Native App**。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一次 UI ，就能同时运行在服务器、浏览器和手机。
**React**主要用于构建**UI**。你可以在**React**里传递多种类型的参数，如声明代码，帮助你渲染出**UI**、也可以是静态的**HTML DOM**元素、也可以传递动态变量、甚至是可交互的应用组件。
特点：
1.声明式设计：**React**采用声明范式，可以轻松描述应用。
2.高效：**React**通过对**DOM**的模拟，最大限度地减少与**DOM**的交互。
3.灵活：**React**可以与已知的库或框架很好地配合。




# 二、什么是dva
**dva** [<sup>3</sup>](#refer-3)首先是一个基于 **redux** 和 **redux-saga** 的数据流方案，然后为了简化开发体验，**dva**  还额外内置了 **react-router** 和 **fetch**，所以也可以理解为一个轻量级的应用框架。
**特性**
- 易学易用，仅有 **6 个 api**，对 **redux** 用户尤其友好，配合 umi 使用后更是降低为 **0 API**
- elm 概念，通过 **reducers, effects** 和 **subscriptions** 组织 **model**
- 插件机制，比如 **dva-loading** 可以自动处理 **loading 状态**，不用一遍遍地写 **showLoading 和 hideLoading**
- 支持 **HMR**（热加载），基于 **babel-plugin-dva-hmr**实现 **components、routes 和 models 的 HMR**

简单来说dva就是这个团队觉得redux+redux-sage这一套数据流太麻烦，将这些整合封装成了一个最佳体验模式（也就是最方便开发使用）提供开发者使用



# 三、什么是umi
Umi [<sup>4</sup>](#refer-4)，中文可发音为乌米，是可扩展的企业级前端应用框架。Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。

Umi 是蚂蚁金服的底层前端框架，已直接或间接地服务了 3000+ 应用，包括 java、node、H5 无线、离线（Hybrid）应用、纯前端 assets 应用、CMS 应用等。他已经很好地服务了我们的内部用户，同时希望他也能服务好外部用户。

它主要具备以下功能：

- 🎉 可扩展，Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。
- 📦 开箱即用，Umi 内置了路由、构建、部署、测试等，仅需一个依赖即可上手开发。并且还提供针对 React 的集成插件集，内涵丰富的功能，可满足日常 80% 的开发需求。
- 🐠 企业级，经蚂蚁内部 3000+ 项目以及阿里、优酷、网易、飞猪、口碑等公司项目的验证，值得信赖。
- 🚀 大量自研，包含微前端、组件打包、文档工具、请求库、hooks 库、数据流等，满足日常项目的周边需求。
- 🌴 完备路由，同时支持配置式路由和约定式路由，同时保持功能的完备性，比如动态路由、嵌套路由、权限路由等等。
- 🚄 面向未来，在满足需求的同时，我们也不会停止对新技术的探索。比如 dll 提速、modern mode、webpack@5、自动化化 external、bundler less 等等。
## 什么时候不用 umi？
如果你，

- 需要支持 IE 8 或更低版本的浏览器
- 需要支持 React 16.8.0 以下的 React
- 需要跑在 Node 10 以下的环境中
- 有很强的 webpack 自定义需求和主观意愿
- 需要选择不同的路由方案

Umi 可能不适合你。

# 四、什么是antd
antd  [<sup>[5]</sup>](#refer-5)是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。
**特性**
- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。

- 📦 开箱即用的高质量 React 组件。

- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。

- ⚙️ 全链路开发和设计工具体系。

- 🌍 数十个国际化语言支持。

- 🎨 深入每个细节的主题定制能力。

**支持环境**
- 现代浏览器和 IE11 及以上（需要 polyfills）。
- 支持服务端渲染。
- Electron

<div id="refer-1"></div>

- [1] [百度百科react介绍](https://baike.baidu.com/item/react/18077599?fr=aladdin)
<div id="refer-2"></div>

- [2] [react官网](https://react.docschina.org/)

<div id="refer-3"></div>

- [3] [dva官网](https://dvajs.com/)

<div id="refer-4"></div>

- [4] [umi官网](https://umijs.org/zh-CN)
<div id="refer-5"></div>

- [5] [antd官网](https://ant.design/index-cn)


# 六、开始使用脚手架创建项目
首先保证电脑上有node环境，这个就不说了

本教程使用yarn也是umi推荐的依赖管理工具

 **1. 第一步安装umi全局依赖**


```
$yarn global add umi
$umi -v
umi@3.0.9
```
成功安装umi依赖

umi升级成3.0了，手脚架创建项目与以前不一样了
 **2. 新建一个文件夹，并在终端打开，并创建项目**
```
$ mkdir myapp && cd myapp
$ yarn create @umijs/umi-app
```
此时手脚架在该文件夹下会创建这些文件

> Copy:  .editorconfig
Write: .gitignore
Copy:  .prettierignore
Copy:  .prettierrc
Write: .umirc.ts
Copy:  mock/.gitkeep
Write: package.json
Copy:  README.md
Copy:  src/pages/index.less
Copy:  src/pages/index.tsx
Copy:  tsconfig.json
Copy:  typings.d.ts


需要查看隐藏文件才能看到"."开头的文件,ubuntu查看隐藏文件快捷键为ctrl+h，macOs好像是command+shift+.忘记了。

**3.使用yarn安装依赖**

    $ yarn
    yarn install v1.21.1
    [1/4] 🔍  Resolving packages...
    success Already up-to-date.
    ✨  Done in 0.71s.

启动项目

    $ yarn start

> Starting the development server...
> 
> ✔ Webpack   Compiled successfully in 17.84s
> 
>  DONE  Compiled successfully in 17842ms                               
> 8:06:31 PM
> 
> 
>   App running at:
>   - Local:   http://localhost:8000 (copied to clipboard)
>   - Network: http://192.168.xx.xxx:8000

**4.在浏览器里打开 http://localhost:8000/，能看到以下界面：**

![success](https://images.gitbook.cn/00cecfe0-67fa-11ea-95be-6b413411e120)
此时，你的umi项目的目录是这样的：

![在这里插入图片描述](https://images.gitbook.cn/101942e0-681e-11ea-8c29-8dcac0ed3a89)
 - mock文件夹是用来写前端mock数据的，此目录下所有 js 和 ts 文件会被解析为 mock 文件。
 - node_modules是项目所有依赖的包
 - **src**
	- .umi是临时文件目录，比如入口文件、路由等，都会被临时生成到这里。不要提交 .umi 目录到 git 仓库，他们会在 umi dev 和 umi build 时被删除并重新生成。
	- pages目录所有路由组件存放在这里。
	- .editorconfig 编辑器的设置
	- .gitignore 使用git时不需要git维护的内容设置
	- prettierignore package.json中有插件prettier，这是prettier代码美化工具不需要关系的文件设置
	- prettierrc prettier代码美化规则
	- .umirc.ts umi框架的配置
	- package.json 包含插件和插件集，以 @umijs/preset-、@umijs/plugin-、umi-preset- 和 umi-plugin- 开头的依赖会被自动注册为插件或插件集。
	- readme不说了
	- tsconfig.json 指定ts编译的一些参数信息
	- typings.d.ts  变量一系列的申明文件

## umi的配置项：
打开**.umirc.ts**文件
![在这里插入图片描述](https://images.gitbook.cn/6382a780-682f-11ea-a2b2-ed1a3abdd313)
看到的配置是这样的，defineConfig是umi的一个函数，应该是预留的目前没什么用，直接return了这个传入的对象，我们来改造一下，跟踪到definConfig函数中我们看到：
![在这里插入图片描述](https://images.gitbook.cn/c46fe300-682f-11ea-a7c2-3da1737284e9)
ts定义传入的对象类型为Iconfig，返回类型为Iconfig，在源码中是直接return了。所以我们为了更好的理解，我们将.umirc.ts改写为这样

```js
import { defineConfig } from 'umi';
import { IConfig } from '@umijs/types';
const config: IConfig = {
  routes: [{ path: '/', component: '@/pages/index' }],
};
export default defineConfig(config);


```
这个和原来的没有区别，更好理解而已。
接下来我们跟踪到IConfig中，看配置属性：
```js
export interface IConfig extends IConfigCore {
  alias?: {
    [key: string]: string;
  };
  analyze?: BundleAnalyzerPlugin.Options;
  autoprefixer?: object;
  base?: string;
  chainWebpack?: {
    (
      memo: WebpackChain,
      args: {
        webpack: typeof webpack;
        env: env;
        createCSSRule: ICreateCSSRule;
      },
    ): void;
  };
  chunks?: string[];
  cssLoader?: object;
  cssnano?: object;
  copy?: string[];
  define?: {
    [key: string]: any;
  };
  devServer?: IServerOpts;
  devtool?: webpack.Options.Devtool;
  dynamicImport?: {
    loading?: string;
  };
  exportStatic?: {
    htmlSuffix?: boolean;
    dynamicRoot?: boolean;
  };
  externals?: any;
  extraBabelPlugins?: IPresetOrPlugin[];
  extraBabelPresets?: IPresetOrPlugin[];
  extraPostCSSPlugins?: any[];
  favicon?: string;
  forkTSCheker?: object;
  hash?: boolean;
  headScripts?: IScriptConfig;
  history?: {
    type: 'browser' | 'hash' | 'memory';
    options?: object;
  };
  ignoreMomentLocale?: boolean;
  inlineLimit?: number;
  lessLoader?: object;
  links?: Partial<HTMLLinkElement>[];
  manifest?: Partial<IManifest>;
  metas?: Partial<HTMLMetaElement>[];
  mock?:
    | {
        exclude?: string[];
      }
    | false;
  mountElementId?: string;
  outputPath?: string;
  plugins?: IPresetOrPlugin[];
  postcssLoader?: object;
  presets?: IPresetOrPlugin[];
  proxy?: any;
  publicPath?: string;
  runtimePublicPath?: boolean;
  scripts?: IScriptConfig;
  singular?: boolean;
  ssr?: object;
  styleLoader?: object;
  styles?: IStyleConfig;
  targets?: ITargets;
  terserOptions?: object;
  theme?: object;
  title?: string;
  [key: string]: any;
}
```

> 这些属性自己去根据umi官网上的配置项说明，根据自己需求自由添加，地址是https://umijs.org/zh-CN/config，不多说了。

# 七、开始编写页面
## router提取
在根目录创建config文件夹，创建router.comfig.ts文件
插入代码：
```js
import { IRoute } from 'umi-types';

const routes: IRoute[] = [{ path: '/', component: '@/pages/index' }];

export default routes;

```
发现没有umi-types依赖包，yarn在开发环境中，生产环境不需要的

	$yarn add umi-types --dev 
	
将.umirc.ts中改成引用router
```js
import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';
import { IConfig } from 'umi-types';
const config: IConfig = {
  routes: pageRoutes,
};

export default defineConfig(config);
```
这么做防止以后router	过多，拆封成一个文件单独管理

## 项目的拓展工作
在**SRC**文件夹下创建多个文件夹，拆分组件、model、工具类等，再添加**global.less**文件全局使用的样式。
创建完后项目目录结构是这样的：
![在这里插入图片描述](https://images.gitbook.cn/70f2a410-8300-11ea-bced-d975e1287828)
## 编写页面demo

1.我们先将umi中的页面的demo复制粘贴进来看看效果
打开pages下的index.tsx文件
将代码替换，我将我个人理解的注释都写在代码里面了
```js
import React, { FC } from 'react';
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';
/*
  connect就是react-redux中的connect，umi直接import，export出来的
  IndexModelState是在model中export的数据类型，在下方数据绑定到组件才能取到
  ConnectProps是页面传入的类型包含dispatch，match，location，history，route熟悉react的人都知道不解释了
  Loading是dva封装的model异步方法调用状态，执行中为true，否则为false，为界面加载中的状态使用
*/

//定义当前页面的props，继承ConnectProps，再添加两个属性，model中的数据以及loading状态
interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}

/*
  页面组件，FC是在react中定义的type FC<P = {}> = FunctionComponent<P>，表示IndexPage是一个方法组件。
  FunctionComponent又是什么？

  interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P>;
        contextTypes?: ValidationMap<any>;
        defaultProps?: Partial<P>;
        displayName?: string;
    }
    文件跟踪下去太多了，就到这吧
  泛型为PageProps表示页面传入的参数类型
  return 页面展示的内容
*/
const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  const { name } = index;
  return <div>Hello {name}</div>;
};

/*
  使用redux中的connect将model数据绑定到组件
  connect传入一个箭头函数，获得model的数据，采用解构的方式{index,loading}:{index: IndexModelState; loading: Loading}(冒号后面ts数据类型）
  然后return了index和loading.models.index
  loading是dva全部model的loading状态，其中.index是逻辑上当前页面绑定的model的loading，model.ts中命名空间是index
  最后export default IndexPage也就是这个组件
*/
export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);

```

> 现在代码是报错的，别着急，再在index.ts同级目录下创建model.ts数据流控制文件，将代码复制进去，我这种CV工程师常干的事情，model自己去看[**dva官网**](https://ant.design/index-cn)的教程,写的很清楚了，通常一个页面一个model

```js
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

//定义的State数据类型
export interface IndexModelState {
  name: string;
}

//定义model的类型
export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

//实际的model
const IndexModel: IndexModelType = {
  namespace: 'index',
  //model的数据
  state: {
    name: 'skedush in model',
  },
  //model副作用也是异步方法，相同的输入可能得到不同的输出，一般用它做网络请求
  effects: {
    *query({ payload }, { call, put }) {},
  },
  /*
  reducers 聚合积累的结果是当前 model 的 state 对象。通过 actions 中传入的值，与当前 reducers 中的值进行运算获得新的值
  type Reducer<S, A> = (state: S, action: A) => S
  需要注意的是 Reducer 必须是纯函数（纯函数：同样的输入必然得到同样的输出，它们不应该产生任何副作用（函数执行的过程中对外部产生了可观察的变化，我们就说函数产生了副作用。）。）
  */
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后可以这么写，不过这个我们暂时不用，主要解决了引用对象出现的问题
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  /**
   * Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。数据源可以是当前的时间、
   * 服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。
   */
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },

  /**
   * model中还是action和dispatch的概念
   * Action
    type AsyncAction = any
    Action 是一个普通 javascript 对象，它是改变 State 的唯一途径。无论是从 UI 事件、网络回调，还是 WebSocket
    等数据源所获得的数据，最终都会通过 dispatch 函数调用一个 action，从而改变对应的数据。action 必须带有 type
    属性指明具体的行为，其它字段可以自定义，如果要发起一个 action 需要使用 dispatch 函数；需要注意的是 dispatch
    是在组件 connect Models以后，通过 props 传入的。

    dispatch 函数
    type dispatch = (a: Action) => Action
    dispatching function 是一个用于触发 action 的函数，action 是改变 State 的唯一途径，但是它只描述了一个行为，
    而 dipatch 可以看作是触发这个行为的方式，而 Reducer 则是描述如何改变数据的。

    在 dva 中，connect Model 的组件通过 props 可以访问到 dispatch，可以调用 Model 中的 Reducer 或者 Effects，
    常见的形式如：
    dispatch({
      type: 'index/query', // 如果在 model 外调用，需要添加 namespace，比如当前的model命名空间是index，这就是调用effect中的query函数
      payload: {}, // 需要传递的信息
    });
   */
};

export default IndexModel;


```

> 以上代码都是umi官网的demo中复制来的不是本人写的

再看看页面，左上角是不是出现了hello skedush in model的字样，其中skedush in model是在model的state中的name传入当前组件展示的
![在这里插入图片描述](https://images.gitbook.cn/e0ff4140-84a0-11ea-b751-6ff511beda88)
## 修改组件使用class形式
打开index.tsx
这组件已经不是function component了，所以在react导入PureComponent，我直接在代码里注释，看的更清楚一些
	
```js
import React, { PureComponent } from 'react';
/**
 * 将FC换成了PureComponent，PureComponent和Component的区别是PureComponent自动处理了页面渲染的一些优化
 * 一般的页面需求我们不需要自己控制页面渲染，使用PureComponent就行
 */
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';

interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}
//定义当前页面state数据的类型
interface IndexPageState {
  name: string;
}

class IndexPage extends PureComponent<PageProps, IndexPageState> {
  /**
   * 当前页面继承了PureComponent类，后面是泛型，第一个是组件传入参数的类型，第二个是当前页面数据的类型
   */

  //class的构造方法，参数props数据类型是PageProps
  constructor(props: Readonly<PageProps>) {
    super(props);
    //state中的数据类型必须是IndexPageState
    this.state = {
      name: 'skedush in this state',
    };
  }

  //render函数渲染当前页面组件
  render() {
    //index会在this.props中，也就是当前组件传入的参数，其中还有dispatch函数等，可自行输出查看
    const { index } = this.props;
    //从命名空间为index的model中获取state：name
    const { name } = index;
    //return也就是render的渲染对象

    const thisStateName = this.state.name;
    return (
      <div>
        Hello {name} and {thisStateName}
      </div>
    );
  }
}

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);

```
页面展示
![在这里插入图片描述](https://images.gitbook.cn/55c13d30-84a1-11ea-8186-75c206477f1e)
两个name一个是在model的state的，一个是在当前组件的state中的。
## 引用antd组件并操作state与model
	在终端执行命令安装antd
	$ yarn add antd
修改index.tsx,以及在model中添加Effect
index.tsx:
在头部引用antd中的button组件，在render将组件渲染，并绑定onclick事件，事件使用箭头函数，默认bind了当前的组件。
```js
import React, { PureComponent } from 'react';
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';
import { Button } from 'antd';

interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}
//定义当前页面state数据的类型
interface IndexPageState {
  name: string;
}

class IndexPage extends PureComponent<PageProps, IndexPageState> {
  /**
   * 当前页面继承了PureComponent类，后面是泛型，第一个是组件传入参数的类型，第二个是当前页面数据的类型
   */

  //class的构造方法，参数props数据类型是PageProps
  constructor(props: Readonly<PageProps>) {
    super(props);
    //state中的数据类型必须是IndexPageState
    this.state = {
      name: 'skedush in this state',
    };
  }

  //render函数渲染当前页面组件
  render() {
    //index会在this.props中，也就是当前组件传入的参数，其中还有dispatch函数等，可自行输出查看
    const { index } = this.props;
    //从命名空间为index的model中获取state：name
    const { name } = index;
    //return也就是render的渲染对象

    const thisStateName = this.state.name;
    return (
      <div>
        Hello {name} and {thisStateName}
        <div>
          <Button type={'primary'} onClick={this.onClick}>
            点我改变当前页面state中的name
          </Button>
        </div>
        <br />
        <div>
          <Button type={'primary'} onClick={this.onClick2}>
            点我改变model中state的name
          </Button>
        </div>
      </div>
    );
  }

  onClick = () => {
    const { name } = this.state;
    this.setState({
      name: name + '1',
    });
  };

  onClick2 = () => {
    const { dispatch, index } = this.props;
    const { name } = index;
    // props中的dispatch可能为undefault，ts语法?.表示存在dispatch时才调用该方法
    dispatch?.({ type: 'index/changeState', payload: { name: name + '1' } });
  };
}

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);

```

**注意修改了model之后需要刷新页面，model才会生效，有时候会自动刷新，有时候并不会自动刷新**，修改之后model.ts为：

```js
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

//定义的State数据类型
export interface IndexModelState {
  name: string;
}

//定义model的类型
export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
    changeState: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

//实际的model
const IndexModel: IndexModelType = {
  namespace: 'index',
  //model的数据
  state: {
    name: 'skedush in model',
  },
  effects: {
    *query({ payload }, { call, put }) {},
    *changeState({ payload }, { call, put }) {
      yield put({ type: 'save', payload: { name: payload.name } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  
  },
 
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },


};

export default IndexModel;

```


|此时页面展示是这样，点击按钮会产生相应的变化|
|----------------------|
|             ![在这里插入图片描述](https://images.gitbook.cn/7fcb6d80-8569-11ea-a9ff-29e53f17413b)         | 
## 修改antd组件的样式
### 使用cssModule方式修改
1.在index.tsx中引入index.less,首先保证index.tsx同级目录中有index.less这个文件，没有自行创建；Ï
```js
import styles from './index.less';
```
2.在给button增加className属性,cssmodule方式使用如下
```js
<Button
	className={styles.btn}
	type={'primary'}
 	onClick={this.onClick}
>
  点我改变当前页面state中的name
</Button>
```
3.在index.less中增加样式
```css
.btn {
  background: blue;
  &:hover {
    background: yellow;
    color: #000;
  }
}

```

![在这里插入图片描述](https://images.gitbook.cn/355b8ba0-86c6-11ea-94dc-e928d61ce86c)

	鼠标悬浮：
![在这里插入图片描述](https://images.gitbook.cn/402bf290-86c6-11ea-bdf2-1776e599fc0a)

> 注意是是要是引用了**antd pro**，这么修改button的样式无效，因为**antd pro**的样式有毒的。

得这么改,不过大多antd的组件样式基本都得这么改:

index.tsx:
```js
//将样式绑定到组件外的className中
 <div className={styles.btnDiv}>
          <Button
            type={'primary'}
            onClick={this.onClick}
          >
            点我改变当前页面state中的name
          </Button>
        </div>
```

index.less
```js
.btnDiv {
	 //global是覆盖到btnDiv下的全局样式，当然还要考虑less的机制，不说了自己去google查，
  //要是外边没有btnDiv直接用global，会覆盖了整个项目antd的button样式，所有的按钮都变成这样了，不建议使用，造成样式污染
  :global {
    //这里的样式名称是通过浏览器自带的开发者工具下元素捕捉到的
    .ant-btn-primary {
      background: blue;
      &:hover {
        background: yellow;
        color: #000;
      }
    }
  }
}
```

现在再看页面效果是一样的

### 捕捉antd组件样式名

> 	防止一些同学这个都不知道，我还是说一下吧，Chrome浏览器为例子，不用Chrome的前端就别学了，按f12
> 	mac和windows都一样。或者之间ctrl+shift+c (command+shift+c)
> 	ubuntu的话就不说了，我不配讲ubuntu大佬。

![在这里插入图片描述](https://images.gitbook.cn/5d03e920-86c8-11ea-94dc-e928d61ce86c)

### 使用global.less

> 我们之前创建了global.less这个文件，这个是全局的样式，umi会默认将该文件的样式覆盖到全局，利用global.less修改第二个按钮的样式，woc这里改了半天，因为umi升级到3.0之后global.less有点区别了

编辑global.less:
```js
.antdBtn {
  //umi3.0在这里面用:global反而无效了，不使用才有效
  // :global {
  .ant-btn-primary {
    background: red;
    &:hover {
      background: green;
      color: #000;
    }
  }
  // }
}
//原来umi2.0按照下面用就覆盖了全局的样式，但是在umi3.0好像不行了
// :global {
//   .ant-btn-primary {
//     background: blue;
//     &:hover {
//       background: yellow;
//       color: #000;
//     }
//   }
// }
```

编辑index.tsx的第二个button：
```js
 <div className={'antdBtn'}>
          <Button type={'primary'} onClick={this.onClick2}>
            点我改变model中state的name
          </Button>
        </div>
```

查看页面
![在这里插入图片描述](https://images.gitbook.cn/c13ca980-86f1-11ea-b2f7-bbf1d88e57dd)

## 使用axios发起网络请求
### 编写mock
在mock中创建文件
mockDemo.ts:
```js
import { Request, Response } from 'express';

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { name: 'Skedush' },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req: Request, res: Response) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};

```
保存完之后mock会自动加载，在终端会出现，失败会有失败提醒
![在这里插入图片描述](https://images.gitbook.cn/cd65c1a0-86fc-11ea-a330-69dc969564d3)
### 封装request
	简单封装request,在utils文件夹中创建request.ts，这里要用到axios和lodash的库，先yarn add一下
	$yarn add axios lodash

request.ts:
```js
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { cloneDeep, isEmpty } from 'lodash';
import qs from 'qs';

//定义返回的类型
export interface ResponseData {
  success: boolean;
  message?: string;
  data?: any;
}

//定义axios参数，继承AxiosRequestConfig
export interface RequestConfig extends AxiosRequestConfig {}

/**
 * axios的请求封装，地址判断、错误处理
 *
 * @export
 * @param {object} options 请求选项
 * @returns {Promise} 请求结果
 */
export default function request(
  options: RequestConfig,
): Promise<ResponseData | undefined> {
  const { data, url, method = 'get' } = options;
  if (!url) {
    throw new Error('request url none');
  }

  //深拷贝data数据，以免造成引用产生的问题
  const cloneData = cloneDeep(data);

  //get请求在url中添加请求参数
  options.url =
    method.toLocaleLowerCase() === 'get'
      ? `${url}${isEmpty(cloneData) ? '' : '?'}${qs.stringify(cloneData)}`
      : url;

  // session
  options.withCredentials = true;
  // 设置请求头
  options.headers = {
    'X-Request-Type': 'ajax',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  //发起请求
  return axios(options)
    .then(response => {
      const { data } = response;

      return Promise.resolve({
        //请求成功的返回
        success: true,
        message: '请求成功',
        data: data || {},
      });
    })
    .catch((error: AxiosError) => {
      //请求错误的返回
      return {
        success: false,
        message: error.toString(),
      };
    });
}

```

### 在model中使用网络请求
打开model.ts
引入编写的request.js
再修改model中的changeState方法
```js
import request from '@/utils/request';
//@代表src目录
*changeState({ payload }, { call, put }) {
      /**
       * call用来调用异步函数，将异步函数和函数参数作为call函数的参数传入，返回一个js对象。saga引入他的主要作用是方便测试，同时也能让我们的代码更加规范化。
同js原生的call一样，call函数也可以指定this对象，只要把this对象当第一个参数传入call方法就好了

put是saga对Redux中dispatch方法的一个封装，调用put方法后，saga内部会分发action通知Store更新state。
       */

       //yield 等待异步请求结束 ，res请求的返回值，注意这里如果没有yield的话res是一个promise对象
      const res = yield call(() => {
        return request({
          url: '/api/users',
          data: payload,
          method: 'GET',
        });
      });
      //在调用reducers中的save方法，将res存到当前model的state中
      yield put({ type: 'save', payload: { name: res.data.name } });
    },
```
	将以上代码添加替换掉model.ts中对应的地方

修改index.tsx的按钮onclick的事件，发起请求，以及将model中的state再次渲染到页面中
index.tsx

> 修改onClick2这个方法：

```js
onClick2 = () => {
    //页面用connect绑定了model会传入dispatch
    const { dispatch, index } = this.props;
    //model中state中的name
    const { name } = index;
    //调用model的changeState，并传入参数，注意model的作用域，可以去umi约定式路由看，不做解释
    dispatch?.({ type: 'index/changeState', payload: { name: name + '1' } });
  };
```

页面效果：
![在这里插入图片描述](https://images.gitbook.cn/9390da90-8a1d-11ea-8f6f-6d0db3ef66d9)
前面的skedush  in model是在model的state中取得的，请求改变了model的数据，传入的props改变页面自动会渲染

点击按钮发起的请求
![在这里插入图片描述](https://images.gitbook.cn/e6171ae0-8a1d-11ea-8f6f-6d0db3ef66d9)
网络请求的response
![在这里插入图片描述](https://images.gitbook.cn/0f4259c0-8a1e-11ea-9103-af8d2f5e3fcf)
model中res的输出，因为我们在request中封装了请求的返回值
![在这里插入图片描述](https://images.gitbook.cn/13f046e0-8a1d-11ea-9a9b-f54aaecc4d20)
开发到这里，单个页面基本的流程已经完成了，写下来快速开发第二个页面。

# 八、快速开发第二个页面

 1. 在pages下创建Dashboard文件夹，接着再Dashboard中创建Home与NewPage文件夹
 2. 将原本在pages下的index.tsx,index.less,model.ts移动到Home文件夹下，在NewPage中创建index.tsx,index.less,model.ts三个文件创建完后你的目录是这样的：
 
 ![在这里插入图片描述](https://images.gitbook.cn/259825e0-8d36-11ea-a326-c7ef51ab79ae)

 3. 修改config中router.config.ts路由配置文件

 
```js
import { IRoute } from 'umi-types';
const routes: IRoute[] = [
  { path: '/', component: '@/pages/Dashboard/Home' },
  { path: '/new', component: '@/pages/Dashboard/NewPage' },
];
export default routes;
```

 4. 现在进入http://localhost:8000/new路由下是空白的，因为我们没有写任何东西，打开NewPage下的index.tsx添加如下代码:
```js
import React, { PureComponent } from 'react';
import { NewPageModelState, ConnectProps, Loading, connect } from 'umi';

import { Button } from 'antd';

interface NewPageProps extends ConnectProps, NewPageModelState {}
interface NewPageState {}
class NewPage extends PureComponent<NewPageProps, NewPageState> {
  constructor(props: Readonly<NewPageProps>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>I am NewPage,model count is {this.props.count}</div>
        <div>
          <Button type={'primary'} onClick={this.clickBtn}>
            NewPage
          </Button>
        </div>
      </div>
    );
  }
  clickBtn = () => {
    const { dispatch, count } = this.props;
    dispatch?.({ type: 'newPage/changeCount', payload: { count } });
  };
}

export default connect(
  ({ newPage, loading }: { newPage: NewPageModelState; loading: Loading }) => ({
    count: newPage.count,
    loading: loading.models.newPage,
  }),
)(NewPage);
```
 5. 在mock文件夹下创建newPage.ts模拟数据请求数据：
```js
import { Request, Response } from 'express';

export default {
  ['POST /api/count/post'](req: Request, res: Response) {
    const count = req.body.count;
    res.json({ count: count + 1 });
  },
};
```
 6. NewPage下的model.ts：
```js
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import request from '@/utils/request';
export interface NewPageModelState {
  count: number;
}

export interface NewPageModelType {
  namespace: 'newPage';
  state: NewPageModelState;
  effects: {
    changeCount: Effect;
  };
  reducers: {
    save: Reducer<NewPageModelState>;
  };
  subscriptions: {};
}

const NewPageModel: NewPageModelType = {
  namespace: 'newPage',
  state: {
    count: 0,
  },
  effects: {
    *changeCount({ payload }, { call, put }) {
      const res = yield call(() => {
        return request({
          url: '/api/count/post',
          data: payload,
          method: 'POST',
        });
      });
      yield put({ type: 'save', payload: { count: res.data.count } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {},
};
export default NewPageModel;
```

 7. 现在让我们看看页面的效果

![在这里插入图片描述](https://images.gitbook.cn/81998410-8d3b-11ea-bf74-150f7ff6235d)
![在这里插入图片描述](https://images.gitbook.cn/da412230-8d3b-11ea-861a-9398d62a6944)

![在这里插入图片描述](https://images.gitbook.cn/e6479820-8d3b-11ea-bdd1-7d5e6a2f3cf3)
本场chat结束，这个只是一个简单使用umi框架的教程，真正应用到开发中还需要封装很多通用的工具类、api、装饰器等，还有最关键通用组件的封装。下一篇我将介绍如何封装一些通用的库，与通用组件的封装，以及页面级组件的封装，令开发变的更加简单，打造一款属于自己的企业级框架。
