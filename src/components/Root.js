import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from './auth/Welcome'
import SignUp from './auth/SignUp'
import ForgotPass from './auth/ForgotPass'

export default class Root extends React.Component {
    render() {
        return (
            <div>
            	<Route exact={ true } path="/" component={ Welcome }/>
                <Route path="/signup" component={ SignUp }/>
                <Route path="/forgot" component={ ForgotPass }/>
            </div>
        );
    }
}