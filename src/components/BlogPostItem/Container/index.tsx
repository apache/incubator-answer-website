/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
// @ts-ignore
import {useBlogPost} from '@docusaurus/theme-common/internal';

import styles from './index.module.css';


export default function BlogPostItemContainer({children, className}) {
  const {frontMatter, assets} = useBlogPost();
  const {withBaseUrl} = useBaseUrlUtils();
  const image = assets.image ?? frontMatter.image;
  return (
    <article
      className={clsx('container', styles.blogContent, className)}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting">
      {image && (
        <meta itemProp="image" content={withBaseUrl(image, {absolute: true})} />
      )}
      <div className={clsx('row', styles.justifyCenter)}>
        {children}
      </div>
    </article>
  );
}
