import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { generateCategoryPath } from '@site/src/utils';
import styles from './index.module.css';



const Index = ({ data }) => {
  const { frontMatter, metadata } = data;

  if (!frontMatter) return null;
  return (
    <div className='col col--3 col-b mb-4'>
      <Link to={metadata.permalink} className={clsx('margin-bottom--md', styles.block)}>
        <img
          className={styles.rounded}
          src={require(`@site/static/img/blog/${frontMatter.image}`).default} alt="" />
      </Link>
      <div className="margin-bottom--sm">
        <Link
          to={generateCategoryPath(frontMatter.category)}>
            <Translate id={frontMatter.category}>
              {frontMatter.category}
            </Translate>
        </Link>
      </div>
      <h5 className={clsx('margin-bottom--sm text-truncate-2', styles.h5)}>
        <Link to={metadata.permalink} className={styles.black}>
          {metadata.title}
        </Link>
      </h5>

      <div className='text-secondary text-truncate-3 margin-bottom--md'>
        {metadata.description}
      </div>

      <div className={clsx('text-secondary fs-14', styles.authorWrap)}>
        {metadata.authors.map((author, index) => {
          return (
            <div className={clsx(index === metadata.authors.length - 1 ? 'margin-right--md' : 'margin-right--sm')} key={author.name}>{author.name}</div>
          )
        })}
        <time dateTime={metadata.date}>{metadata.formattedDate}</time>
      </div>
    </div>
  )
}

export default Index;
