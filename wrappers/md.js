import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title}`}>
        <div className="page-content">
          <div className="wrapper">
            <article className="post">
              <header className="post-header">
                <h1 className="post-title">{post.title}</h1>
                { post.date &&
                  <p className="post-meta">
                    <time dateTime={post.date} itemProp="datePublished">
                      {moment(post.date).format('MMMM D, YYYY')}
                    </time>
                  </p>
                }
              </header>
              <div className="post-content" itemProp="articleBody">
                <div dangerouslySetInnerHTML={{__html:post.body}}/>
              </div>
            </article>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
