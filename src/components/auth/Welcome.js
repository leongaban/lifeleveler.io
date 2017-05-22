import React from 'react'
import { Link } from 'react-router-dom'
import { not } from 'ramda'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import InputError from '../common/InputError'
import { validEmail, validPassword, getInputText, inputClasser } from '../../util/validation'

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
        const text = getInputText(type);

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
                                           className={ inputClasser('email', this.state) }
                                           onChange={() => this.handleBlur('email') }
                                           onBlur={() => this.handleBlur('email')} />
                                </li>
                                <li>
                                    <InputError
                                        on={ pass1Error }
                                        width={ 270 }
                                        msg={ 'A combination of at least 7 numbers & letters' } />

                                    <input type="password"
                                           id="input-signup-pass1"
                                           placeholder="password"
                                           className={ inputClasser('pass1', this.state) }
                                           onChange={() => this.handleBlur('pass1') }
                                           onBlur={() => this.handleBlur('pass1')} />
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