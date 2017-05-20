import React from 'react'
import { Link } from 'react-router-dom'
import LifeLevelerBanner from '../common/LifeLevelerBanner'

const Welcome = () => {
    const tagline = 'Start on the journey to level up in life.';
    return (
        <section id="login-form">
            <LifeLevelerBanner tagline={ tagline } />
            <h1></h1>
            <div className="login-actions">
                <ul>
                    <li>
                        <Link to="/login">
                            <button className="btn-login">Login</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <button className="btn-signup">Sign Up</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Welcome;