import React, { memo } from 'react';
import clsx  from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';


const Index = ({ data }) => {
  if (!data?.previousPage && !data?.nextPage) return null;

  return (
    <nav className='d-flex align-items-center justify-content-center mt-5'>
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
