import React from '_react@15.6.2@react'
import TopBar from './topBar/topBar'
import {Layout, Row, Col, Input} from 'antd';
import './init.scss'
import {findGoods} from '../api/api'
import MyBean from "./aboutMe/myBean";
import {BrowserRouter, Route, Router, withRouter, Link, Switch} from 'react-router-dom'
import MyLoan from './aboutMe/myLoan'
import MyOrder from './aboutMe/myOrder'
import List from './list/list'





class Init extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTxt: ''
    }
  }

  componentWillMount() {


  }

  handleSearch(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  Search() {
    if (this.state.searchTxt != '') {
      let data = {
        txt: this.state.searchTxt
      }
      this.props.history.location.push({pathname: "/list"})
      findGoods(data).then(res => {

      }).catch(err => {

      })
    }
  }

  render() {
    return (
      <div className='init'>
        <TopBar></TopBar>

        <input onChange={(event)=>{this.handleSearch(event)}} name='searchTxt' type="text"/>
        <button onClick={this.Search.bind(this)}>搜索</button>

          {/*<Switch>*/}
          {/*  <Route path="init/MyOrder" component={MyOrder}></Route>*/}
          {/*  /!*<Route path="/MyBean" component={MyBean}></Route>*!/*/}
          {/*  <Route path="/MyLoan" component={MyLoan}></Route>*/}

          {/*  <Route path="/list" component={List}></Route>*/}
          {/*</Switch>*/}



      </div>
    )
  }
}

export default Init