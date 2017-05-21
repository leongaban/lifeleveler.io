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
                            <input type="text" name="email" placeholder="email"/>
                        </li>
                        <li>
                            <input type="password" name="password" placeholder="password"/>
                        </li>
                        <li>
                            <button className="btn-orange">Login</button>
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
                </div>
            </section>
        </div>
    );
}

export default Welcome;