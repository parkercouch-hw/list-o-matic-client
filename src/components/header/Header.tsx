import * as React from 'react';

import { IAuth } from '../../Types';

import Nav from './Nav';

const Header = (props: IAuth) => {
  const logo = <div className="h1 w1 dib ma0 pa0">X</div>;

  return (
    <header>
      <div className="h1 w1 dib ma0 pa0"></div>      
      <Nav user={props.user} updateUser={props.updateUser} />
    </header>
  );
};

export default Header;
