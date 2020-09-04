import React, { Component } from 'react';
import LoginForm from './LoginForm/index';
import TodosList from './TodosList';
import styles from './MainContainer.module.scss';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
     token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwiaWF0IjoxNTk5MjIzNDc4LCJleHAiOjE1OTkzMDk4Nzh9.-NSFeC7VxjAvQ5EBqdlrmlKhevo-yxmBi48FzVl7IkU',
      //token:'',
      username:''
    };
  }
  callBackLogin = (username,token) =>{
    this.setState({username:username, token: token});
  }

  render(){

    const render = (!this.state.token)?
    <LoginForm callback={this.callBackLogin}/>:
    <TodosList token={this.state.token} username={this.state.username}/>
      ;
  return ( 
  <div className={styles.mainContainer}>
    {render}   
  </div>)
  }
}
