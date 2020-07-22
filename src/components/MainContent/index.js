import React, { Component } from "react";
import Routes from '../../config/routes';
import Sidebar from '../Sidebar'

const MainContent = (WrappedComponent) => {
  return class extends Component {
    render() {
      return <section>
        <Sidebar />
        <div className="main-content">
          <WrappedComponent {...this.props} />
        </div>
      </section>
    }
  }
}

export default MainContent;
