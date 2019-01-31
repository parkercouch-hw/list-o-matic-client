import * as React from 'react';

import NavLink from './NavLink';

import { IAuth } from '../../Types';

const LoggedIn = (props: IAuth) => {
    return (
      <div className="dib ma0 pa0">
        <div className="navLinks" onClick={props.updateUser}>Logout</div>
        <NavLink to="/profile" label="Profile" />
      </div>
    );
};

export default LoggedIn;
