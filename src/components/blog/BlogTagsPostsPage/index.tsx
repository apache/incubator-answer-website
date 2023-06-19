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
import HeaderSlogon from "../../HeaderSlogon";
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
        title={tag.label}
        description={listMetadata.blogDescription}
        ogType='website'
        image={require('@site/static/img/blog/cover@4x.png').default} />
      <SearchMetadata tag="blog_tags_posts" />
      <Layout>
        <HeaderSlogon type="blog" />
        <div className='container pt-5 pb-5'>
          <h2 className='mb-4'>
            <Translate
              id="blogCategoryPostsPage.posts"
              values={{
                category_name: tag.label,
              }}
              >
              {'“{category_name}” Posts'}
            </Translate>
          </h2>
          <BlogList data={items} />
          <BlogPagination data={listMetadata} />
        </div>
      </Layout>
    </HtmlClassNameProvider>
  )
}

export default memo(Index);
