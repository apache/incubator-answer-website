import React from 'react';
import clsx from 'clsx';
import { Row, Col, Carousel } from 'react-bootstrap';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

type FeatureItem = {
  title: JSX.Element;
  icon: string;
  description: JSX.Element;
  later?: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="home.features.title1">
        Q&A Platform
      </Translate>
    ),
    icon: require('@site/static/img/feature-1.png').default,
    description: (
      <Translate id="home.features.item1">
        Help members with questions and boost community participation. Your
        experts are happy to contribute, verify, upvote correct info. Your info
        keeping up-to-date and trusted.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="home.features.title2">
        Organized
      </Translate>
    ),
    icon: require('@site/static/img/feature-2.png').default,
    description: (
      <Translate id="home.features.item2">
        Use tags to organize questions and help contents into categories. They
        make knowledge easy to find for others. Use the search to quickly find
        the answer.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="home.features.title3">
        Integrations
      </Translate>
    ),
    icon: require('@site/static/img/feature-3.png').default,
    description: (
      <Translate id="home.features.item3">
        Configure your community with plugins and your favorite services. So
        that you can improve your workflow, grow your community, or make your
        other tools better.
      </Translate>
    ),
    later: <Translate id="home.features.comming_soon">Coming soon</Translate>,
  },
  {
    title: (
      <Translate id="home.features.title4">
        Gamification
      </Translate>
    ),
    icon: require('@site/static/img/feature-4.png').default,
    description: (
      <Translate id="home.features.item4">
        We’ve gamified the Q&A platform with reputation and badges. So the
        community members and teams have fun collaborating and getting work
        done.
      </Translate>
    ),
    later: <Translate id="home.features.comming_soon">Coming soon</Translate>,
  },
];

function Feature({ title, icon, description, later }: FeatureItem) {
  return (
    <Col  sm={12} md={6} lg={3} className="mb-4">
      <div className="mb-3">
        <img className={styles.featureSvg} role="img" src={icon} />
      </div>
      <h4 className="mb-3">{title}</h4>
      <p>{description}</p>
      {later && <div className={styles.badge}>{later}</div>}
    </Col>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const bannerList = [
    {
      laptop: require('@site/static/img/home-laptop@2x.png').default,
      mobile: require('@site/static/img/home-mobile@2x.png').default,
    },
    {
      laptop: require('@site/static/img/answers-laptop@2x.png').default,
      mobile: require('@site/static/img/answers-mobile@2x.png').default,
    },
    {
      laptop: require('@site/static/img/profile-laptop@2x.png').default,
      mobile: require('@site/static/img/profile-mobile@2x.png').default,
    },
  ];
  return (
    <div className="container">
      <div className='position-relative'>
        <Carousel fade controls={false} indicators={false} interval={5000}>
          {bannerList.map((banner) => {
            return (
              <Carousel.Item key={banner.laptop}>
                <section>
                  <div className={styles.screenContent}>
                      <div className={styles.pcScreen}>
                        <img
                          src={banner.laptop}
                          alt=""
                          width="100%"
                          height="auto"
                          className={clsx('d-block', styles.smmothImg)}
                        />
                      </div>

                    <div className={styles.screenMobile}>
                      <img
                        src={banner.mobile}
                        alt=""
                        width="100%"
                        height="auto"
                        className={clsx('d-block', styles.smmothImg)}
                      />
                    </div>
                  </div>
                </section>
              </Carousel.Item>
            );
          })}
        </Carousel>
        {/* this is for shadow */}
        <div className={styles.shadowWrap}>
          <div className={styles.screenContent}>
            <div className={clsx(styles.pcScreen, styles.shadow)}>
              <img
                src={require('@site/static/img/home-laptop@2x.png').default}
                alt=""
                width="100%"
                height="auto"
                className={clsx('d-block', styles.smmothImg)}
              />
            </div>

            <div className={clsx(styles.screenMobile, styles.shadow2)}>
              <img
                src={require('@site/static/img/home-mobile@2x.png').default}
                alt=""
                width="100%"
                height="auto"
                className={clsx('d-block', styles.smmothImg)}
              />
            </div>
          </div>
        </div>
      </div>

      <Row className="row justify-content-center">
        <Col className="col-12">
          <section>
            <h3 className="text-center mb-5 h1">
              <Translate id="home.features.title">Features</Translate>
            </h3>
            <div className={styles.features}>
              <div className="row">
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '96px' }}>
            <h3 className="text-center h1">
              <Translate id="home.contribute.title">We welcome all contributions</Translate>
            </h3>
            <p className="text-center text-secondary mb-4 fs-20">
              <Translate id="home.contribute.ways">
                Here are some quick ways you can help the community.
              </Translate>
            </p>
            <div className={styles.linkWrap}>
              <ul>
                <li className={clsx('mb-2', styles.li)}>
                  <a href="https://github.com/answerdev/answer">
                    <Translate id="home.contribute.item1">
                      Contribute to our open-source codebase on GitHub
                    </Translate>
                  </a>
                </li>
                <li className={clsx('mb-2', styles.li)}>
                  <a href="https://github.com/answerdev/answer.dev">
                    <Translate id="home.contribute.item2">Help us improve the docs</Translate>
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://crowdin.com/project/answer" target="_blank">
                    <Translate id="home.contribute.item3">Help us translate language resources</Translate>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
}
