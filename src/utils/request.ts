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

  // options.cancelToken = new CancelToken(cancel => {
  //   window.cancelRequest.set(Symbol(Date.now()), {
  //     pathname: window.location.pathname,
  //     cancel,
  //   });
  // });

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
