import React from 'react'
import firebase from 'firebase'
import { not } from 'ramda'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import { validateEmail } from '../../factories/utility'

const displayError = (type) => {
    if (type === 'email') {

    }
};

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
            email:     { text: '', error: false },
            password:  { text: '', error: false },
            password2: { text: '', error: false }
        };

        this.handleBlur = this.handleBlur.bind(this);
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

    componentDidMount() {
        console.log('%cSignUp componentDidMount', 'background: #393939; color: #bada55');
        console.log('firebase', firebase);
    }

    handleBlur(type) {
        const input_type = `input-signup-${type}`;
        const input = document.getElementById(input_type);
        const text = input.value;

        if (type === 'email') {
            const validEmail = validateEmail(text);
            const emailError = this.state.email.error;

            not(validEmail)
                ? this.setState({
                    email: { error: true }
                })
                : this.setState({
                    email: { error: false }
                });

            console.log('this.state', this.state);
        }
        
    }

    render() {
    	const tagline = 'Create a new account to start on the journey of leveing up in life.';

        const inputClasser = (type) => {
            switch(type) {
                case 'email':     return this.state.email.error     ? 'error' : ''; break;
                case 'password':  return this.state.email.password  ? 'error' : ''; break;
                case 'password2': return this.state.email.password2 ? 'error' : ''; break;
            }            
        };

        return (
            <div className="app-bg">
                <section id="login-form">
                    <LifeLevelerBanner tagline={ tagline } />
                    <div className="login-actions">
                        <ul>
                            <li>
                                <input type="text"
                                       id="input-signup-email"
                                       placeholder="email"
                                       className={ inputClasser('email') }
                                       onBlur={() => this.handleBlur('email')}/>
                            </li>
                            <li>
                                <input type="password"
                                       id="input-signup-pass1"
                                       placeholder="password"
                                       onBlur={() => this.handleBlur('pass1')}/>
                            </li>
                            <li>
                                <input type="password"
                                       id="input-signup-pass2"
                                       name="password2"
                                       placeholder="confirm password"
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