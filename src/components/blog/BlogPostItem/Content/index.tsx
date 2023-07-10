/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import MDXContent from '@theme/MDXContent';
import MDXImg from '@theme/MDXComponents/Img';
// @ts-ignore
import {useBlogPost} from '@docusaurus/theme-common/internal';

export default function BlogPostItemContent({children, className}) {
  const { frontMatter } = useBlogPost();
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id="__blog-post-container"
      className={clsx('markdown', className)}
      itemProp="articleBody">
      <div className='mb-4'>
        <MDXImg
          src={require(`@site/static/img/blog/${frontMatter.image}`).default}
          className="rounded"
          width="1280px"
          height="720px"
          />
      </div>
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
