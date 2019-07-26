import React from 'react';

export default class HTTP404 extends React.Component {
  componentWillMount = () => (document.title = 'No Match -  Hyve');

  componentWillUnmount = () => (document.title = 'Hyve - 404');

  render() {
    return (
      <h2>
        No match for <code>{this.props.history.location.pathname}</code>
      </h2>
    );
  }
}
