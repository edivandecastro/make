import React from 'react';
import './style.css';
import Topnav from './Topnav';

const HeaderLeft = (props) => (
  <div className="header-left">
    <Topnav modCode={props.modCode} />
  </div>
);

export default HeaderLeft;
