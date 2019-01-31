import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { SERVER_URL } from '../../constants/server';

import { IAuth, IUser } from '../../Types';

// IAuth
// user: IUser
// updateUser: function

export interface ISignUpState {
  email: string;
  name: string;
  password: string;
}

class Signup extends Component<IAuth, ISignUpState> {
  public readonly state: ISignUpState = {
    email: '',
    name: '',
    password: '',
  };

  public render() {
    if (this.props.user) {
      return (<Redirect to="/profile" />);
    }
    return(
        <div>
          <h2>Signup as a new user</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="Name"
                placeholder="What is your name?"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
            <div>
              <input
                name="Email"
                placeholder="What is your email?"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <input
                name="Password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <input
              type="submit"
              value="Sign Me Up!"
              className="button"
            />
          </form>
        </div>
      );
  }

  private handleNameChange = (e: any) => { this.setState({ name: e.target.value }); };

  private handleEmailChange = (e: any) => { this.setState({ email: e.target.value }); };

  private handlePasswordChange = (e: any) => { this.setState({ password: e.target.value }); };

  private handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/auth/signup`, this.state);
      console.log('POST signup SUCCESS', response);
      localStorage.setItem('serverToken', response.data.token);
      this.props.updateUser();
    } catch (error) {
      // TODO: Handle errors
      console.log('Error POST signup', error);
    }
  }
}

export default Signup;
