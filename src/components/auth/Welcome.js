import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <section id="login-form">
            <div className="lifeleveler-logo">
                <div className="life">LIFE</div>
                <div className="leveler">LEVELER</div>
            </div>
            <h1>Start on the journey to level up in life.</h1>
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