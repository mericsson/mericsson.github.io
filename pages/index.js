import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import access from 'safe-access';
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
                  to={page.path}>
                  {title}
                </Link>
              </span>
            </h2>
          </li>
        );
      });

    const projects = [{
      url: 'https://mixmax.com',
      name: 'Mixmax',
      description: 'Tech lead for Integrations team.'
    }, {
      url: 'https://salesforce.com',
      name: 'Salesforce',
      description: 'Lead engineer on Community Cloud, Chatter.'
    }, {
      url: 'https://zenbox.co',
      name: 'Zenbox',
      description: 'Email tool for helping you get to zero inbox.'
    }, {
      url: 'https://schuquette.com',
      name: 'Schuquette',
      description: 'Professional recipe management.'
    }, {
      url: 'https://www.amazon.com/dp/B0727V7DZW/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1494348421&sr=1-1',
      name: 'Tweet Bot',
      description: 'Alexa skill for composing tweets.'
    }, {
      url: 'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N30000004cSsOEAU',
      name: 'Chatter Delete Blocker',
      description: 'Manage who can delete Salesforce Chatter data.'
    }, {
      url: 'https://github.com/mixmaxhq/search-string',
      name: 'Search String',
      description: 'Open source JS package for parsing search strings.'
    }];
    const projectLinks = projects
      .map(project => {
        const { url, name, description } = project;
        return (
          <li key={name}>
            <a href={url} title={description} target="_blank">{name}</a> - {description}
          </li>
        );
      });

    return (
      <DocumentTitle title={`${config.blogTitle}`}>
        <div className="page-content">
          <div className="wrapper">

            <div className="home">
              <div className="about">
                Experienced SaaS Engineer. Currently seeking Software Engineering and Salesforce consulting work in the Bay Area.
            </div>

              <h1 className="page-heading">Work</h1>
              <ul>
                {projectLinks}
              </ul>
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
