import axios from 'axios';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SERVER_URL } from '../constants/server';

import Login from './auth/Login';
import Signup from './auth/Signup';
import Header from './header/Header';
import Home from './Home';
import JoinList from './JoinList';
import Footer from './layout/Footer';
import NewList from './NewList';
import Profile from './Profile';

export interface IAppState {
  user: any;
  usersLists: any;
}

class App extends React.Component<any, IAppState> {
  public readonly state: IAppState = {
    user: null,
    usersLists: [],
  };

  public componentDidMount = () => {
    this.getUser();
  }

  public getUser = () => {
    const token = localStorage.getItem('serverToken');
    if (token) {
      axios.post(`${SERVER_URL}/auth/current/user`, {
        headers: { Authorization: `Bearer ${token}`},
      })
        .then((response) => {
          this.setState({
            user: response.data.user,
          });
        })
        .catch((error) => {
          // TODO: add error message
          this.setState({ user: null });
        });
    } else {
      // TODO: add no token message
      this.setState({
        user: null,
      });
    }
  }

  public getAllLists = () => {
    const token = localStorage.getItem('serverToken');
    if (token) {
      axios.post(`${SERVER_URL}/lists`, {
        headers: { Authorization: `Bearer ${token}`},
        userId: this.state.user.id,
      })
        .then((response) => {
          this.setState({
            usersLists: response.data,
          });
        })
        .catch((error) => {
          // TODO: add error message
          this.setState({ usersLists: [] });
        });
    } else {
      // TODO: add no token message
      this.setState({
        user: null,
        usersLists: [],
      });
    }
  }

  public render() {
    return (
      <div className="App">
        <Header user={this.state.user} updateUser={this.getUser} />
        <Switch>
          <Route exact path="/"
            component={Home}
          />

          <Route path="/login"
            component={() => (
              <Login
                user={this.state.user}
                updateUser={this.getUser}
              />
            )}
          />

          <Route path="/signup"
            component={() => (
              <Signup
                user={this.state.user}
                updateUser={this.getUser}
              />
            )}
          />

          <Route path="/profile"
            component={() => (
              <Profile
                user={this.state.user}
                getLists={this.getAllLists}
                lists={this.state.usersLists}
              />
            )}
          />

          <Route path="/new"
            component={() => (
              <NewList
                user={this.state.user}
              />
            )}
          />

          <Route path="/join"
            component={() => (
              <JoinList
                user={this.state.user}
              />
            )}
          />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
