import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

interface Props {
  data: any[];
  className?: string;
  activeLabel: string;
}
const Index = ({ data, className = '', activeLabel = '' }: Props) => {
  if (!data || data.length === 0) {
    return null;
  }
  const pathname = window.location.pathname;
  return (
    <div className={className}>
      <Link
        to={pathname === '/blog' ? '###': '/blog'}
        className={clsx('button button--primary',activeLabel === 'All' ? '' : 'button--link', styles.button)}>
        All
      </Link>
      {data.map((tag) => {
        return (
          <Link
            key={tag.label}
            to={tag.permalink}
            className={clsx('button button--primary',activeLabel === tag.label  ? '' : 'button--link', styles.button)}>
            {tag.label}
          </Link>
        )
      })}
    </div>
  )
}

export default memo(Index);
