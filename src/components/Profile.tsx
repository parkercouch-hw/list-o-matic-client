import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component<any, any> {

  public render() {
    if (this.props.user) {
      const listOfLists = this.props.lists.map((list: any) => {
        const location = {
          pathname: '/details',
          state: list,
        };
        return <Link
          to={location}
          key={list._id}
          className="profileListItems"
        >{list.name}</Link>;
      });

      return (
        <div>
          <h2>{this.props.user.name}&rsquo;s lists:</h2>
          <div className="list">
            <button onClick={this.props.getLists}>Get My Lists!</button><br/><br/>
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
