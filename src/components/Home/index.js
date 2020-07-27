import React, { useEffect } from 'react';
import Sidebar from '../Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './style.css';
import TopBar from '../Topbar'

const Home = () => {
  useEffect(() => {
    document.body.className = "";
    document.body.className = "sidebar-condensed fixed-topbar fixed-sidebar theme-sdtl color-default"
  });

  return <div>
    <TopBar modCode="M01" />
    <div className="page-content">
      AQUI
    </div>
  </div>
};

export default Home;
