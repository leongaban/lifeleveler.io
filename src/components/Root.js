import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from './auth/Welcome'
import Login from './auth/Login'
import SignUp from './auth/SignUp'

export default class Root extends React.Component {
    render() {
        return (
            <div>
            	<Route exact={ true } path="/" component={ Welcome }/>
                <Route path="/login" component={ Login }/>
                <Route path="/signup" component={ SignUp }/>
            </div>
        );
    }
}