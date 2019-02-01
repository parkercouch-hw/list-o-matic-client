import React, { Component } from 'react';

class Profile extends Component<any, any> {

  public render() {
    if (this.props.user) {
      const listOfLists = this.props.lists.map((list: any) => (
        <p
          key={list._id}
          className="grow pointer"
        >{list.name}</p>
      ));

      return (
        <div>
          <h2>Hello, {this.props.user.name}!</h2>
          <div className="list">
            <h3>Your list(s):</h3>
            <button onClick={this.props.getLists}>Get Lists</button>
            {listOfLists}
          </div>
        </div>
      );
    }
    return(
      <div>
        <p>You aren't logged in!</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
    );
  }
}

export default Profile;
