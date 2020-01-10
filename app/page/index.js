import React from '_react@15.6.2@react'
import TopBar from './topBar/topBar'
import './init.scss'
import {findGoods, upload} from '../api/api'
import MyBean from "./aboutMe/myBean";
import {Route, Switch} from 'react-router-dom'
import MyLoan from './aboutMe/myLoan'
import MyOrder from './aboutMe/myOrder'
import {Breadcrumb, Icon, Layout, Menu, Input} from 'antd';
const { Search } = Input;
const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout;

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
    for (let i = 0; i < shardCount; i++) {
      var start = i * shardSize,
      end = Math.min(size, start + shardSize);
      let myData = new FormData()
      myData.append('fl', file.slice(start, end))
      myData.append('index', i + 1)
      myData.append('all', shardCount)
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
    const goodsType = (
    <div className='goods-type'>

    </div>
    )
    return (
    <div className='init'>
      <Layout>
        <Header>
          <TopBar></TopBar>
        </Header>
        <Content className='main-content'>
          <div className='search-wrap'>
            {/*<Icon style={{fontSize: '50px', color: '#f96c3c'}} type="taobao-circle" />*/}
            <div className='input-wrap'>
              <input className='search-index' type="text"/>
              <div className='index-btn'>搜索</div>
            </div>
          </div>
          <div style={{height: '900px'}}></div>
          {goodsType}
        </Content>
        {/*<Layout>*/}
        {/*  <Sider width={200} style={{background: '#fff'}}>*/}
        {/*    <Menu*/}
        {/*    mode="inline"*/}
        {/*    defaultSelectedKeys={['1']}*/}
        {/*    defaultOpenKeys={['sub1']}*/}
        {/*    style={{height: '100%', borderRight: 0}}*/}
        {/*    >*/}
        {/*      <SubMenu*/}
        {/*      key="sub1"*/}
        {/*      title={*/}
        {/*        <span>*/}
        {/*        <Icon type="user"/>*/}
        {/*        subnav 1*/}
        {/*      </span>*/}
        {/*      }*/}
        {/*      >*/}
        {/*        <Menu.Item key="1">option1</Menu.Item>*/}
        {/*        <Menu.Item key="2">option2</Menu.Item>*/}
        {/*        <Menu.Item key="3">option3</Menu.Item>*/}
        {/*        <Menu.Item key="4">option4</Menu.Item>*/}
        {/*      </SubMenu>*/}
        {/*      <SubMenu*/}
        {/*      key="sub2"*/}
        {/*      title={*/}
        {/*        <span>*/}
        {/*        <Icon type="laptop"/>*/}
        {/*        subnav 2*/}
        {/*      </span>*/}
        {/*      }*/}
        {/*      >*/}
        {/*        <Menu.Item key="5">option5</Menu.Item>*/}
        {/*        <Menu.Item key="6">option6</Menu.Item>*/}
        {/*        <Menu.Item key="7">option7</Menu.Item>*/}
        {/*        <Menu.Item key="8">option8</Menu.Item>*/}
        {/*      </SubMenu>*/}
        {/*      <SubMenu*/}
        {/*      key="sub3"*/}
        {/*      title={*/}
        {/*        <span>*/}
        {/*        <Icon type="notification"/>*/}
        {/*        subnav 3*/}
        {/*      </span>*/}
        {/*      }*/}
        {/*      >*/}
        {/*        <Menu.Item key="9">option9</Menu.Item>*/}
        {/*        <Menu.Item key="10">option10</Menu.Item>*/}
        {/*        <Menu.Item key="11">option11</Menu.Item>*/}
        {/*        <Menu.Item key="12">option12</Menu.Item>*/}
        {/*      </SubMenu>*/}
        {/*    </Menu>*/}
        {/*  </Sider>*/}
        {/*  <Layout >*/}
        {/*    /!*<Breadcrumb style={{margin: '16px 0'}}>*!/*/}
        {/*    /!*  <Breadcrumb.Item>Home</Breadcrumb.Item>*!/*/}
        {/*    /!*  <Breadcrumb.Item>List</Breadcrumb.Item>*!/*/}
        {/*    /!*  <Breadcrumb.Item>App</Breadcrumb.Item>*!/*/}
        {/*    /!*</Breadcrumb>*!/*/}
        {/*    <Content*/}
        {/*    style={{*/}
        {/*      background: '#fff',*/}
        {/*      padding: 24,*/}
        {/*      margin: 0,*/}
        {/*      height: '100%'*/}
        {/*    }}*/}
        {/*    >*/}
        {/*      Content*/}
        {/*    </Content>*/}
        {/*  </Layout>*/}
        {/*</Layout>*/}


      </Layout>

      {/*<div className='search-wrapper'>*/}
      {/*  <input onChange={(event) => {*/}
      {/*    this.handleSearch(event)*/}
      {/*  }} name='searchTxt' type="text"/>*/}
      {/*  <button onClick={this.Search.bind(this)}>搜索</button>*/}
      {/*  <input onChange={(e) => {*/}
      {/*    this.handelFile(e)*/}
      {/*  }} id="upload" type="file"/>*/}
      {/*</div>*/}

      {/*<div className='content-wrapper'>*/}
      {/*  <Slide></Slide>*/}
      {/*  <List></List>*/}
      {/*</div>*/}

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
