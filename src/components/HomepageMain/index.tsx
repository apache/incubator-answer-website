import React from 'react';
import clsx from 'clsx';
import { Row, Col, Carousel } from 'react-bootstrap';
import Translate from '@docusaurus/Translate';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
        Ask, answer, and grow with the community. Everyone is a part of knowledge sharing: contribute an answer, leave a comment, and vote. The content is always up-to-date.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="home.features.title2">
        Always Organized
      </Translate>
    ),
    icon: require('@site/static/img/feature-2.png').default,
    description: (
      <Translate id="home.features.item2">
        Search and find relevant content with the help of intuitive tagging system.
        It’s an easy and efficient way for categorization. Everyone can search and locate the content quickly.
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
        Extend Apache Answer with plugins to fit your needs. Connect with the tools you love. Streamline your workflow, add wings to current tools, and boost the efficiency.
      </Translate>
    ),
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
        Earn reputation and badges with your expertise and etiquette. Enjoy a rewarding and engaging experience while thrive the community with other members.
      </Translate>
    ),
  },
];

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  pauseOnHover: false,
  arrows: false,
};

function Feature({ title, icon, description, later }: FeatureItem) {
  return (
    <Col sm={12} md={6} lg={3} className="mb-4">
      <div className="border p-4 rounded h-100">
        <div className="mb-3">
          <img className={styles.featureSvg} role="img" src={icon} />
        </div>
        <h4 className="mb-3">{title}</h4>
        <p>{description}</p>
        {later && <div className={styles.badge}>{later}</div>}
      </div>
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
    <div className="container" style={{ overflow: 'auto' }}>
      <Slider {...settings}>
        {bannerList.map((banner) => {
          return (
            <div key={banner.laptop}>
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
            </div>
          );
        })}
      </Slider>

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
                  <a href="/community/contributing">
                    <Translate id="home.contribute.item1">
                      Contribute to our open-source codebase
                    </Translate>
                  </a>
                </li>
                <li className={clsx('mb-2', styles.li)}>
                  <a href="/docs">
                    <Translate id="home.contribute.item2">Help us improve the docs</Translate>
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="/community/translation">
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
