import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Root from './components/Root';
import reducers from './redux';


class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <Root />
        </Provider>
    );
  }
}

export default App;
