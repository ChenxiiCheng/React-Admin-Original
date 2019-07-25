import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import MenuConfig from './../../resource/menuList';
import { Menu } from 'antd';
import './index.less';

const { SubMenu } = Menu;

class NavLeft extends Component {
  state = {
    currentKey: ''
  };

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    let currentKey = window.location.hash.replace('/#|?.*$/g', '');
    this.setState({
      currentKey,
      menuTreeNode
    });
  }

  handleClick = ({ key }) => {
    this.setState({
      currentKey: key
    });
  };

  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>后台管理系统</h1>
        </div>
        <Menu
          selectedKeys={this.state.currentKey}
          theme="dark"
          onClick={this.handleClick}
        >
          {this.state.menuTreeNode}
        </Menu>
      </Fragment>
    );
  }
}

export default NavLeft;
