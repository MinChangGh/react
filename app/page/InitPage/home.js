import React from '_react@15.6.2@react'
import NavTab from '../../component/navTab'
import  { Link, withRouter } from "react-router-dom"
import Swiper from '../../component/swiper'
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [1, 2],
      image: [
        {
          tip: '1',
          img: '/app/image/1.jpeg'
        },
        {
          tip: '2',
          img: '/app/image/2.jpg'
        },
        {
          tip: '3',
          img: '/app/image/3.jpeg'
        },
        {
          tip: '4',
          img: '/app/image/4.jpeg'
        }
      ],
      obj: {
        a: 1
      },
      num: 2,
      isActive:1
    }
    this.count = this.count.bind(this)

    this.FromChild = this.FromChild.bind(this)
  }

  componentWillMount() {
  //console.log(this.props.location.state.id)
  }

  count() {

  }
  FromChild (data) {
    console.log(data)
  }
  toggle (index) {
    setTimeout(()=>{
      this.setState({
        isActive: this.state.isActive=index
      })
    },10)

  }
  render() {
    return (
      <div>
        {/*<List list={this.state.list} toChild={this.FromChild}></List>*/}
        <Swiper image={this.state.image}></Swiper>
        <NavTab></NavTab>

      </div>
    )
  }
}

export default withRouter(Home)
