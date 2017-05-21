import React from 'react'
import { not, equals } from 'ramda'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import InputError from '../common/InputError'
import { validEmail, validPassword } from '../../util/validation'

export class SignUp extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            email: { text: '', error: false },
            pass1: { text: '', error: false },
            pass2: { text: '', error: false, errorMsg: '' }
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('%cSignUp componentDidMount', 'background: #393939; color: #bada55');
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
                if (validPassword(text)) {
                    this.setState({ pass2: { error: false, text }})
                }
                break;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('%c handleSubmit', 'background: #393939; color: #bada55');
        const email = this.state.email.text;
        const pass1 = this.state.pass1.text;
        const pass2 = this.state.pass2.text;

        const setPass2Err = (text) => {
            this.setState({
                pass2: {
                    text,
                    error: true,
                    errorMsg: 'Passwords must match'
                }
            });
        };

        const createUser = (email, password) => {
            console.log('createUser and redirect to login with msg!');
        };

        const checkPasswords = () => {
            if (validPassword(pass1) && validPassword(pass2)) {
                equals(pass1, pass2) ? createUser(email, pass1) : setPass2Err(pass2);
            } else {
                this.setState({ pass1: { error: true }});
            }
        };

        if (validEmail(email)) {
            checkPasswords();
        } else {
            this.setState({ email: { error: true }});
        }
    }

    render() {
    	const tagline = 'Create a new account to start on the journey of leveing up in life.';
        const emailError = this.state.email.error;
        const pass1Error = this.state.pass1.error;
        const pass2Error = this.state.pass2.error;

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
                    <div className="login-actions">
                        <form onSubmit={this.handleSubmit}>
                            <ul>
                                <li>
                                    <InputError on={ emailError } msg={ 'Please enter a valid email.' } />

                                    <input type="text"
                                           id="input-signup-email"
                                           placeholder="email"
                                           className={inputClasser('email')}
                                           onChange={() => this.handleBlur('email') }
                                           onBlur={() => this.handleBlur('email')}/>
                                </li>
                                <li>
                                    <InputError
                                        on={ pass1Error }
                                        width={ 270 }
                                        msg={ 'A combination of at least 7 numbers & letters' } />

                                    <input type="password"
                                           id="input-signup-pass1"
                                           placeholder="password"
                                           className={inputClasser('pass1')}
                                           onChange={() => this.handleBlur('pass1') }
                                           onBlur={() => this.handleBlur('pass1')}/>
                                </li>
                                <li>
                                    <InputError
                                        on={ pass2Error }
                                        width={ 140 }
                                        msg={ this.state.pass2.errorMsg } />

                                    <input type="password"
                                           id="input-signup-pass2"
                                           placeholder="confirm password"
                                           onChange={() => this.handleBlur('pass2') }
                                           className={inputClasser('pass2')}/>
                                </li>
                                <li>
                                    <button className="btn-orange">Sign Up</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default SignUp;