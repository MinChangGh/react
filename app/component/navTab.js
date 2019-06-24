import React from '_react@15.6.2@react'
import './navtab.scss'

class navTab extends React.Component {
  constructor(pros) {
    super()
    this.flag = 1
    // this.count = this.count.bind(this)
    //this.toggle = this.toggle.bind(this)
    this.state = {
      isActive: 0
    }
  }

  toggle(index) {
    setTimeout(() => {
      this.setState({
        isActive: this.state.isActive = index
      })
    }, 10)

  }

  componentDidMount() {
  }

  render() {
    let data = [{name: '男鞋'}, {name: '女鞋'}, {name: '男装'}, {name: '女装'}]
    return (
      <nav className="navbar">
        {
          data.map((item, index) => {
            return (
              <div key={index} className={this.state.isActive == index ? 'active' : ''} onClick={this.toggle.bind(this, index)}>{item.name}</div>
            )
          })
        }
      </nav>
    )
  }
}

export default navTab

