import axios from 'axios';
import * as React from 'react';

import { SERVER_URL } from '../constants/server';

export interface INewListProps {
  user: any;
}

export interface INewListState {
  name: string;
  listKey: string | null;
}

export default class NewList extends React.Component<INewListProps, INewListState> {
  public readonly state: INewListState = {
    listKey: null,
    name: '',
  };

  public handleNameChange = (e: any) => { this.setState({ name: e.target.value }); };

  public handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/lists/new`, {
        name: this.state.name,
        userId: this.props.user.id,
      });
      this.setState({
        listKey: response.data.listKey,
      });
    } catch (error) {
      // TODO: handle errors
      if (error.response) {
        console.log(error.response.data.message);
        this.setState({
          listKey: null,
        });
      }
    }
  }

  public render() {
    const keyDisplay =
      <div>
        <h2>{this.state.name}'s key:</h2>
        <h1>{this.state.listKey}</h1>
      </div>;
    const newListForm =
      <div>
        <h2>Create a new list</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="name"
              placeholder="Enter list name here"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <input type="submit" value="Create New List!" className="button" />
        </form>
      </div>;

    const display = this.state.listKey ? keyDisplay : newListForm;

    return (
      display
    );
  }
}
