import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import App from './App';

const element = document.getElementById('lifeleveler');

const render = (Component) => {
	ReactDOM.render(
	    <AppContainer>
	    	<Component />
	    </AppContainer>,
	    element
	);
};

render(App);

// Hot module replacement api
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
