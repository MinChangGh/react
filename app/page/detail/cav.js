import React from 'react'
import './cav.scss'

class Cav extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.setCav()
  }

  setCav() {
    const canvas = document.getElementById('cav');
    const ctx = canvas.getContext('2d');
    ctx.arc(500,400,200,0,Math.PI*2)
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(500, 400)
    ctx.lineTo(500,300)
    ctx.lineWidth = 8
    ctx.closePath()
    ctx.stroke()
  }

  render() {
    return (
    <div className='cav-wrap'>
      <canvas id='cav' width='800' height="800"></canvas>
    </div>
    )
  }
}

export default Cav
