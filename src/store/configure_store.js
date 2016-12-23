import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

import rootReducer from '../reducers'

const logger = createLogger()

const middleware = [
	applyMiddleware(thunk),
	applyMiddleware(logger)
]

if(window.devToolsExtension) {
	middleware.push(window.devToolsExtension())
}

const finalCreateStore = compose(...middleware)(createStore)

export default function configureStore(initialState) {
	return finalCreateStore(rootReducer, initialState)
}