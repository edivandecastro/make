import React from 'react';
import Sidebar from '../Sidebar'
import MainContent from '../MainContent'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './style.css';

const Home = (props) => (
  <section>
    <Sidebar />
    <MainContent content={props.content} />
  </section>
);

export default Home;
