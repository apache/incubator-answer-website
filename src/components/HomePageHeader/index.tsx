import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './index.module.css'

const HomeHead:FC = () => {
  return (
    <header className={styles.headerBg}>
      <div className={clsx('container', styles.content)}>
        <img 
          src={require('@site/static/img/head-icon.png').default} 
          alt="head-icon" 
          width="168" 
          height="168" 
          className='margin-bottom--md'
        />

        <h1 className={clsx('margin-top--sm', styles.h1)}>Build Q&A community <br />with Answer</h1>
        <div className='margin-bottom--md padding-bottom--sm'>
          <button className="button button--lg button--primary margin-right--md fw-normal fs-20">
          Get Started
          </button>

          <button className={clsx('button button--lg button--secondary fw-normal fs-20', styles.white)}>
            Download
          </button>
        </div>

        <iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="168" height="36" title="GitHub"></iframe>

        <div className="text-secondary text--center margin-top--sm">Answer is still under very active development. Watch on GitHub to receive updates.</div>
      </div>
    </header>
  )
};


export default HomeHead;