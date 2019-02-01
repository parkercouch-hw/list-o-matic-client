import axios from 'axios';
import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { SERVER_URL } from '../constants/server';
import { IList } from '../Types';

export interface IJoinListProps {
  user: any;
}

export interface IJoinListState {
  list: IList | null;
  listKey: string;
}

export default class JoinList extends React.Component<IJoinListProps, IJoinListState> {
  public readonly state: IJoinListState = {
    list: null,
    listKey: '',
  };

  public handleKeyChange = (e: any) => { this.setState({ listKey: e.target.value }); };

  public handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('serverToken');
    // TODO: handle no token redirect
    if (!token) { console.log('No Token'); }
    try {
      const response = await axios.post(`${SERVER_URL}/lists/join`, {
        headers: { Authorization: `Bearer ${token}`},
        key: this.state.listKey,
        userId: this.props.user.id,
      });
      this.setState({
        list: response.data.list,
      });
    } catch (error) {
      // TODO: handle errors
      if (error.response) {
        console.log(error.response.data.message);
        this.setState({
          listKey: '',
        });
      }
    }
  }

  public render() {
    if (!this.props.user) {
      return (<Redirect to="/login" />);
    }

    const display = this.state.list
      ?
        <div>
          {/* // @ts-ignore - only renders after null check. All good! */}
          <h2>You joined: {this.state.list.name}</h2>
        </div>
      :
        <div>
          <h2>Join a Shared List</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="listKey"
                placeholder="Enter Key Here"
                value={this.state.listKey}
                onChange={this.handleKeyChange}
              />
            </div>
            <input type="submit" value="Join a List!" className="button" />
          </form>
        </div>;

    return (
      display
    );
  }
}
