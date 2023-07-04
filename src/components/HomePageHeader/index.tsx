import React, { FC, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Row, Col, Button } from 'react-bootstrap';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Icon from '@site/src/components/Icon';

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
      <div className="container">
        <Link
          to="/waitlist"
          className="d-flex align-items-center justify-content-center text-secondary pb-5 mb-3"
        >
          <Translate id="home.waitlist.title">
            👋 Join the Answer Cloud Waitlist
          </Translate>

          <Icon name="arrow-right"  size="16px"  className="ms-1" />
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

            <h1 className={clsx('sm-h1 fw-bold', styles.h1)}>
              <Translate
                id="home.title"
                values={{
                  br: <br />,
                }}
              >
                {'Build Q&A Community {br} with Answer'}
              </Translate>
            </h1>

            <div
              className={clsx('text-secondary text--center mb-4', styles.intro)}
            >
              <Translate
                id="home.description"
                values={{
                  br: <br />,
                }}
              >
                {'An open-source knowledge-based community software. {br} You can use it quickly to build Q&A community for your products, customers, teams, and more.'}
              </Translate>
            </div>

            <div className="d-flex">
              <Button
                size="lg"
                variant="primary"
                className="fw-normal fs-20 btnMain me-3"
                href="/docs"
              >
                <Translate id="home.btn.started">Get Started</Translate>
              </Button>

              <Button
                size="lg"
                variant="dark"
                className="btnMain fw-normal fs-20"
                href="https://github.com/answerdev/answer"
                target="_blank"
              >
                <Icon name="github" size="24px"  className="me-2" />
                {` Star `}
                {stars !== 0 ? numWord(stars) : ''}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default HomeHead;
