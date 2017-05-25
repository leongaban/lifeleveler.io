import React from 'react'
import LifeLevelerBanner from '../common/LifeLevelerBanner'

export default function SignUpSuccess() {
	// const tagline = 'You have created a new LifeLeveler account!';
	return (
		<div className="app-bg">
			<section id="auth-section">
				<LifeLevelerBanner />
				<h2>Congratulations! You have created a new LifeLeveler account.</h2>
				<h2>Please check your email to verify your account and login.</h2>
			</section>
		</div>
	)
}