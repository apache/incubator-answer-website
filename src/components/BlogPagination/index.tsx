import React, { memo } from 'react';
import clsx  from 'clsx';
import styles from './index.module.css';


const Index = ({ data }) => {
  return (
    <div className={styles.wrap}>
      <a
        href={data?.previousPage || '###'}
        className={clsx(styles.link, styles.linkLeft, data?.previousPage ? styles.active : styles.disabled,)}>
          Previous
      </a>
      <a
        href={data?.nextPage || '###'}
        className={clsx(styles.link, styles.linkRight, data?.nextPage ? styles.active : styles.disabled)}>
          Next
      </a>
    </div>
  )
}

export default memo(Index);
