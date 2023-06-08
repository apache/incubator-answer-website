 import React from 'react';
 import Link from '@docusaurus/Link';
 import clsx from 'clsx';
 import Translate from '@docusaurus/Translate';
 import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
 const TwitterIcon = require('@site/static/img/blog/twitter.svg').default;
 const FacebookIcon = require('@site/static/img/blog/facebook.svg').default;
 const LinkedinIcon = require('@site/static/img/blog/linkedin.svg').default;
 // @ts-ignore
 import { useBlogPost } from '@docusaurus/theme-common/internal';
 import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import styles from './index.module.css';


 const Index = () => {
    const { frontMatter, metadata } = useBlogPost();
    const {
      siteConfig: { url },
    } = useDocusaurusContext();

    return (
      <footer className='col col-b col--7 margin-top--md'>
        <div className='margin-bottom--md'>
          <span>
            <Translate id="blogPostItem.tags">
              Tags:
            </Translate>
          </span>
          {metadata.tags.map((tag) => {
            return (
              <Link
                key={tag.label}
                className="margin-right--sm"
                to={tag.permalink}>
                {tag.label}
              </Link>
            )
          })}
        </div>

        <div className={clsx('text-secondary', styles.shareWrap)}>
          <span>
            <Translate id="blogPostItem.share">
              Share To
            </Translate>
          </span>
          <TwitterShareButton
            className={styles.shareBtn}
            title={metadata.title}
            url={url + metadata.permalink}>
              <TwitterIcon />
          </TwitterShareButton>

          <FacebookShareButton
            className={styles.shareBtn}
            title={metadata.title}
            url={url + metadata.permalink}>
              <FacebookIcon />
          </FacebookShareButton>

          <LinkedinShareButton
            className={styles.shareBtn}
            title={metadata.title}
            url={url + metadata.permalink}
            source={url}
            summary={metadata.description}
          >
            <LinkedinIcon />
          </LinkedinShareButton>
        </div>
      </footer>
    )
 }

 export default Index;
