import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './index.module.css'

const HomeHead:FC = () => {
  return (
    <header>
      <div className={clsx('container', styles.content, styles.flexCenter)}>
        <div className={clsx('col col--8', styles.flexCenter)}>
          <img
            src={require('@site/static/img/head-icon.png').default}
            alt="head-icon"
            width="168"
            height="168"
            className='margin-bottom--md'
          />

          <h1 className={clsx('margin-top--sm sm-h1', styles.h1)}>Build Q&A Community <br />with Answer</h1>

          <div className={clsx('text-secondary text--center mb-4', styles.intro)}>An open-source knowledge based community software. You can use it to quickly build your Q&A community for product technical support, customer support, user communication, and more.</div>

          <div className='margin-bottom--md padding-bottom--sm'>
            <a
              className="button button--lg button--primary fw-normal fs-20 btnMain"
              href="https://github.com/answerdev/answer"
            >
              Get Started
            </a>

            {/* <a
              className={clsx('button button--lg button--secondary fw-normal fs-20', styles.white)}
              href="https://github.com/answerdev/answer/releases"
              target='_blank'
            >
              Download
            </a> */}
          </div>

          {/* <iframe src="https://ghbtns.com/github-btn.html?user=answerdev&repo=answer&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="140" height="30" title="GitHub"></iframe> */}


          <div className="text-secondary text--center">Answer is still under very active development. Watch on GitHub to receive updates.</div>
        </div>
      </div>
    </header>
  )
};


export default HomeHead;
