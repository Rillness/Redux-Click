require('babel-register')


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

//Import the react router routes.
import routes from './routes';


import App from './App';

import { createStore } from 'redux';
import allReducers from './reducers/index';

var store = createStore(allReducers);


ReactDOM.render(<App store={store}/>, document);
