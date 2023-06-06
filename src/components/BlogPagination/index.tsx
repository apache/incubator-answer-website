import React, { memo } from 'react';
import clsx  from 'clsx';
import styles from './index.module.css';

import Link from '@docusaurus/Link';


const Index = ({ data }) => {
  return (
    <div className={styles.wrap}>
      <Link
        to={data?.previousPage || '###'}
        className={clsx(styles.link, styles.linkLeft, data?.previousPage ? styles.active : styles.disabled,)}>
          Previous
      </Link>
      <Link
        to={data?.nextPage || '###'}
        className={clsx(styles.link, styles.linkRight, data?.nextPage ? styles.active : styles.disabled)}>
          Next
      </Link>
    </div>
  )
}

export default memo(Index);
