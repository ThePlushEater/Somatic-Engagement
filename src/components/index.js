import "babel-polyfill";

import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider, connect } from "react-redux";
import store from "./../store/store";

import Layout from "./layout";
import App from "./app";
require('./index.scss');

ReactDom.render(<Provider store={store}>
  <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={App} />
      </Route>
    </Router>
  </Provider>
, document.querySelector('#app'));
