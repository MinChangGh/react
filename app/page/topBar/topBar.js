import React from '_react@15.6.2@react'
import './topbar.scss'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Dropdown, Icon, Row, Col} from 'antd'

class TopBar extends React.Component {
    constructor() {
        super()
    }

    componentWillMount() {
        this.getPosition()
    }

    getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                alert('位置:' + position.coords.latitude)
            })

        }
    }

    toBean() {
        this.props.history.push({pathname: "/MyBean", query: {name: 'sunny'}});
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <Link to='/myOrder'>我的订单</Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to='/myLoan/20'>我的白条</Link>
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

                <div className='address'>杭州</div>
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

export default withRouter(TopBar);