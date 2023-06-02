import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

interface Props {
  data: any[];
}
const Index = ({ data }: Props) => {
  if (!data || data.length === 0) {
    return null;
  }
  const pathname = window.location.pathname;
  return (
    <div>
      {pathname === '/blog' && (
        <a
          href="/blog"
          className={clsx('button button--primary', styles.button)}>
          All
        </a>
      )}
      {data.map((tag) => {
        return (
          <a
            key={tag.label}
            href={tag.permalink}
            className={clsx('button button--primary',pathname === tag.permalink  ? '' : 'button--link', styles.button)}>
            {tag.label}
          </a>
        )
      })}
    </div>
  )
}

export default memo(Index);
