import React from '_react@15.6.2@react'

import {Link, withRouter} from "react-router-dom"
import {getbanner} from "../../api/api";
import store from '../../store/store'

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


  }

  toggle(index) {
    setTimeout(() => {
      this.setState({
        isActive:  index
      })
    }, 10)
  }

  render() {
    return (
      <div>
        <Link to="/home">home</Link><br/>
        <Link to="/list/2">list</Link>
      </div>
    )
  }
}

export default withRouter(Home)
