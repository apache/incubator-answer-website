import React, { memo } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

interface IProps {
  type: 'blog' | 'contact',
}

const content = {
  blog: {
    title: <Translate id="blogHeader.title">Blog</Translate>,
    slogon: <Translate id="blogHeader.slogon">Learn everything about Answer and leverage your Q&A community to the next level.</Translate>,
  },
  contact: {
    title: <Translate id="contact.title">Contact us</Translate>,
    slogon: <Translate id="contact.slogon">We always get an answer to your question.</Translate>,
  }
}

const Index = ({ type }: IProps) => {
  return (
    <div className={clsx('py-5',styles.header)}>
      <div className='container'>
        <h1>
          {content[type].title}
        </h1>
        <div className='fs-20'>
          {content[type].slogon}
        </div>
      </div>
    </div>
  )
}

export default memo(Index);
