import React, { FC, useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { Row, Col, Button } from 'react-bootstrap';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Icon from '@site/src/components/Icon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

const list = [
  <Translate id="home.title.qa">
    Q&A Platform
  </Translate>,
  <Translate id="home.title.knowledge">
    Knowledge Sharing Platform
  </Translate>,
  <Translate id="home.title.community">
    Forum
  </Translate>,
  <Translate id="home.title.base">
    Knowledge Base
  </Translate>,
  <Translate id="home.title.developer">
    Developer Hub
  </Translate>,
  <Translate id="home.title.support">
    Support Center
  </Translate>,
]

const HomeHead: FC = () => {
  const [stars, setStars] = useState(0);
  const [slogon, setSlogon] = useState(<Translate id="home.title.qa">
  Q&A Platform
</Translate>);
  const [slogonClass, setSlogonClss] = useState('slogonIn');

  const { i18n: { currentLocale } } = useDocusaurusContext();


  useEffect(() => {
    fetch('https://img.shields.io/github/stars/answerdev/answer')
      .then((response) => response.text())
      .then((data) => {
        const num = data.match(/<text .*>(.*?)<\/text>/)[1];
        if (num) {
          setStars(num);
        }
      });
      let i = 0;
      const timer = setInterval(() => {
        setSlogonClss('slogonOut');
        setTimeout(() => {
          setSlogon(list[i]);
          setSlogonClss('slogonIn');
        }, 300);
        i++;
        if (i === list.length) {
          i = 0;
        }
      }, 4500);
    () => {
      clearInterval(timer)
    }
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
          <Col md={12} lg={10} className='d-flex flex-column align-items-center'>
            <img
              src={require('@site/static/img/head-icon.png').default}
              alt="head-icon"
              width="168"
              height="168"
              className="mb-4"
            />

            <h1 className={clsx('sm-h1 fw-bold', styles.h1)}>
              <Translate
                id="home.title.build"
              >
                Build
              </Translate>
              {currentLocale === 'zh-CN' ? <br /> : ''}
              <span className={clsx('text-decoration-underline link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover', styles.slogon, styles[slogonClass])}>
                <span className='link-body-emphasis'>{slogon}</span>
              </span>
              <br />
              <Translate
                id="home.title.teams"
              >
                with Answer
              </Translate>
            </h1>

            <div
              className={clsx('text-secondary text-center mb-4 px-4', styles.intro)}
            >
              <Translate
                id="home.description"
                values={{
                  br: currentLocale === 'zh-CN' ? <br /> : '',
                }}
              >
                {"A Q&A platform software for teams at any scales.{br} Whether it’s a community forum, help center, or knowledge management platform, you can always count on Answer."}
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
