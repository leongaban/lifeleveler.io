import React from 'react'

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
        return (
            <section id="login-form">
                <div className="lifeleveler-logo">
                    <div className="life">LIFE</div>
                    <div className="leveler">LEVELER</div>
                </div>
                <h1>Start on the journey to level up in life.</h1>
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