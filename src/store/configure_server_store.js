import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router/server'
import thunk from 'redux-thunk'
import createLogger from 'redux-node-logger';

import createMemoryHistory from 'history/lib/createMemoryHistory'
import routes from '../routes.jsx'
import rootReducer from '../reducers'

const logger = createLogger()

const middleware = [
	applyMiddleware(thunk),
	reduxReactRouter({ routes, createHistory: createMemoryHistory }),
];

const finalCreateStore = compose(...middleware)(createStore)

export default function configureStore(initialState) {
	return finalCreateStore(rootReducer, initialState)
}