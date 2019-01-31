import React, { Component } from 'react';
import List from './components/List';

class Profile extends Component<any, any> {
  public render() {
    if(this.props.user) {
      const list = () => {
        return <List 
          // name={name} 
          // key={index} 
          />
      }

      return (
          <div>
            <h2>Hello again, {this.props.user.name}!</h2>
            <h4>Your email is {this.props.user.email}</h4>
              <div className="list">
                  <h3>Name of users List(s)</h3>
                    {list}
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
