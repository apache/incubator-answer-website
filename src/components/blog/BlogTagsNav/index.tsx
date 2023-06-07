import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

interface Props {
  data: any[];
  className?: string;
  activeLabel: string;
}
const Index = ({ data, className = '', activeLabel = '' }: Props) => {
  const { pathname } = useLocation();
  if (!data || data.length === 0) {
    return null;
  }

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
