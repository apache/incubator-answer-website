/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import MDXContent from '@theme/MDXContent';
export default function BlogPostItemContent({children, className}) {
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id="__blog-post-container"
      className={clsx('col col--7 markdown', className)}
      itemProp="articleBody">
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
