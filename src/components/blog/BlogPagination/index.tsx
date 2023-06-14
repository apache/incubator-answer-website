import React, { memo } from 'react';
import clsx  from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';


const Index = ({ data }) => {
  return (
    <nav className='d-flex align-items-center justify-content-center py-5'>
      <ul className="pagination">
        <li className={clsx('page-item', data?.previousPage ? '' : 'disabled')}>
          <Link
            to={data?.previousPage || '###'}
            className="page-link">
              <Translate id="theme.docs.paginator.previous">
                Previous
              </Translate>
          </Link>
        </li>
        <li className={clsx('page-item', data?.nextPage ? '' : 'disabled')}>
          <Link
            to={data?.nextPage || '###'}
            className="page-link">
              <Translate id="theme.docs.paginator.next">
                Next
              </Translate>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default memo(Index);
