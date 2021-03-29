import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import postsReducer from './posts-reducer';

const rootReducer = combineReducers({
    postsReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));