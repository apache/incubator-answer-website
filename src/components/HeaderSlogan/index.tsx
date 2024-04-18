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
    slogan: <Translate id="blogHeader.slogan">Learn everything about Answer and leverage your Q&A community to the next level.</Translate>,
  },
  contact: {
    title: <Translate id="contact.title">Contact us</Translate>,
    slogan: <Translate id="contact.slogan">We always get an answer to your question.</Translate>,
  },
  plugin: {
    title: <Translate id="plugin.title">Plugins</Translate>,
    slogan: <Translate id="plugin.slogan">Extend capabilities and unlock new possibilities with our community-made plugins.</Translate>,
  },
  download: {
    title: <Translate id="download.title">Download</Translate>,
    slogan: <Translate id="download.slogan">This page provides download links for the latest release of Apache Answer.</Translate>,
  },
}

const Index = ({ type }: IProps) => {
  return (
    <div className={clsx('py-5',styles.header)}>
      <div className='container'>
        <h1>
          {content[type].title}
        </h1>
        <div className='fs-20'>
          {content[type].slogan}
        </div>
      </div>
    </div>
  )
}

export default memo(Index);
