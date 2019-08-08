import React from '_react@15.6.2@react'
import './list.scss'
import { getList } from '../../api/api'
import { withRouter } from 'react-router-dom'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[]
    }
    this.PostToFa = this.PostToFa.bind(this)
  }

  componentWillMount() {
    this.getData()
  }
  getData () {
    getList().then((res)=>{
      this.setState({
        list: res.data
      })
    })
  }
  toDetail (info) {
    console.log(info)
    this.props.history.push({pathname: `/detail/${info.product_id}`});
  }

  PostToFa(data) {
    this.props.toChild(data)
  }

  render() {
    const { list } = this.state
    return (
      <ul className='list-page'>
        {
          list.map((item,index)=>{
            return(
              <li onClick={this.toDetail.bind(this,item)} className='list-item' key={index}>
                <img className='item-img' src={item.product_img_url}/>
                <p className='price'>￥{item.product_price}</p>
                <p className='info'> {item.product_name}</p>
              </li>
            )
          })
        }

      </ul>
    )
  }
}

export default withRouter(List);
