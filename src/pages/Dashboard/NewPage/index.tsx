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
