import React from 'react';
import type { Content } from "@theme/BlogPostPage";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

interface Props {
  data: Content;
}

const Index = ({ data } : Props) => {
  const { frontMatter, metadata } = data;

  if (!frontMatter) return null;
  return (
    <div className='col col--3 col-b mb-4'>
      <Link to={metadata.permalink} className={clsx('margin-bottom--md', styles.block)}>
        <img  src={require(`@site/static/img/blog/${frontMatter.image}`).default} alt="" />
      </Link>
      <div className={styles.tagWrap}>
        {metadata.tags.map((tag, tagIndex) => {
          return (
            <Link
              className={clsx('margin-bottom--sm', tagIndex === metadata.tags.length ? '' : 'margin-right--md', styles.block)}
              to={tag.permalink}
              key={tag.label}>
                {tag.label}
            </Link>
          )
        })}
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
        <div>{metadata.formattedDate}</div>
      </div>
    </div>
  )
}

export default Index;
