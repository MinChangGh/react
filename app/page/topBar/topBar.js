import React from '_react@15.6.2@react'
import './topbar.scss'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import store from '../../store/store'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1,
      address: '',
      current: 'mail'
    }
  }

  componentWillMount() {
    this.props.dispatch({
      type: 'SEARCH',
      txt: '鞋子'
    })
    this.getPosition()
    console.log(store.getState())

  }

  getPosition() {
    let that = this
    var geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        that.setState({address: r.address.city});
      }
    })
  }

  toBean() {
    this.props.history.push({pathname: "/base/mybean", query: {name: 'sunny'}});
  }

  render() {
    const menu = (
    <Menu selectedKeys={[this.state.current]} mode="horizontal">
      <Menu.Item key="mail">
        <Icon type="mail"/>
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled>
        <Icon type="appstore"/>
        Navigation Two
      </Menu.Item>
      <SubMenu title={
        <span className="submenu-title-wrapper">
              <Icon type="setting"/>
              Navigation Three - Submenu
            </span>
      }>
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
    )

    return (
    <div className='topbar'>

      <div className='address' onClick={this.toBean.bind(this)}>{this.state.address}</div>
      <div className='right'>
        <Menu style={{height: '66px', background: 'none', color: '#ffffff',lineHeight: '66px'}} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="login">
            <Icon type="login"/>
            登录
          </Menu.Item>
          <Menu.Item key="app" >
            <Icon type="appstore"/>
            我的订单
          </Menu.Item>
          <SubMenu title={
            <span className="submenu-title-wrapper">
              <Icon type="setting"/>
              我的京东
            </span>
          }>
            <Menu.ItemGroup>
              <Menu.Item key="setting:1">待处理订单</Menu.Item>
              <Menu.Item key="setting:2">待收货</Menu.Item>
              <Menu.Item key="setting:2">我的白条</Menu.Item>
              <Menu.Item key="setting:2">我的京豆</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            在线客服
          </Menu.Item>
        </Menu>

        {/*<Dropdown overlay={menu}>*/}
        {/*  <a className="ant-dropdown-link" href="#">*/}
        {/*    Hover me <Icon type="down"/>*/}
        {/*  </a>*/}
        {/*</Dropdown>*/}
      </div>

    </div>
    )
  }
}

function co(store) {
  return {
    a: store.user
  }
}

export default withRouter(connect(co)(TopBar));
