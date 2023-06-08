import React, { memo } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

import styles from './index.module.css';

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
          <Translate id="blogCategoriesNav.all">
            All
          </Translate>
      </Link>
      {data.map((tag) => {
        return (
          <Link
            key={tag.label}
            to={tag.permalink}
            className={clsx('button button--primary',activeLabel === tag.label  ? '' : 'button--link', styles.button)}>
            <Translate id={tag.label}>
              {tag.label}
            </Translate>
          </Link>
        )
      })}
    </div>
  )
}

export default memo(Index);
