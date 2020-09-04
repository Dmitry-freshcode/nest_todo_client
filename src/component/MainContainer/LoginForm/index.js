import React, { Component } from 'react';
import API from '../../../api/index';
//import axios from 'axios';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',      
      password:'',
      createdUser:'',
      userError : false,
    };
  }

  createUser = async () =>{
    this.setState({userError:false});
    await API.post('/users/',{
      username: this.state.username,
      password: this.state.password
    });
    this.setState({ createdUser: this.state.username ,username:'', password:''});    
  }

  loginUser = async () => {
    this.setState({userError:false});
    let loginError;
    //const response = await API.get('/');
    const response = await API.post('/auth/login/',{
      username: this.state.username,
      password: this.state.password
    }).catch(function (error) {
      console.log(error);
      loginError=true;
    });

    if(response && response.data.access_token){
      this.props.callback(this.state.username , response.data.access_token);
    }
    if(loginError){this.setState({userError:loginError})};
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  changeName = (event) => {    
    this.setState({ username: event.target.value });
  };


  render() {  
      
        return (
        <div>
          <p>Name</p>
          <input onChange={this.changeName} value={this.state.username}></input>
          <p>Password</p>
          <input onChange={this.changePassword} value={this.state.password} type='password'></input>
          <br/>
          <div onClick={this.loginUser}>login</div>
          <br/>
          <div onClick={this.createUser}>create</div>
          {this.state.userError && <p>User {this.state.createdUser} wrong login or password</p>}     
        {this.state.createdUser && <p>User {this.state.createdUser} was created</p>}               
        </div>)     
    
  }
}
