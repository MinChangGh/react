import React from '_react@15.6.2@react'
import ReactDOM from '_react-dom@15.6.2@react-dom'
import '../css/home.css'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      obj: {
        a: 1
      },
      num: 2
    }
    this.count = this.count.bind(this)
  }

  count() {
    this.setState()
  }

  render() {
    return (
      <div style={{color:'red'}} className="home" onClick={this.count}>
        {this.state.num}
      </div>
    )
  }
}

export default Home
