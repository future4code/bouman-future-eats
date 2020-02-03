import React, { Component } from 'react';
import { connect } from 'react-redux'

// import { Container } from './styles';

export class Login extends Component {
  render() {
    return (
      <div>
        Login Page
      </div>
    );
  }
}

export default connect()(Login)