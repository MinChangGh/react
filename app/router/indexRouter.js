import React from 'react'
import {BrowserRouter, Route, Link, Switch,withRouter} from 'react-router-dom'
import Home from '../page/InitPage/home.js'
import List from '../page/list/list.js'
withRouter (Home)
withRouter (List)
export default class RouterPage extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route  path="/list/:id?" component={List}></Route>
            <Route  path="/home"  component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
