import React, { memo } from 'react';
import { Col } from 'react-bootstrap';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import MDXImg from '@theme/MDXComponents/Img';
import { generateCategoryPath } from '@site/src/utils';
// @ts-ignore
import {useBlogPost} from '@docusaurus/theme-common/internal';

const BlogPostItemHeader = () => {
  const { frontMatter, metadata } = useBlogPost();

  // console.log('frontMatter', metadata);
   return (
    <>
      <Col lg={7} md={12}>
        <header>
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
                  reading_time: Math.round(metadata.readingTime),
                }}>
                  {'{reading_time} min read'}
                </Translate>
              </div>
          </div>
        </header>
      </Col>
      <Col lg={9} md={12} className='mt-5 mb-5'>
        <MDXImg
          src={require(`@site/static/img/blog/${frontMatter.image}`).default}
          className="rounded"
          width="1280px"
          height="720px"
           />
        {/* <img
          src={require(`@site/static/img/blog/${frontMatter.image}`).default}
          className="rounded"
          alt=""
          width="100%" /> */}
      </Col>
    </>
   )
}

export default memo(BlogPostItemHeader)
