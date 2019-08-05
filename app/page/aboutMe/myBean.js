import React from '_react@15.6.2@react'
import {withRouter } from 'react-router-dom';
class Bean extends React.Component{
    constructor() {
        super()
    }
    componentWillMount () {
        console.log(this.props.history)
    }

    render() {
        return(
            <div>
                <div>路由参数：{this.props.history.location.query.name}</div>
                我的京豆  900
            </div>
        )
    }
}
const MyBean = withRouter(Bean)
export default MyBean;