import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './components/Root'
import css from './lifeleveler.scss'
const supportsHistory = "pushState" in window.history

export default class App extends React.Component {
	render() {
	    return (
			<Router forceRefresh={!supportsHistory}>
				<Root />
			</Router>
	    );
	}
}