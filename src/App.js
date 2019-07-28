import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Components
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import HTTP404 from './components/shared/HTTP404';

// Styles
import './static/css/main.css';

import { DefaultRoute, ProtectedRoute } from './routes';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <DefaultRoute exact path="/" component={() => <Login />} />

          <ProtectedRoute exact path="/me" component={() => <Dashboard />} />

          <Route component={HTTP404} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
