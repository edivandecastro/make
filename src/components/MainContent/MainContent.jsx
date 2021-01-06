import React, { Component } from "react";
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
