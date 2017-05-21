import React from 'react'
import firebase from 'firebase'
import { not, equals } from 'ramda'
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

const createUser = (state) => {
    const email = state.email.text;
    const password = state.pass1.text;

    console.log('createUser', state);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log('res', res);
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    debugger;
                    console.log('User is signed in.');
                    console.log('user', user);
                    // Route user back to Login view
                    // And show message "Please verify your email then login below!"
                } else {
                    console.log('No user is signed in.');
                }
            });
        })
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode', errorCode);
            console.log('errorMessage', errorMessage);
        });
};

export class SignUp extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            email: { text: '', error: false },
            pass1: { text: '', error: false },
            pass2: { text: '', error: false, errorMsg: '' }
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.signup = this.signup.bind(this);
    }

    componentDidMount() {
        console.log('%cSignUp componentDidMount', 'background: #393939; color: #bada55');
        console.log('firebase', firebase);
    }

	signup() {
        // console.log('%c Signup clicked!', 'background: #393939; color: #bada55');
        const pass1 = this.state.pass1.text;
        const pass2 = this.state.pass2.text;
        equals(pass1, pass2) ? createUser(this.state) : this.setState({ pass2: { error: true, errorMsg: 'Passwords must match' }});
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
                                    msg={ 'A combination of at least 6 numbers & letters' } />

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