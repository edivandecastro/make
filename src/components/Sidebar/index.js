import React from 'react';
import LogoPanel from '../LogoPanel';
import SidebarInner from '../SidebarInner';
import './style.css';

const Sidebar = () => (
  <div className="sidebar">
    <LogoPanel />
    <SidebarInner />
  </div>
);

export default Sidebar;
