import React from 'react';
import './style.css';
import Octicon, {Person, MailRead, Flame, Rocket} from '@primer/octicons-react'

const NavIcons = () => (
  <ul className="nav nav-icons">
    <li>
      <a href="#">
        <span><Octicon icon={Person}/></span>
      </a>
    </li>
    <li>
      <a href="#">
        <span><Octicon icon={MailRead}/></span>
      </a>
    </li>
    <li>
      <a href="#">
        <span><Octicon icon={Flame}/></span>
      </a>
    </li>
    <li>
      <a href="#">
        <span><Octicon icon={Rocket}/></span>
      </a>
    </li>
  </ul>
);

export default NavIcons;
