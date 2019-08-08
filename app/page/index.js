import React from '_react@15.6.2@react'
import TopBar from './topBar/topBar'
import './init.scss'
import {findGoods, upload} from '../api/api'
import MyBean from "./aboutMe/myBean";
import {Route, Switch} from 'react-router-dom'
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

  handelFile(e) {
    let file = e.target.files[0]
    let size = file.size
    var shardSize = 4 * 1024 * 1024,    //以2MB为一个分片
    shardCount = Math.ceil(size / shardSize);
    for (let i = 0; i<shardCount; i++) {
      var start = i * shardSize,
      end = Math.min(size, start + shardSize);
      let myData = new FormData()
      myData.append('fl', file.slice(start,end))
      myData.append('index',i+1)
      myData.append('all',shardCount)
      upload(myData).then((res) => {
        console.log(res)
      })
    }

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
          <input onChange={(event) => {
            this.handleSearch(event)
          }} name='searchTxt' type="text"/>
          <button onClick={this.Search.bind(this)}>搜索</button>
          <input onChange={(e) => {
            this.handelFile(e)
          }} id="upload" type="file"/>
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