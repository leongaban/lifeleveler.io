import React from 'react'
import { Link } from 'react-router-dom'
import { not, equals } from 'ramda'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import InputError from '../common/InputError'
import { validEmail, validPassword, getInputText, inputClasser } from '../../util/validation'

class SignUp extends React.Component {
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
            case 'pass2':
                if (validPassword(text)) this.setState({ pass2: { error: false, text }});
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
                pass2: { text, error: true, errorMsg: 'Passwords must match' }
            });
        };

        const createUser = (email, password) => {
            console.log('createUser and redirect to login with message!');
        };

        const checkPasswords = () => {
            if (validPassword(pass1) && validPassword(pass2)) {
                equals(pass1, pass2) ? createUser(email, pass1) : setPass2Err(pass2);
            } else {
                this.setState({ pass1: { error: true }});
            }
        };

        validEmail(email) ? checkPasswords() : this.setState({ email: { error: true }});
    }

    render() {
    	const tagline = 'Create a new account to start on the journey of leveling up in life.';
        const emailError = this.state.email.error;
        const pass1Error = this.state.pass1.error;
        const pass2Error = this.state.pass2.error;

        return (
            <div className="app-bg">
                <section id="login-form">
                    <LifeLevelerBanner tagline={ tagline } />
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
                                    <InputError
                                        on={ pass2Error }
                                        width={ 140 }
                                        msg={ this.state.pass2.errorMsg } />

                                    <input type="password"
                                           id="input-signup-pass2"
                                           placeholder="confirm password"
                                           className={ inputClasser('pass2', this.state) }
                                           onChange={() => this.handleBlur('pass2') } />
                                </li>
                                <li>
                                    <button className="btn-orange" type="submit">Sign Up</button>
                                </li>
                                <li>
                                    <Link to="/" className="small-auth-link">
                                        <p>Login</p>
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

export default SignUp;