import React, { Component } from "react";
import { Router } from 'react-router'
import { history } from './store'
import { Route, Redirect, Switch } from 'react-router-dom'

import List from './Pages/List/List'
import Edit from './Pages/Edit/Edit'
import Create from './Pages/Create/Create'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router  history={history}>
          <Switch>
            <Route path="/contacts/list" component={List} />
            <Route path="/contacts/create/" component={Create} />
            <Route path="/contacts/edit/:id" component={Edit} />
            <Redirect from="/" to="/contacts/list" />
          </Switch>
        </Router >
        <Footer />
      </div>
    );
  }
}
