import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import request from '@/utils/request';
//@代表src目录

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
  //model副作用也是异步方法，相同的输入可能得到不同的输出，一般用它做网络请求
  effects: {
    *query({ payload }, { call, put }) {},

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
      console.log('res: ', res);
      //在调用reducers中的save方法，将res存到当前model的state中
      yield put({ type: 'save', payload: { name: res.data.name } });
    },
  },
  /*
  reducers 聚合积累的结果是当前 model 的 state 对象。通过 actions 中传入的值，与当前 reducers 中的值进行运算获得新的值
  type Reducer<S, A> = (state: S, action: A) => S
  需要注意的是 Reducer 必须是纯函数（纯函数：同样的输入必然得到同样的输出，它们不应该产生任何副作用（函数执行的过程中对外部产生了可观察的变化，我们就说函数产生了副作用。）。）
  */
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
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
