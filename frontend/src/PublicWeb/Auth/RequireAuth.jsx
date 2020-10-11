import React from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authentication extends React.Component {
    componentDidMount() {
      
      if (!JSON.parse(localStorage.getItem('user')) || !JSON.parse(localStorage.getItem('user')).token) {
        this.props.history.push('/login');
      }
    }

    componentDidUpdate(nextProps) {
      if (!JSON.parse(localStorage.getItem('user')).token) {
        nextProps.history.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = store => ({
    isAuthenticated: store.user.isAuthenticated,
  });

  return connect(mapStateToProps)(Authentication);
};
