import React from 'react'
import Login from './components/Login'
import css from './lifeleveler.scss'

export default class App extends React.Component {
    render() {
        return (
            <div id="app-bg">
                <Login />
            </div>
        );
    }
}