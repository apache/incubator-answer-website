import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './index.module.css';

const DarkSvg = require('@site/static/img/logo-dark.svg').default;

const Footer:FC = () => {
  return (
    <footer className="footer">
      <div className='container padding-vert--md'>
        <div className='row text--secondary justify-center'>
          <div className={clsx('col col--10', styles.main)}>
            <div>
              <div style={{  height: '28px', marginBottom: '1rem' }}>
                <DarkSvg role="img" />
              </div>
              {/* <img src={require('@site/static/img/logo-dark.svg').default} alt="" height="28" /> */}
              <div className='fs-14'>
                <div>
                  <span>
                    Made with love in the world by the
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
                <span> Icons by <a href="https://www.flaticon.com" target="_blank">Freepik</a>.</span>
              </div>
            </div>


            <div className={styles.right}>
            <a href="/docs" className='text--secondary margin-right--md'>Docs</a>
              {/* <a href="/" className='text--secondary margin-right--md'>Twitter</a> */}
              <a href="https://github.com/answerdev/answer" target="_blank" className='text--secondary'>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};


export default Footer;
