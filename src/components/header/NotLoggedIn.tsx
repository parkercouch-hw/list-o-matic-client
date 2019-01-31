import * as React from 'react';

import NavLink from './NavLink';

const NotLoggedIn = () => {
    return (
      <div className="dib ma0 pa0">
        <NavLink to="/login" label="Log In" />
        <NavLink to="/signup" label="Sign Up" />
      </div>
    );
};

export default NotLoggedIn;
