import React from 'react';
import { Col } from 'react-bootstrap';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { generateCategoryPath } from '@site/src/utils';

const Index = ({ data }) => {
  const { frontMatter, metadata } = data;

  if (!frontMatter) return null;
  return (
    <Col sm={12} md={6} lg={3} className='mb-4'>
      <Link to={metadata.permalink} className="mb-3 d-block">
        <img
          className="rounded"
          src={require(`@site/static/img/blog/${frontMatter.image}`).default}
          alt="" />
      </Link>
      <Link
        className="mb-2 d-block"
        to={generateCategoryPath(frontMatter.category)}>
          <Translate id={frontMatter.category}>
            {frontMatter.category}
          </Translate>
      </Link>
      <h5 className="mb-2 text-truncate-2">
        <Link to={metadata.permalink} className="text-body">
          {metadata.title}
        </Link>
      </h5>

      <div className='text-secondary text-truncate-3 mb-3'>
        {metadata.description}
      </div>

      <div className="text-secondary fs-14 d-flex align-items-center">
        {metadata.authors.map((author, index) => {
          return (
            <div className={clsx(index === metadata.authors.length - 1 ? 'me-3' : 'me-2')} key={author.name}>{author.name}</div>
          )
        })}
        <time dateTime={metadata.date}>{metadata.formattedDate}</time>
      </div>
    </Col>
  )
}

export default Index;
