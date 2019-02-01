import axios from 'axios';
import * as React from 'react';
import { SERVER_URL } from '../constants/server';

// list is props.location.state

export interface IDetailedListProps {
  location: any;
}

export interface IDetailedListState {
  newItem: string;
}

export default class DetailedList extends React.Component<any, any> {
  public readonly state: IDetailedListState = {
    newItem: '',
  };

  public render() {
    const items = this.props.location.state.items.map((item: any) => (
      <li
        key={item._id}
        className={item.completed ? 'strike' : ''}
      >
        {item.content}
      </li>
    ));

    return (
    <div>
      <h3>{this.props.location.state.name}</h3>
      <ul>
        {items}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="content"
            placeholder="What else?"
            value={this.state.newItem}
            onChange={this.handleInputChange}
          />
        </div>
        <input type="submit" value="Add to List" className="button" />
      </form>
    </div>
    );
  }

  public handleInputChange = (e: any) => { this.setState({ newItem: e.target.value }); };

  public handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('serverToken');
    try {
      const response = await axios.post(`${SERVER_URL}/lists/addItem`, {
        content: this.state.newItem,
        headers: { Authorization: `Bearer ${token}`},
        listId: this.props.location.state._id,
        userId: this.props.user.id,
      });
      console.log(response);
    } catch (error) {
      // TODO: handle errors
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
    return this.setState({
      newItem: '',
    });
  }
}
