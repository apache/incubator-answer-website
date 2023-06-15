import React, { memo } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { generateCategoryPath } from '@site/src/utils';
// @ts-ignore
import {useBlogPost} from '@docusaurus/theme-common/internal';

const BlogPostItemHeader = () => {
  const { frontMatter, metadata } = useBlogPost();

  // console.log('frontMatter', metadata);
   return (
    <>
      <header className='col col--7'>
        <div className="d-flex align-items-center mb-3">
          <Link to='/blog' className="me-2">
            <Translate id="blogHeader.title">
              Blog
            </Translate>
          </Link>
          <span className="me-2">/</span>
          <Link
            to={generateCategoryPath(frontMatter.category)} className="me-2">
              <Translate id={frontMatter.category}>
                {frontMatter.category}
              </Translate>
          </Link>
        </div>
        <h1>
          <Link to={metadata.permalink} className="text-body">
            {metadata.title}
          </Link>
        </h1>

        <div className="d-flex align-items-center text-secondary">
          {metadata.authors.map((author) => {
            return (
              <div className='me-3' key={author.name}>
                {author.name}
              </div>
            )
          })}
            <time className='me-3' dateTime={metadata.date}>
              {metadata.formattedDate}
            </time>
            <div>
              <Translate id="blogPostItem.readingTime" values={{
                reading_time: metadata.readingTime
              }}>
                {'{reading_time} min read'}
              </Translate>
            </div>
        </div>
      </header>
      <div className='col col--9 mt-5 mb-5'>
        <img
          src={require(`@site/static/img/blog/${frontMatter.image}`).default}
          className="rounded"
          alt=""
          width="100%" />
      </div>
    </>
   )
}

export default memo(BlogPostItemHeader)
