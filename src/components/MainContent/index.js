import React from 'react';
import TopBar from '../Topbar'
import './style.css'
import PageContent from '../PageContent';

const MainContent = () => (
  <div className="main-content">
    <TopBar />
    <PageContent />
  </div>
);

export default MainContent;
