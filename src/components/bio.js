import React from "react"

function Bio() {

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
          <a href={url} title={description} target="_blank" rel="noopener noreferrer">{name}</a> - {description}
        </li>
      );
    });

  return (

    <div className="home">
      <div className="about">
        Experienced SaaS Engineer. Currently seeking Software Engineering and Salesforce consulting work in the Bay Area.
      </div>
      <h1 className="page-heading">Work</h1>
      <ul>
        {projectLinks}
      </ul>
    </div>
  )
}

export default Bio
