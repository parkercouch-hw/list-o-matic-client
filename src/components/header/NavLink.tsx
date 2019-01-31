import * as React from 'react';

import { Link } from 'react-router-dom';

interface INavLinkProps {
  to: string;
  label: string;
}

const NavLink = (props: INavLinkProps) => (
  <Link
    className="navLinks"
    to={props.to}
    title={props.label}
  >
    {props.label}
  </Link>
);

export default NavLink;
