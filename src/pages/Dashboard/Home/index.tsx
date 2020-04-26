import React, { PureComponent } from 'react';
import { ConnectProps } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

interface PageProps extends ConnectProps {}
//定义当前页面state数据的类型
interface HomeState {}
class Home extends PureComponent<PageProps, HomeState> {
  /**
   * 当前页面继承了PureComponent类，后面是泛型，第一个是组件传入参数的类型，第二个是当前页面数据的类型
   */

  //class的构造方法，参数props数据类型是PageProps
  constructor(props: Readonly<PageProps>) {
    super(props);
    //state中的数据类型必须是HomeState
    this.state = {};
  }

  //render函数渲染当前页面组件
  render() {
    //index会在this.props中，也就是当前组件传入的参数，其中还有dispatch函数等，可自行输出查看

    return (
      <div>
        <div>
          <Button type={'primary'}>点我改变当前页面state中的name</Button>
        </div>
      </div>
    );
  }
}

export default Home;
