import React from 'react';
import { config } from 'config';

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/styles.css';

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <Header type="main" title={config.authorName} path={location.pathname} />
        <div className="page-content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Template;
