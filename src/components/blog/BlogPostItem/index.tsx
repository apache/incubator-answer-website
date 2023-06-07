/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @ts-nocheck
import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import BlogPostItemContainer from './Container';
import BlogPostItemContent from './Content';
import BlogPostItemHeader from './Header';
import BlogPostItemFooter from './Footer';
import RelatedPosts from './RelatedPosts';
// apply a bottom margin in list view

export default function BlogPostItem({relatedList = [], children, className}) {
  return (
    <BlogPostItemContainer className={clsx(className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
      <RelatedPosts relatedList={relatedList} />
    </BlogPostItemContainer>
  );
}
