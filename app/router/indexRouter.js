import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../page/InitPage/home.js'
export default class RouterPage extends React.Component{
  render() {
    return(
      <div>
        <Router>
          <Route path="/home" component={Home}></Route>
          {/*<Route path="/" component={Home}></Route>*/}
          {/*<Route path="/home" component={Home}></Route>*/}
        </Router>
      </div>
    )
  }
}
