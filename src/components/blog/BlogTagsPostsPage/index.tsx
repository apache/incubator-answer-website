import React, { memo } from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import type {Props} from '@theme/BlogTagsPostsPage';
import SearchMetadata from '@theme/SearchMetadata';

import BlogList from '../BlogList';
import BlogHeader from '../BlogHeader';
import BlogPagination from '../BlogPagination';
import PageMetadata from '../PageMetadata';





const Index = (props: Props) => {
  const { tag, items, listMetadata, } = props
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <PageMetadata
        title={`${tag.label} | ${listMetadata.blogTitle}`}
        description={listMetadata.blogDescription}
        ogType='website'
        image={require('@site/static/img/blog/cover@4x.png').default} />
      <SearchMetadata tag="blog_tags_posts" />
      <Layout>
        <BlogHeader />
        <div className='container mt-5'>
          <h2
            className='mb-4'
            style={{
              fontSize: '2rem',
            }}
          >
            “{tag.label}” Posts
          </h2>
          <BlogList data={items} />
          <BlogPagination data={listMetadata} />
        </div>
      </Layout>
    </HtmlClassNameProvider>
  )
}

export default memo(Index);
