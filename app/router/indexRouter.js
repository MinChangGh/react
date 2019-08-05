import React from 'react'
import { createBrowserHistory } from 'history';
import {BrowserRouter, Route, Link, Switch, withRouter, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store/store'
import Home from '../page/InitPage/home.js'
import List from '../page/list/list.js'
import MyLoan from '../page/aboutMe/myLoan'
import MyBean from '../page/aboutMe/myBean'
import MyOrder from '../page/aboutMe/myOrder'

import Init from "../page";

export default class RouterPage extends React.Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <Switch>
                        <Redirect path="/"  exact={true} to="/init"/>
                        <Route path="/init" component={Init}></Route>
                        <Route path="/MyLoan/:agument" component={MyLoan}></Route>
                        <Route path="/MyBean" component={MyBean}></Route>
                        <Route path="/MyOrder" component={MyOrder}></Route>
                        <Route path="/home" component={Home}></Route>
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}
