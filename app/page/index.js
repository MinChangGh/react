import React from '_react@15.6.2@react'
import TopBar from './topBar/topBar'
import {Layout, Row, Col, Input } from 'antd';
import './init.scss'
import { findGoods } from '../api/api'

const {Header, Footer, Sider, Content} = Layout;
const { Search } = Input;


class Init extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTxt:''
    }
  }
  componentWillMount () {
    console.log(findGoods)
  }
  handleSearch (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  Search () {
   if (this.state.searchTxt != '') {
     let data = {
       txt: this.state.searchTxt
     }
     findGoods(data).then(res=>{

     }).catch(err=>{

     })
   }
  }

  render() {
    return (
      <div className='init'>
        <TopBar>aa</TopBar>
        <div className='content'>
          <div className='search-wrapper'>
            <input onChange={(event)=>{this.handleSearch(event)}} name='searchTxt' placeholder='请输入搜索内容' type="text"/>
            <button onClick={this.Search.bind(this)}>搜索</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Init;