import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


export default function App(props) {
  return (
    <Provider store={props.store}>
      {routes}
    </Provider>
  );
}
