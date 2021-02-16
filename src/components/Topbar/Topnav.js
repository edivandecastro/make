import React from 'react';
import './style.css';
import MenuTogle from './Menutogle';
import NavHorizontal from './NavHorizontal';

const Topnav = (props) => (
  <div className="topnav">
    <MenuTogle />
    <NavHorizontal modCode={props.modCode} />
  </div>
);

export default Topnav;
