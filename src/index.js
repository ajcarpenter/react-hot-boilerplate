import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/app';

import './scss/index.scss';

import configureStore from './store/configure_store';

const preloadedState = window.__PRELOADED_STATE__ || {};

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>

			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);