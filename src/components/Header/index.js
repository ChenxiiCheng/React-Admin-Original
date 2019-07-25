import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';

class Header extends Component {
  componentWillMount() {
    this.setState({
      userName: 'Chenxi'
    });
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
