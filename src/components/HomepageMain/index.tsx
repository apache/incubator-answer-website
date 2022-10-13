import React from 'react';
import clsx from 'clsx';
import { SmoothCorners } from 'react-smooth-corners'
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
  later?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Q&A Platform',
    icon: require('@site/static/img/feature-1.png').default,
    description: (
      <>
        Help members with questions and boost community participation. Your experts happily contribute, verify and upvote correct info. Your info stays fresh and trusted.
      </>
    ),
  },
  {
    title: 'Organized',
    icon: require('@site/static/img/feature-2.png').default,
    description: (
      <>
        Use tags to customize your questions and help contents into categories. They make knowledge easy to find for others. Our search capabilities find answers in seconds.
      </>
    ),
  },
  {
    title: 'Integrations',
    icon: require('@site/static/img/feature-3.png').default,
    description: (
      <>
        Configure your community with plugins and your favorite services. So that you can improve your workflow, grow your community, or just make life a little easier.
      </>
    ),
    later: 'Coming soon'
  },
  {
    title: 'Gamification',
    icon: require('@site/static/img/feature-4.png').default,
    description: (
      <>
        We’ve gamified the Q&A platform with reputation and badges. So the community members and teams have fun collaborating and getting work done.
      </>
    ),
    later: 'Coming soon'
  },
];

function Feature({title, icon, description, later}: FeatureItem) {
  return (
    <div className="col col--3 mb-4">
      <div className='margin-bottom--md'>
        <img className={styles.featureSvg} role="img" src={icon} />
      </div>
      <h2 style={{ fontWeight: 500 }}>{title}</h2>
      <p>{description}</p>
      <div style={{ fontSize: '12px', fontWeight: 700, }}>{later}</div>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {

  return (
    <div className='container'>
      <div className={clsx('row', styles.flexCenter)}>
        <div className='col col--10'>
          <section>
            <div className={styles.screenContent}>
            <SmoothCorners
              corners="32"
              borderRadius="32px"
              style={{padding: '16px', background: 'black' }}>
               <SmoothCorners
                  corners="50"
                  borderRadius="16px">
                  <div className="smoothBox">
                    <img src={require('@site/static/img/pc-screen.png').default} alt="" width="100%" height="auto" className="d-block smmothImg" />
                  </div>
                </SmoothCorners>
            </SmoothCorners>

            </div>
          </section>

          <section>
            <h3 className={clsx('text--center', styles.h1, styles.margin48)}>Features</h3>
            <div className={styles.features}>
              <div className="row">
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '96px' }}>
            <h3 className={clsx('text--center margin-bottom--sm', styles.h1)}>We welcome all contributions</h3>
            <p className='text--center text--secondary mb-4'>Here are some quick ways you can help the community.</p>
            <div className={styles.linkWrap}>
              <ul>
                <li className={styles.li}>
                  <a
                    href="https://github.com/answerdev/answer"
                    target="_blank">
                    Contribute to our open-source codebase on GitHub
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="" target="_blank">Help us improve the docs</a>
                </li>
                <li className={styles.li}>
                  <a href="" target="_blank">Help us translate language resources</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
