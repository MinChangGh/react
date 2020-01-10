import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Init from "../page";
import Detail from '../page/detail/detail'

export default class RouterPage extends React.Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <BrowserRouter>
          <Switch>
            <Route path="/base" component={Init}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
