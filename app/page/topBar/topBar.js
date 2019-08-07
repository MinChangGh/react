import React from '_react@15.6.2@react'
import './topbar.scss'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Dropdown, Icon, Row, Col} from 'antd'
import {connect} from 'react-redux'
import store from '../../store/store'

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1
    }
  }

  componentWillMount() {
    this.props.dispatch({
      type: 'SEARCH',
      txt: '鞋子'
    })

    console.log(store.getState())

  }

  getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        alert('位置:' + position.coords.latitude)
      })

    }
  }

  toBean() {
    this.props.history.push({pathname: "/base/mybean", query: {name: 'sunny'}});
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to='/base/myorder'>我的订单</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to='/base/myloan/20'>我的白条</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <a onClick={() => {
            this.toBean()
          }}>我的京豆</a>
        </Menu.Item>
      </Menu>
    )

    return (
      <div className='topbar'>

        <div className='address' onClick={this.toBean.bind(this)}>杭州</div>
        <div className='right'>
          <div className='login'>登录</div>

          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Hover me <Icon type="down"/>
            </a>
          </Dropdown>

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