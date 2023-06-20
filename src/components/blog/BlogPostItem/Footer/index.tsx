 import React from 'react';
 import Link from '@docusaurus/Link';
 import Translate from '@docusaurus/Translate';
 import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
 // @ts-ignore
 import { useBlogPost } from '@docusaurus/theme-common/internal';
 import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import Icon from '@site/src/components/Icon';

import styles from './index.module.css';


 const Index = () => {
    const { metadata } = useBlogPost();
    const {
      siteConfig: { url },
    } = useDocusaurusContext();

    return (
      <div className='col col--7 mt-3'>
        {metadata.tags.length > 0 && (
          <div className='mb-3'>
            <span>
              <Translate id="blogPostItem.tags">
                Tags:
              </Translate>
            </span>
            {' '}
            {metadata.tags.map((tag,index) => {
              return (
                <span key={tag.label}>
                  <Link
                    to={tag.permalink}>
                    {tag.label}
                  </Link>
                  {index === metadata.tags.length - 1 ? '' : ', '}
                </span>
              )
            })}
          </div>
        )}

        <div className="d-flex align-items-center text-secondary">
          <span>
            <Translate id="blogPostItem.share">
              Share to
            </Translate>
          </span>
          <TwitterShareButton
            className={styles.shareBtn}
            title={metadata.title}
            url={url + metadata.permalink}>
              <Icon name="twitter" size="16px" />
          </TwitterShareButton>

          <FacebookShareButton
            className={styles.shareBtn}
            title={metadata.title}
            url={url + metadata.permalink}>
              <Icon name="facebook" size="16px" />
          </FacebookShareButton>

          <LinkedinShareButton
            className={styles.shareBtn}
            title={metadata.title}
            url={url + metadata.permalink}
            source={url}
            summary={metadata.description}
          >
            <Icon name="linkedin" size="16px" />
          </LinkedinShareButton>
        </div>
      </div>
    )
 }

 export default Index;
