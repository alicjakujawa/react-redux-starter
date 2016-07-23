import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';
import DevTools from './DevTools';
import store from "../store/configureStore";

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
