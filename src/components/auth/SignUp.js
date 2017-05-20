import React from 'react';
import LifeLevelerBanner from '../common/LifeLevelerBanner'

export class SignUp extends React.Component {
	constructor(props) {
        super(props)
        this.state = {};
    }

	signup() {
        console.log('%c Signup clicked!', 'background: #393939; color: #bada55');
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