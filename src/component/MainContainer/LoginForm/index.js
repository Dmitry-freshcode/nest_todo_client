import React, { Component } from 'react';
import API from '../../../api/index';
import axios from 'axios';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      response: '',
    };
  }

  loginHandler = async () => {
    //const response = await API.get('/');
    const response = await axios.get('localhost:3000');
    console.log(response);
    this.setState({ response: response });
  };

  createUser = async () => {};

  changeName = (event) => {
    //console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <p>Name</p>
        <input onChange={this.changeName} value={this.state.name}></input>
        <p>Password</p>
        <input></input>
        <div onClick={this.loginHandler}>login</div>
        <div onClick={this.createUser}>create</div>
        <h1>{this.state.name}</h1>
        {/* <div>{response}</div> */}
      </div>
    );
  }
}
