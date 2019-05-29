
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './app/js/home.js'
import './app/css/index.css'
function c() {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 5 + 'px';
  console.log(document.documentElement.clientWidth)
}

c();

window.onresize=function () {
  c()
}

class App extends React.Component {
  render() {
    return (
      <Home/>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
