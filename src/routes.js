import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import App from './App'

export default (
    <Switch>
        <Route component={App} exact path='/'/>
        <Route component={Dashboard} path = '/dashboard'/>
        <Route component={Form} path='/form'/>
    </Switch>
)