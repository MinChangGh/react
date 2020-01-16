import React from '_react@15.6.2@react'
import StoreTopBar from './topBar/topBar'
import './init.scss'
import {api} from '@/api/api2'
import {findGoods, upload} from '../api/api'
import MyBean from "./aboutMe/myBean";
import {Route, Switch} from 'react-router-dom'
import MyLoan from './aboutMe/myLoan'
import MyOrder from './aboutMe/myOrder'
import {Carousel, Icon, Input, Layout, Menu} from 'antd';

const {Search} = Input;
const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout;

class Init extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTxt: '',
      typeList: [],
      bannerList: [],
      lowPrice: [],
      left: 0,
      styl: {
        left: 0
      }
    }
  }

  componentWillMount() {
    this.getGoodsType()
    this.getBanner()
    this.getLowPrice()
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

  getLowPrice() {
    api.get({}, '/api/getLow').then((res) => {
      this.setState({
        lowPrice: res
      })
    })
  }

  getBanner() {
    api.get({}, '/api/getBanner').then((res) => {
      this.setState({
        bannerList: res
      })
    })
  }

  getGoodsType() {
    api.get({}, '/api/getType').then((res) => {
      this.setState({
        typeList: res
      })
    })
  }

  right() {
    this.setState({
      left: this.state.left - 210
    })
    this.setState({
      styl: {
        left: `${this.state.left}px`
      }
    })
  }

  left() {
    this.setState({
      left: this.state.left + 210
    })
    this.setState({
      styl: {
        left: `${this.state.left}px`
      }
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
    const lowPrice = (
    <div>
      <h4>秒杀</h4>
      <div className='low-price'>
        <p className='r-arrow'><Icon onClick={this.right.bind(this)} type="right-circle"/></p>
        <span className='l-arrow'><Icon onClick={this.left.bind(this)} type="left-circle"/></span>
        <ul ref='scrollBar' style={this.state.styl}>
          {this.state.lowPrice.map((item, index) => {
            return (
            <li key={item.product_id} className='low-li'><img src={item.product_img_url}/></li>
            )
          })}
        </ul>
      </div>

    </div>
    )
    const banner = (
    <div className='banner'>
      <Carousel autoplay>
        {this.state.bannerList.map((item, index) => {
          return (
          <div className='banner-wrap' key={item.product_id}>
            <img src={item.product_img_url}/>
          </div>
          )
        })}
      </Carousel>
    </div>
    )
    const goodsType = (
    <div className='goods-type'>
      {this.state.typeList.map((item, index) => {
        return (
        <p key={item.category_id} className='tag-wrap'>
          <span>{item.category_name}</span>|
        </p>
        )
      })}

    </div>
    )
    return (
    <div className='init'>
      <Layout>
        <Header>
          <StoreTopBar></StoreTopBar>
        </Header>
        <Content className='main-content'>
          <div className='search-wrap'>
            <div className='input-wrap'>
              <input className='search-index' type="text"/>
              <div className='index-btn'>搜索</div>
            </div>
          </div>
          <div className='banner-wrap'>
            {goodsType}
            {banner}
          </div>
          <div className='low-wrap'>
            {lowPrice}
          </div>
        </Content>
      </Layout>
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
