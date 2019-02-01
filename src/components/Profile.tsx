import React, { Component } from 'react';
import List from './List';
import { Link } from 'react-router-dom';
import { number } from 'prop-types';

class Profile extends Component<any, any> {

  public render() {
    if(this.props.user) {
  // const listOfLists = _____.map((list: any) => (
      
        const listOfLists = this.props.lists.map((list: any) => (
        <p
          // name={list.name}
          key={list._id}
          // onUpdate={this.props.onUpdate}
          // to={`/list/${list._id}`}
        >{list.name}</p>
      ));

      return (
          <div>
            <h2>Hello again, {this.props.user.name}!</h2>
            <h4>Your email is {this.props.user.email}</h4>
              <div className="list">
                  <h3>Name of users List(s)</h3>
                  <button onClick={this.props.getLists}>Get Lists</button>
                    {listOfLists}
              </div>
          </div>
        );
    }

    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Profile;
