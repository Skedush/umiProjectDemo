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
