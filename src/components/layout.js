import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <Header type="main" title="Marcus Ericsson" path={location.pathname} />
        <div className="page-content">
          <div className="page-content">
            <div className="wrapper">{children}</div>
          </div>
        </div>
        <Footer />
        <link
          href="https://fonts.googleapis.com/css?family=Athiti|Source+Code+Pro"
          rel="stylesheet"
        />
      </div>
    );
  }
}

export default Layout;
