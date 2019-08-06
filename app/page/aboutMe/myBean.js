import React from '_react@15.6.2@react'
import {withRouter } from 'react-router-dom';
class Bean extends React.Component{
    constructor() {
        super()
        this.state= {
            name: ''
        }
    }
    componentWillMount () {
        this.setQuery()
    }

    setQuery () {
        if (this.props.history.location.query) {
            let beanQuery = this.props.history.location.query
            sessionStorage.setItem('beanQuery',JSON.stringify(beanQuery))
        }
        if (sessionStorage.beanQuery) {
            this.setState({
                name: JSON.parse(sessionStorage.beanQuery).name
            })
        } else {
            this.setState({
                name: this.props.history.location.query.name
            })
        }
    }

    render() {
        return(
            <div>
                <div>路由参数：{this.state.name}</div>
                我的京豆  900
            </div>
        )
    }
}
const MyBean = withRouter(Bean)
export default MyBean;