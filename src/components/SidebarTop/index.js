import React from 'react';
import UserImage from './images/friend8.jpg';
import './style.css';

const SidebarTop = () => (
  <div className="sidebar-top big-img">
    <div className="user-image">
      <img src={UserImage} className="img-responsive img-circle" alt="friend 8" />
    </div>
    <h4>Bryan Raynolds</h4>
  </div>
);

export default SidebarTop;
