import React from '_react@15.6.2@react'
import NavTab from '../../component/navTab'
import {Link, withRouter} from "react-router-dom"
import Swiper from '../../component/swiper'
import {getbanner} from "../../api/api";

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [1, 2],
      image: [],
      obj: {
        a: 1
      },
      num: 2,
      isActive: 1
    }

  }

  componentWillMount () {
    getbanner().then((res) => {
      this.setState({
        image: this.state.image.concat(res.data)
      })

    })
  }

  toggle(index) {
    setTimeout(() => {
      this.setState({
        isActive: this.state.isActive = index
      })
    }, 10)
  }

  render() {
    return (
      <div>
        <Swiper image={this.state.image}></Swiper>
        <NavTab></NavTab>
      </div>
    )
  }
}

export default withRouter(Home)
