import React from 'react'
import { Link } from 'react-router-dom'
import { not } from 'ramda'
import { validEmail, inputClasser } from '../../util/validation'
import LifeLevelerBanner from '../common/LifeLevelerBanner'
import InputError from '../common/InputError'

class ForgotPass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: { text: '', error: false }
        };

        this.handleBlur = this.handleBlur.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleBlur() {
        const text = document.getElementById('input-signup-email').value;
        not(validEmail(text))
            ? this.setState({ email: { error: true }})
            : this.setState({ email: { error: false, text }});
    }

    render() {
        const tagline = 'Reset your password, submit the email you signed up with.';
        const emailError = this.state.email.error;

        return (
            <div className="app-bg">
                <section id="login-form">
                    <LifeLevelerBanner tagline={ tagline } />
                    <div className="login-actions">
                        <InputError on={ emailError }
                                    width={ 160 }
                                    msg={ 'Please enter a valid email.' } />
                                    
                        <input type="text"
                               id="input-signup-email"
                               placeholder="email"
                               className={ inputClasser('email', this.state) }
                               onChange={() => this.handleBlur() }
                               onBlur={() => this.handleBlur()} />
                        <button className="btn-orange" type="submit">Submit</button>
                    </div>
                    <div className="fl mt20 w100">
                        <Link to="/" className="small-auth-link">
                            <p>Login</p>
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default ForgotPass;