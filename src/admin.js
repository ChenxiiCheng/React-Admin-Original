import React, { Component } from 'react';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';
import { Row, Col } from 'antd';
import './style/common.less';

class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={20} className="main">
          <Header />
          <Row className="content">{this.props.children}</Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default Admin;
