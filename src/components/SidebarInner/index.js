import React from 'react';
import SidebarTop from '../SidebarTop';

const SidebarInner = () => (
  <div className="sidebar-inner mCustomScrollbar _mCS_3 mCS-autoHide">
    <SidebarTop />
    <ul className="nav nav-sidebar">
      <li><a href="dashboard.html"><i className="icon-home"></i><span>Dashboard</span></a></li>
      <li className="nav-parent">
        <a href="#"><i className="icon-puzzle"></i><span>Builder</span> <span className="fa arrow"></span></a>
        <ul className="children collapse">
          <li><a target="_blank" href="../../admin-builder/index.html"> Admin</a></li>
          <li><a href="page-builder/index.html"> Page</a></li>
          <li><a href="ecommerce-pricing-table.html"> Pricing Table</a></li>
        </ul>
      </li>
    </ul>
  </div>
);

export default SidebarInner;
