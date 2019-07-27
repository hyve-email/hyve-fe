import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const DefaultRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  const requestedRoute = (
    <Route
      {...rest}
      render={props => (
        <div className="container">
          <Component {...props} />
        </div>
      )}
    />
  );

  return token ? <Redirect to="me" /> : requestedRoute;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  console.log('token', token)

  const dashboard = (
    <Route
      {...rest}
      render={props => (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  );

  return token ? dashboard : <Redirect to="/" />;
};

const AddPropsToRoute = (WrappedComponent, passedProps) => {
  return class Route extends React.Component {
    render() {
      const props = Object.assign({}, this.props, passedProps);
      return <WrappedComponent {...props} />;
    }
  };
};

export { DefaultRoute, ProtectedRoute, AddPropsToRoute };
