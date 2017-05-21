import React from 'react'
import firebase from 'firebase'
import { not } from 'ramda'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import InputError from '../common/InputError'
import { validEmail, validPassword } from '../../factories/utility'

// Firebase config (ToDo: extract into own file)
const config = {
    apiKey: "AIzaSyDMfCUnH-4fWti0uPUvBFwPlWCFZCdHDPw",
    authDomain: "lifeleveler-65857.firebaseapp.com",
    databaseURL: "https://lifeleveler-65857.firebaseio.com",
    projectId: "lifeleveler-65857",
    storageBucket: "lifeleveler-65857.appspot.com",
    messagingSenderId: "886791378526"
};
firebase.initializeApp(config);

export class SignUp extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            email: { text: '', error: false },
            pass1: { text: '', error: false },
            pass2: { text: '', error: false }
        };

        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
        console.log('%cSignUp componentDidMount', 'background: #393939; color: #bada55');
        console.log('firebase', firebase);
    }

	signup() {
        console.log('%c Signup clicked!', 'background: #393939; color: #bada55');

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
    }

    handleBlur(type) {
        const input_type = `input-signup-${type}`;
        const input = document.getElementById(input_type);
        const text = input.value;

        switch(type) {
            case 'email':
                not(validEmail(text))
                    ? this.setState({ email: { error: true }})
                    : this.setState({ email: { error: false }});
                break;
            case 'pass1':
                console.log('not(validPassword(text))', not(validPassword(text)));
                not(validPassword(text))
                    ? this.setState({ pass1: { error: true }})
                    : this.setState({ pass1: { error: false }});
                break;
            case 'pass2':
                not(validPassword(text))
                    ? this.setState({ pass2: { error: true }})
                    : this.setState({ pass2: { error: false }});
                break;
        }

        console.log('this.state', this.state);
    }

    render() {
    	const tagline = 'Create a new account to start on the journey of leveing up in life.';
        const emailError = this.state.email.error;
        const pass1Error = this.state.pass1.error;

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
                                    width={ 430 }
                                    msg={ 'A combination of at least 6 numbers, letters and punctuation like ! and &.' } />

                                <input type="password"
                                       id="input-signup-pass1"
                                       placeholder="password"
                                       className={inputClasser('pass1')}
                                       onBlur={() => this.handleBlur('pass1')}/>
                            </li>
                            <li>
                                <input type="password"
                                       id="input-signup-pass2"
                                       placeholder="confirm password"
                                       className={inputClasser('pass2')}
                                       onBlur={() => this.handleBlur('pass2')}/>
                            </li>
                            <li>
                                <button className="btn-orange" onClick={ this.signup }>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default SignUp;