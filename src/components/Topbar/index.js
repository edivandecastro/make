import React from 'react';
import HeaderLeft from './HeaderLeft'

const TopBar = (props) => (
  <div className="topbar">
    <HeaderLeft modCode={props.modCode} />
  </div>
);

export default TopBar;
