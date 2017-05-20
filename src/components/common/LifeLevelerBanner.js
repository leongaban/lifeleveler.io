import React from 'react'
import { Link } from 'react-router-dom'

const LifeLevelerBanner = (props) => {
    return (
        <section id="login-form" className="lifeleveler-banner">
            <Link to="/">
                <div className="lifeleveler-logo">
                    <div className="life">LIFE</div>
                    <div className="leveler">LEVELER</div>
                </div>
            </Link>
            <h1>{ props.tagline }</h1>
        </section>
    );
}

export default LifeLevelerBanner;