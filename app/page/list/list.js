import React from '_react@15.6.2@react'

class List extends React.Component {
  constructor() {
    super()
    this.PostToFa = this.PostToFa.bind(this)
  }

  componentWillMount() {

  }

  PostToFa(data) {
    this.props.toChild(data)
  }

  render() {
    return (
      <div>
        <h2>list</h2>
        {/*{this.props.list.map((item, index) => {*/}
        {/*  return (*/}
        {/*    <li onClick={this.PostToFa.bind(this, item)} key={index}>{item}</li>*/}
        {/*  )*/}
        {/*})}*/}
      </div>
    )
  }
}

export default List;
