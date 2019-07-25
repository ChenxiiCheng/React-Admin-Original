import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/Login';
import Home from './pages/Home';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Route path="/home" component={Home} />
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
export default Router;
