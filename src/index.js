import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, compose (
    applyMiddleware(thunk, promise)
))

export default store;