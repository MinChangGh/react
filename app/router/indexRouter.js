import React from 'react'
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'
import Init from "../page";
import Detail from '../page/detail/detail'
import Cav from '../page/detail/cav'

export default class RouterPage extends React.Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Init} exact />
            <Route path="/base" component={Init}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/cav" component={Cav}></Route>

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
