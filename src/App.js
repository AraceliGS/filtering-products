import React, { Component } from 'react';
import './App.css';
import Main from './lib/Main';
import { Provider } from 'react-redux';
// El que acabamos de crear
import store from './lib/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
