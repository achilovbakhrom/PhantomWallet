import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import thunk from 'redux-thunk';
import reducer from './reducer';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
const sagaMiddleware = createSagaMiddleware();
const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
  });
const middlewares = [sagaMiddleware, thunk, axiosMiddleware(client)];

const store = createStore(reducer, applyMiddleware(...middlewares));
store.runSaga = sagaMiddleware.run;

export default store;