import * as React from 'react';

import NavLink from './NavLink';

import { IAuth } from '../../Types';

const LoggedIn = (props: IAuth) => {
    return (
      <div className="dib ma0 pa0">
        <NavLink to="/profile" label="Profile" />
        <NavLink to="/new" label="New List" />
        <NavLink to="/join" label="Join List" />
        <div className="navLinks" onClick={props.updateUser}>Logout</div>
      </div>
    );
};

export default LoggedIn;
