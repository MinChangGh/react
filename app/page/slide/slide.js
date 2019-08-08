import React from 'react'
import './slide.scss'

class Slide extends React.Component{
  constructor () {
    super ()
  }

  render () {
    return (
      <div className='slide-wrapper'>
        <li>男装</li>
        <li>女装</li>
        <li>男鞋</li>
        <li>女装</li>
        <li>冬季</li>
        <li>夏季</li>
      </div>
    )
  }
}

export default Slide