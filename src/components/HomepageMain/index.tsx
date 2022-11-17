import React from 'react';
import clsx from 'clsx';
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
        Help members with questions and boost community participation. Your experts are happy to contribute, verify, upvote correct info. Your info keeping up-to-date and trusted.
      </>
    ),
  },
  {
    title: 'Organized',
    icon: require('@site/static/img/feature-2.png').default,
    description: (
      <>
        Use tags to organize questions and help contents into categories. They make knowledge easy to find for others. Use the search to quickly find the answer.
      </>
    ),
  },
  {
    title: 'Integrations',
    icon: require('@site/static/img/feature-3.png').default,
    description: (
      <>
        Configure your community with plugins and your favorite services. So that you can improve your workflow, grow your community, or make your other tools better.
      </>
    ),
    later: 'Coming soon'
  },
  {
    title: 'Gamification',
    icon: require('@site/static/img/feature-4.png').default,
    description: (
      <>
        We've gamified the Q&A platform with reputation and badges. So the community members and teams have fun collaborating and getting work done.
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
      <h2 className='ff-headline' style={{ fontWeight: 500 }}>{title}</h2>
      <p>{description}</p>
      {later && <div className={styles.badge}>{later}</div>}
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {

  return (
    <div className='container'>
      <div className={clsx('row', styles.flexCenter)}>
        <div className={clsx('col col--10')}>
          <section>
            <div className={styles.screenContent}>
              <div className={styles.boxShadow}>
                <div className={styles.pcScreen}>
                  <img src={require('@site/static/img/pc-screen.png').default} alt="" width="100%" height="auto" className={clsx('d-block', styles.smmothImg)} />
                </div>
              </div>

              <div className={styles.screenMobile}>
                <div className={styles.boxShadow2}>
                  <img src={require('@site/static/img/mobile-screen.png').default} alt="" width="100%" height="auto" className={clsx('d-block', styles.smmothImg)} />
                </div>
              </div>

            </div>
          </section>

          <section>
            <h3 className={clsx('text--center ff-headline', styles.h1, styles.margin48)}>Features</h3>
            <div className={styles.features}>
              <div className="row">
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '96px' }}>
            <h3 className={clsx('text--center margin-bottom--sm ff-headline', styles.h1)}>We welcome all contributions</h3>
            <p className='text--center text--secondary mb-4 fs-20'>Here are some quick ways you can help the community.</p>
            <div className={styles.linkWrap}>
              <ul>
                <li className={clsx('margin-bottom--sm',styles.li)}>
                  <a
                    href="https://github.com/answerdev/answer">
                    Contribute to our open-source codebase on GitHub
                  </a>
                </li>
                <li className={clsx('margin-bottom--sm',styles.li)}>
                  <a href="https://github.com/answerdev/answer.dev">Help us improve the docs</a>
                </li>
                {/* <li className={styles.li}>
                  <a href="/">Help us translate language resources</a>
                </li> */}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
