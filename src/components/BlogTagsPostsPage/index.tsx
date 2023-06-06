import React, { memo } from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import type {Props} from '@theme/BlogTagsPostsPage';
import SearchMetadata from '@theme/SearchMetadata';

import BlogList from '../BlogList';
import BlogHeader from '../BlogHeader';
import BlogTagsNav from '../BlogTagsNav';
import BlogPagination from '../BlogPagination';




interface IProps extends Props {
  tags: any[];
}
const Index = (props: IProps) => {
  const { tag, tags, items, listMetadata, } = props
  console.log('...props', props);
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <PageMetadata
        title={listMetadata.blogTitle}
        description={listMetadata.blogDescription} />
      <SearchMetadata tag="blog_tags_posts" />
      <Layout>
        <BlogHeader />
        <div className='container'>
          <BlogTagsNav className="mt-5" data={tags} activeLabel={tag?.label} />
          <h2
            className='mb-4'
            style={{
              fontSize: '2rem',
              marginTop: '1.5rem' }}
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
