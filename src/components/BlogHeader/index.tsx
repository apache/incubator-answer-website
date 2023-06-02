import React, { memo } from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const Index = () => {
  return (
    <div className={clsx('padding-vert--xl', styles.header)}>
      <div className='container'>
        <h1 className={clsx('margin-bottom--sm', styles.h1)}>Blog</h1>
        <div className='fs-20'>Learn everything about Answer and leverage your Q&A community to the next level.</div>
      </div>
    </div>
  )
}

export default memo(Index);
