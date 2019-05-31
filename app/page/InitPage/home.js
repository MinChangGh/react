import React from '_react@15.6.2@react'
import './home.css'


class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [1, 2],
      obj: {
        a: 1
      },
      num: 2,
      isActive:1
    }
    this.count = this.count.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  componentWillMount() {
    // let arr=[]
    // for (let i =0;i<100;i++){
    //   arr.push(i)
    // }
    // this.setState({
    //   list:this.state.list = arr
    // });

  }

  count() {

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
        <nav className="navbar">
          <div className={this.state.isActive==1? 'active': ''} onClick={this.toggle.bind(this,1)}>首页</div>
          <div className={this.state.isActive==2? 'active': ''} onClick={this.toggle.bind(this,2)}>列表</div>
        </nav>

      </div>
    )
  }
}

export default Home
