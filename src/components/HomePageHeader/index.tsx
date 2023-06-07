import React, { FC, useEffect } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

const HomeHead: FC = () => {
  const [stars, setStars] = React.useState(0);
  useEffect(() => {
    fetch('https://img.shields.io/github/stars/answerdev/answer')
      .then((response) => response.text())
      .then((data) => {
        const num = data.match(/<text .*>(.*?)<\/text>/)[1];
        if (num) {
          setStars(num);
        }
      });
  }, []);

  function numWord($num) {
    if ($num >= 1000 && $num < 1000000) {
      $num = Math.round($num / 100) / 10 + 'k';
    } else {
      if ($num >= 1000000) {
        $num = Math.round($num / 100000) / 10 + 'm';
      }
    }
    return $num;
  }
  return (
    <header>
      <div className={clsx('container', styles.content, styles.flexCenter)}>
        <Link
          to="/waitlist"
          className="d-flex align-center text-secondary text--center mb-5"
        >
          <Translate>👋 Join the Answer Cloud Waitlist</Translate>
          <img
            className="margin-left--xs"
            src={require('@site/static/img/arrow-right.png').default}
            alt="waitlist"
            width="14px"
          />
        </Link>
        <div className={clsx('col col--8 mt-3', styles.flexCenter)}>
          <img
            src={require('@site/static/img/head-icon.png').default}
            alt="head-icon"
            width="168"
            height="168"
            className="margin-bottom--md"
          />

          <h1 className={clsx('margin-top--sm sm-h1 ff-headline', styles.h1)}>
            <Translate>Build Q&A Community</Translate>
            <br />
            <Translate>with Answer</Translate>
          </h1>

          <div
            className={clsx('text-secondary text--center mb-4', styles.intro)}
          >
            <Translate>
              An open-source knowledge-based community software. You can use it
              quickly to build Q&A community for your products, customers,
              teams, and more.
            </Translate>
          </div>

          <div className="d-flex margin-bottom--md padding-bottom--sm">
            <a
              className="button button--lg button--primary fw-normal fs-20 btnMain margin-right--md"
              href="/docs"
            >
              <Translate>Get Started</Translate>
            </a>

            <a
              className={clsx(
                'd-flex align-center button button--lg button--dark fw-normal fs-20',
                styles.white,
              )}
              href="https://github.com/answerdev/answer"
              target="_blank"
            >
              <img
                src={require('@site/static/img/github.png').default}
                className="margin-right--sm"
                width="24px"
                height="24px"
                alt="github"
              />
              {` Star `}
              {stars !== 0 ? numWord(stars) : ''}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHead;
