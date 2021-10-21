import {combineReducers, applyMiddleware, createStore as _createStore} from 'redux';
import {actions, reducers} from './modules';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

/**
 * Create property store.
 */
const createStore = () => {
    return _createStore(combineReducers(reducers), {}, middleware);
};

export {createStore, actions }
