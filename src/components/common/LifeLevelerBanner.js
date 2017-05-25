import React from 'react'
import { Link } from 'react-router-dom'

const LifeLevelerBanner = (props) => {
    const tagline = props.tagline ? props.tagline : '';
    return (
        <section id="auth-section" className="lifeleveler-banner">
            <Link to="/">
                <div className="lifeleveler-logo">
                    <div className="life">LIFE</div>
                    <div className="leveler">LEVELER</div>
                </div>
            </Link>
            <h1>{ tagline }</h1>
        </section>
    );
}

export default LifeLevelerBanner;