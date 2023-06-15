import React, { FC, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Row, Col } from 'react-bootstrap';
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
    <header className='pt-4 pb-3'>
      <div className="container d-flex flex-column align-items-center">
        <Link
          to="/waitlist"
          className="d-flex align-items-center text-secondary text--center pb-5 mb-3"
        >
          <Translate>👋 Join the Answer Cloud Waitlist</Translate>
          <img
            className="ms-1"
            src={require('@site/static/img/arrow-right.png').default}
            alt="waitlist"
            width="14px"
          />
        </Link>
        <Row className='justify-content-center'>
          <Col md={12} lg={8} className='d-flex flex-column align-items-center'>
            <img
              src={require('@site/static/img/head-icon.png').default}
              alt="head-icon"
              width="168"
              height="168"
              className="mb-4"
            />

            <h1 className={clsx('sm-h1 ff-headline', styles.h1)}>
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

            <div className="d-flex">
              <a
                className="button button--lg button--primary fw-normal fs-20 btnMain me-3"
                href="/docs"
              >
                <Translate>Get Started</Translate>
              </a>

              <a
                className="d-flex align-items-center button button--lg button--dark fw-normal fs-20 text-white"
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
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default HomeHead;
