import React from 'react'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import firebase from 'firebase'

export class SignUp extends React.Component {
	constructor(props) {
        super(props)
        this.state = {};
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

    componentDidMount() {
        console.log('%c SignUp componentDidMount', 'background: #393939; color: #bada55');
    }

    render() {
    	const tagline = 'Create a new LifeLeveler account now!';
        return (
            <div className="app-bg">
                <section id="login-form">
                    <LifeLevelerBanner tagline={ tagline } />
                    <div className="login-actions">
                        <ul>
                            <li>
                                <button className="btn-login" onClick={ this.signup }>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default SignUp;