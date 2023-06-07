import React, { memo } from 'react';
import clsx  from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';


const Index = ({ data }) => {
  return (
    <div className={styles.wrap}>
      <Link
        to={data?.previousPage || '###'}
        className={clsx(styles.link, styles.linkLeft, data?.previousPage ? styles.active : styles.disabled,)}>
          <Translate id="theme.docs.paginator.previous">
            Previous
          </Translate>
      </Link>
      <Link
        to={data?.nextPage || '###'}
        className={clsx(styles.link, styles.linkRight, data?.nextPage ? styles.active : styles.disabled)}>
          <Translate id="theme.docs.paginator.next">
            Next
          </Translate>
      </Link>
    </div>
  )
}

export default memo(Index);
