import React, { Component } from 'react';
import LoginForm from './LoginForm/index';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}
