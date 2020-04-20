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
