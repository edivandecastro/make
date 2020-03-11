import React from 'react';
import Sidebar from '../Sidebar'
import MainContent from '../MainContent'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './style.css';

const Home = () => (
  <section>
    <Sidebar />
    <MainContent />
  </section>
);

export default Home;
