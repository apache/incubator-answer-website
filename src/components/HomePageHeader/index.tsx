import React, { FC, useEffect } from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const HomeHead: FC = () => {
  const [stars, setStars] = React.useState(0);
  useEffect(() => {
    fetch('https://api.github.com/repos/answerdev/answer')
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count) {
          setStars(data.stargazers_count);
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
        <div className={clsx('col col--8', styles.flexCenter)}>
          <img
            src={require('@site/static/img/head-icon.png').default}
            alt="head-icon"
            width="168"
            height="168"
            className="margin-bottom--md"
          />

          <h1 className={clsx('margin-top--sm sm-h1', styles.h1)}>
            Build Q&A Community <br />
            with Answer
          </h1>

          <div
            className={clsx('text-secondary text--center mb-4', styles.intro)}
          >
            An open-source knowledge-based community software. You can use it
            quickly to build Q&A community for your products, customers, teams,
            and more.
          </div>

          <div className="d-flex margin-bottom--md padding-bottom--sm">
            <a
              className="button button--lg button--primary fw-normal fs-20 btnMain margin-right--md"
              href="https://github.com/answerdev/answer"
            >
              Get Started
            </a>

            <a
              className={clsx(
                'd-flex align-center button button--lg button--dark fw-normal fs-20',
                styles.white,
              )}
              href="https://github.com/answerdev/answer/releases"
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
              {numWord(stars)}
            </a>
          </div>

          <div className="text-secondary text--center margin-top--md">
            Answer is still under very active development. Watch on GitHub to
            receive updates.
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHead;
