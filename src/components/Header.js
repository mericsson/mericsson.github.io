import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header className="site-header">
        <div className="wrapper">
          <Link to={'/'}>
            <span className="site-title">Marcus Ericsson</span>
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Header;
