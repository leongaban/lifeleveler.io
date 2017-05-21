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

    render() {
    	const tagline = 'Create a new account to start on the journey of leveing up in life.';
        return (
            <div className="app-bg">
                <section id="login-form">
                    <LifeLevelerBanner tagline={ tagline } />
                    <div className="login-actions">
                        <ul>
                            <li>
                                <input type="text" placeholder="email"/>
                            </li>
                            <li>
                                <input type="password" placeholder="password"/>
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