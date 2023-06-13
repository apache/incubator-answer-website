import React, { FC } from 'react';

const DarkSvg = require('@site/static/img/logo-dark.svg').default;

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container py-3">
        <div className="row text-secondary justify-content-center">
          <div className="d-flex justify-content-between flex-wrap col col--10">
            <div>
              <div className='mb-3' style={{ height: '28px' }}>
                <DarkSvg role="img" />
              </div>
              {/* <img src={require('@site/static/img/logo-dark.svg').default} alt="" height="28" /> */}
              <div className="fs-14">
                <div>
                  <span>Made with love in the world by the</span>{' '}
                  <a
                    href="https://github.com/orgs/answerdev/people"
                    target="_blank"
                  >
                    Answer team
                  </a>
                  <span> with the help of </span>
                  <a
                    href="https://github.com/answerdev/answer/graphs/contributors"
                    target="_blank"
                  >
                    our contributors
                  </a>
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
                <span>
                  {' '}
                  Icons by{' '}
                  <a href="https://www.flaticon.com" target="_blank">
                    Freepik
                  </a>
                  .
                </span>
              </div>
            </div>

            <div className="fs-14 text-end mt-3 mt-md-0">
              <a
                href="https://twitter.com/answerdev"
                target="_blank"
                className="text--secondary margin-right--md"
              >
                Twitter
              </a>
              <a
                href="https://github.com/answerdev/answer"
                target="_blank"
                className="text--secondary margin-right--md"
              >
                GitHub
              </a>

              <a
                href="https://discord.gg/a6PZZbfnFx"
                target="_blank"
                className="text--secondary"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
