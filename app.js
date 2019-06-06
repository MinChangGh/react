import React from 'react'
import ReactDOM from 'react-dom'
import RouterPage from './app/router/indexRouter.js'
import './app/index.css'

function c() {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}

c();

window.onresize = function () {
  c()
}


ReactDOM.render(
  <RouterPage/>, document.getElementById('root')
)



