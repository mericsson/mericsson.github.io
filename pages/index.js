import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import access from 'safe-access';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

class Index extends React.Component {

  render() {
    const pages = this.props.route.pages.slice();
    const sortedPages = pages
      .sort(page => access(page, 'data.date'))
      .reverse();
    const pageLinks = sortedPages
      .filter(page => (
        page.file.ext === 'md'
        && page.path !== '/404/'
        && page.path !== '/about/'
      ))
      .map(page => {
        const title = access(page, 'data.title') || page.path;
        return (
          <li key={page.path} className="posts-item">
            <span className="post-meta">
              {moment(page.data.date).format('MMMM DD, YYYY')}
            </span>
            <h2>
              <span className="post-link">
                <Link
                  to={prefixLink(page.path)}>
                  {title}
                </Link>
              </span>
            </h2>
          </li>
        );
      });

    return (
      <DocumentTitle title={`${config.blogTitle}`}>
        <div className="page-content">
          <div className="wrapper">
            <div className="home">
              <h1 className="page-heading">Posts</h1>
              <ul className="post-list">
                {pageLinks}
              </ul>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
};

export default Index;
