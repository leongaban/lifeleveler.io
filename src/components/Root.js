import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from './auth/Welcome'
import SignUp from './auth/SignUp'
import SignUpSuccess from './auth/SignUpSuccess'
import ForgotPass from './auth/ForgotPass'

export default class Root extends React.Component {
    render() {
        return (
            <div>
            	<Route exact={ true } path="/" component={ Welcome }/>
                <Route path="/signup" component={ SignUp }/>
                <Route path="/signupsuccess" component={ SignUpSuccess }/>
                <Route path="/forgot" component={ ForgotPass }/>
            </div>
        );
    }
}