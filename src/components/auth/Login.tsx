import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { IAuth } from '../../Types';

import { SERVER_URL } from '../../constants/server';

export interface ILoginState {
  email: string;
  password: string;
}

class Login extends Component<IAuth, ILoginState> {
  public readonly state: ILoginState = {
    email: '',
    password: '',
  };

  public render() {
    if (this.props.user) {
      return (<Redirect to="/profile" />);
    }
    return(
        <div>
          <h2>Log In</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="Email"
                placeholder="What is your email?"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <input name="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <input type="submit" value="Log Me In!" className="button" />
          </form>
        </div>
      );
  }

  public handleEmailChange = (e: any) => { this.setState({ email: e.target.value }); };

  public handlePasswordChange = (e: any) => { this.setState({ password: e.target.value }); };

  public handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/auth/login`, this.state);
      localStorage.setItem('serverToken', response.data.token);
      this.props.updateUser();
    } catch (error) {
      // TODO: handle errors
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  }
}

export default Login;
