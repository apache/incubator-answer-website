import React, { memo } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
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
    <ul className={clsx('nav nav-pills', className)}>
      <li className='nav-item mb-4'>
        <Link
          to={pathname === '/blog' ? '###': '/blog'}
          className={clsx('nav-link',activeLabel === 'All' ? 'active' : '')}>
            <Translate id="blogCategoriesNav.all">
              All
            </Translate>
        </Link>
      </li>
      {data.map((tag) => {
        return (
          <li className='nav-item mb-4' key={tag.label}>
            <Link
              to={tag.permalink}
              className={clsx('nav-link',activeLabel === tag.label  ? 'active' : '')}>
              <Translate id={tag.label}>
                {tag.label}
              </Translate>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default memo(Index);
