import React from 'react'
import { Link } from 'react-router-dom'
import LifeLevelerBanner from '../common/LifeLevelerBanner'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: { text: '', error: false },
            pass: { text: '', error: false }
        };

        // this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('%cWelcome componentDidMount', 'background: #393939; color: #bada55');
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('%c handleSubmit', 'background: #393939; color: #bada55', this.state);
    }

    render() {
        const tagline = 'Start on the journey to level up in life.';

        return (
            <div className="app-bg">
                <section id="login-form">
                    <LifeLevelerBanner tagline={ tagline } />
                    <h1></h1>
                    <div className="login-actions">
                        <form onSubmit={this.handleSubmit}>
                            <ul>
                                // <li>
                                    <input type="text" name="email" placeholder="email"/>
                                </li>
                                <li>
                                    <input type="password" name="password" placeholder="password"/>
                                </li>
                                <li>
                                    <button className="btn-orange" type="submit">Login</button>
                                </li>
                                <li>
                                    <Link to="/signup">
                                        <button className="btn-gray">Sign Up</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/forgot" className="small-auth-link">
                                        <p>Forgot Password</p>
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