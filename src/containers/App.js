import React, { Component } from 'react';
import { combineReducers, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';
import DevTools from './DevTools';

import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
let store
if(__DEV__) {
  const enhancer = compose(
    DevTools.instrument()
  );
  store = createStore(reducer, enhancer);
} else {
  store = createStore(reducer);
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <CounterContainer />
          {__DEV__ && <DevTools />}
        </div>
      </Provider>
    );
  }
}
