import React from '_react@15.6.2@react'
import TopBar from './topBar/topBar'
import './init.scss'
import {findGoods} from '../api/api'
import MyBean from "./aboutMe/myBean";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MyLoan from './aboutMe/myLoan'
import MyOrder from './aboutMe/myOrder'
import Slide from './slide/slide'
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
        <div className='search-wrapper'>
          <input onChange={(event)=>{this.handleSearch(event)}} name='searchTxt' type="text"/>
          <button onClick={this.Search.bind(this)}>搜索</button>
        </div>

        <div className='content-wrapper'>
          <Slide></Slide>
          <List></List>
        </div>

        <Switch>
          <Route path={`${this.props.match.path}/myorder`} exact component={MyOrder}></Route>
          <Route path={`${this.props.match.path}/mybean`} exact component={MyBean}></Route>
          <Route path={`${this.props.match.path}/myloan/:id`} exact component={MyLoan}></Route>
        </Switch>



      </div>
    )
  }
}

export default Init