import React from 'react'
import { Link } from 'react-router-dom'
import LifeLevelerBanner from '../common/LifeLevelerBanner'

const Welcome = () => {
    const tagline = 'Start on the journey to level up in life.';
    return (
        <div className="app-bg">
            <section id="login-form">
                <LifeLevelerBanner tagline={ tagline } />
                <h1></h1>
                <div className="login-actions">
                    <ul>
                        <li>
                            <input type="text" placeholder="email"/>
                        </li>
                        <li>
                            <input type="password" placeholder="password"/>
                        </li>
                        <li>
                            <button className="btn-login">Login</button>
                        </li>
                        <li>
                            <Link to="/signup">
                                <button className="btn-signup">Sign Up</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/forgot" className="forgot-pass">
                                <p>Forgot Password</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Welcome;