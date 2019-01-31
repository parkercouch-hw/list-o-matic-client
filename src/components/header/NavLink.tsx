import * as React from 'react';

import { Link } from 'react-router-dom';

interface INavLinkProps {
  to: string;
  label: string;
}

const NavLink = (props: INavLinkProps) => (
  <Link
    className="link grow dim black b f5 f4-l dib mr3 mr4-l"
    to={props.to}
    title={props.label}
  >
    {props.label}
  </Link>
);

export default NavLink;
