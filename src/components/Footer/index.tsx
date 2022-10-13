import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './index.module.css';

const DarkSvg = require('@site/static/img/logo-dark.svg').default;

const Footer:FC = () => {
  return (
    <footer className="footer">
      <div className='container padding-vert--md'>
        <div className='row text--secondary justify-center'>
          <div className='col col--7'>
            <div style={{  height: '28px', marginBottom: '1rem' }}>
              <DarkSvg role="img" />
            </div>
            {/* <img src={require('@site/static/img/logo-dark.svg').default} alt="" height="28" /> */}
            <div className='fs-14'>
              <div>
                <span>
                Designed and built with all the love in the world by the
                </span>
                {' '}
                <a href="https://github.com/orgs/answerdev/people" target="_blank">Answer team</a>
                <span> with the help of </span>
                <a href="https://github.com/answerdev/answer/graphs/contributors" target="_blank">our contributors</a>
                .
              </div>

              <span>Code licensed under the </span>
              <a
                href="https://www.apache.org/licenses/LICENSE-2.0"
                target="_blank"
              >
                Apache-2.0 License
              </a>
              .
              <span> Icons by <a href="https://www.flaticon.com/free-icons/sports-and-competition" target="_blank">Freepik</a>.</span>
            </div>
          </div>
          <div className={clsx('col col--3', styles.right)}>
            <a href="/" className='text--secondary margin-right--md'>Twitter</a>
            <a href="https://github.com/answerdev/answer" target="_blank" className='text--secondary'>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
};


export default Footer;
