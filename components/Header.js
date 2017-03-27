import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {
    return (
      <header className="site-header">
        <div className="wrapper">
          <Link to={'/'}>
            <span className="site-title">mericsson</span>
          </Link>
          <nav className="site-nav">
            <Link to={'/about/'}>
              <span className="page-link">about</span>
            </Link>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired
};

export default Header;
