import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import Init from './app/page/index'
import './app/style/index.scss'
import RouterPage from './app/router/indexRouter'
import store from './app/store/store'


// function c() {
//   document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
// }
//
// c();
//
// window.onresize = function () {
//   c()
// }


ReactDOM.render(
  <Provider store={store}>
    <RouterPage/>
  </Provider>
  , document.getElementById('root')
)



