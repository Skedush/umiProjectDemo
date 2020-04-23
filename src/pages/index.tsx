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
    dispatch?.({ type: 'index/changeState', payload: { name: name + '1' } });
  };
}

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);
