import React from 'react'
import LifeLevelerBanner from '../common/LifeLevelerBanner'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    login() {
        console.log('%c Login clicked!', 'background: #393939; color: #bada55');
    }

    componentDidMount() {
        console.log('%c Login componentDidMount', 'background: #393939; color: #bada55');   
    }

    render() {
        const tagline = 'Sign in below';
        return (
            <section id="login-form">
                <LifeLevelerBanner tagline={ tagline } />
                <div className="login-actions">
                    <ul>
                        <li>
                            <button className="btn-login" onClick={ this.login }>Login</button>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}