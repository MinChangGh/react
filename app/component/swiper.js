import React from '_react@15.6.2@react'
import './swiper.scss'

class swiper extends React.Component {
  constructor(props) {
    super(props)
    this.index = 1
    this.timer = null
    this.startx = Number
    this.CurLen = Number
    this.font = document.documentElement.style.fontSize
    this.state = {
      startx: '',
      endx: Number,
      timer: null,
      swiper: {
        curIndex: 1
      }

    }
  }

  componentDidMount() {
    let el = document.getElementById('content')
    this.autoplay(el, true)
  }

  componentDidUpdate() {

  }

  componentWillMount() {

  }

  StartAction(e) {
    this.autoplay(el, false)
    let font = this.font
    font = font.replace(/px/g, "").trim()
    this.startx = e.touches[0].clientX
    let el = this.refs.content  // 滚动元素
    let str = getComputedStyle(el, null).getPropertyValue('transform')
    let regex = /\((.*)\)/;
    this.CurLen = regex.exec(str)[1].split(",")[4] / font; // 当前移动过的位移
  }

  EndAction(e) {
    let el = this.refs.content
    let len = this.props.image.length
    let reset = () => {
      this.index = 1
      el.style.transition = `0s`
      el.style.transform = `translateX(${-7.5 * (this.index)}rem)`
      el.removeEventListener('transitionend', reset)
    }
    let reset0 = () => {
      this.index = len - 2
      el.style.transition = `0s`
      el.style.transform = `translateX(${-7.5 * (this.index)}rem)`
      el.removeEventListener('transitionend', reset0)
    }
    let dif = this.startx - e.changedTouches[0].clientX
    if (Math.abs(dif) >= 100) {
      if (dif > 0) {   // 大于0 时 向左滑动
        // 处理
        this.index++
        if (this.index == len - 1) {
          el.style.transition = `0.1s`
          el.style.transform = `translateX(${-7.5 * (this.index)}rem)`
          el.addEventListener("transitionend", reset)
        } else {
          // 正常滑动
          el.style.transition = `0.1s`
          el.style.transform = `translateX(${-7.5 * (this.index)}rem)`

        }

      } else {

        // 向右滑动
        this.index--
        if (this.index == 0) {
          el.style.transition = `0.5s`
          el.style.transform = `translateX(${-7.5 * (this.index)}rem)`
          el.addEventListener("transitionend", reset0)

        } else {
          // 正常滑动
          el.style.transition = `0.5s`
          el.style.transform = `translateX(${-7.5 * (this.index)}rem)`

        }


      }
    } else {
      // 滑动距离过小还原至原来的位置
      el.style.transition = `0.5s`
      el.style.transform = `translate(${-7.5 * (this.index)}rem)`
    }
    setTimeout(() => {
      this.autoplay(el, true)
    }, 1000)
  }

  MoveAction(e) {
    let el = this.refs.content
    let font = this.font
    font = font.replace(/px/g, "").trim() //当前页面的font-size
    let distance = this.startx - e.touches[0].clientX    // 获取位移
    distance = distance / font  // 获取位移rem
    el.style.transition = "0s"
    el.style.transform = `translate(${-distance + this.CurLen}rem)`
  }

  autoplay(el, flag) {
    let len = this.props.image.length
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    } else {
      if (flag) {
        this.timer = setInterval(() => {
          this.index++
          if (this.index == len - 1) {
            el.style.transition = `0.2s`
            el.style.transform = `translate(${-7.5 * (this.index - 1)}rem)`
            setTimeout(() => {
              this.index = 1
              el.style.transition = `0s`
              el.style.transform = `translate(${-7.5 * (this.index - 1)}rem)`
            }, 1000)
          } else {
            el.style.transition = `0.2s`
            el.style.transform = `translate(${-7.5 * (this.index - 1)}rem)`
          }

        }, 2000)
      }
    }
    if (!flag) {
      this.state.timer = null
      clearInterval(this.timer)
    }
  }

  render() {
    let OraImage = this.props.image
    OraImage.push(this.props.image[0])
    OraImage.unshift(this.props.image[this.props.image.length - 2])
    return (
      <div className="wrapper">
        {this.props.children}
        <div id="content" className='content' ref='content'>
          {
            OraImage.map((item, index) => {
              return (
                <div
                  onTouchStart={this.StartAction.bind(this)}
                  onTouchEnd={this.EndAction.bind(this)}
                  onTouchMove={this.MoveAction.bind(this)}
                  className="imageBox" key={index}>
                  <img src={item.img}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default swiper
