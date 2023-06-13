import React, { memo } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

const Index = () => {
  return (
    <div className={clsx('py-5',styles.header)}>
      <div className='container'>
        <h1>
          <Translate id="blogHeader.title">
            Blog
          </Translate>
        </h1>
        <div className='fs-20'>
          <Translate id="blogHeader.slogon">
            Learn everything about Answer and leverage your Q&A community to the next level.
          </Translate>
        </div>
      </div>
    </div>
  )
}

export default memo(Index);
