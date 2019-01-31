import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IAuth } from '../../Types';

import LoggedIn from './LoggedIn';
import NavLink from './NavLink';
import NotLoggedIn from './NotLoggedIn';

// user updateUser

class Nav extends Component<IAuth, any> {
  public render() {
    const links = this.props.user
      ?
        <LoggedIn user={this.props.user} updateUser={this.handleLogout} />
      :
        <NotLoggedIn />;

    return(
      <nav className="nav">
      <span className="logoType">List-O-Matic</span>
        <NavLink to="/" label="Home" />
        {links}
      </nav>
    );
  }

  private handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem('serverToken');
    this.props.updateUser();
  }
}

export default Nav;
