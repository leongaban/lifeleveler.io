import React from 'react'
import { Link } from 'react-router-dom'
import { not } from 'ramda'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import InputError from '../common/InputError'
import { validEmail, validPassword } from '../../util/validation'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: { text: '', error: false },
            pass1: { text: '', error: false }
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('%cWelcome componentDidMount', 'background: #393939; color: #bada55');
    }

    handleBlur(type) {
        const input_type = `input-signup-${type}`;
        const input = document.getElementById(input_type);
        const text = input.value;

        switch(type) {
            case 'email':
                not(validEmail(text))
                    ? this.setState({ email: { error: true }})
                    : this.setState({ email: { error: false, text }});
                break;
            case 'pass1':
                not(validPassword(text))
                    ? this.setState({ pass1: { error: true }})
                    : this.setState({ pass1: { error: false, text }});
                break;
            case 'pass2':
                if (validPassword(text)) this.setState({ pass2: { error: false, text }});
                break;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('%c handleSubmit', 'background: #393939; color: #bada55', this.state);
    }

    render() {
        const tagline = 'Start on the journey to level up in life.';
        const emailError = this.state.email.error;
        const pass1Error = this.state.pass1.error;

        // Move this to Auth
        const inputClasser = (type) => {
            switch(type) {
                case 'email': return this.state.email.error ? 'error' : ''; break;
                case 'pass1': return this.state.pass1.error ? 'error' : ''; break;
                case 'pass2': return this.state.pass2.error ? 'error' : ''; break;
            }
        };

        return (
            <div className="app-bg">
                <section id="login-form">
                    <LifeLevelerBanner tagline={ tagline } />
                    <h1></h1>
                    <div className="login-actions">
                        <form onSubmit={ this.handleSubmit }>
                            <ul>
                                <li>
                                    <InputError on={ emailError } msg={ 'Please enter a valid email.' } />
                                    <input type="text"
                                           id="input-signup-email"
                                           placeholder="email"
                                           className={ inputClasser('email') }
                                           onChange={() => this.handleBlur('email') }
                                           onBlur={() => this.handleBlur('email')}/>
                                </li>
                                <li>
                                    <input type="password"
                                           id="input-signup-pass1"
                                           placeholder="password"/>
                                </li>
                                <li>
                                    <button className="btn-orange" type="submit">Login</button>
                                </li>
                                <li>
                                    <Link to="/signup">
                                        <button className="btn-gray">Sign Up</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/forgot" className="small-auth-link">
                                        <p>Forgot Password</p>
                                    </Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}