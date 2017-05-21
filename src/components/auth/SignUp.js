import React from 'react'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import firebase from 'firebase'

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
            email: '',
            password: ''
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
        console.log(' text', text);
    }

    render() {
    	const tagline = 'Create a new account to start on the journey of leveing up in life.';

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
                                       laceholder="confirm password"
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