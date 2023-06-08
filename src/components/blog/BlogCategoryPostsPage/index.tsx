import React, { memo } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import type {Props} from '@theme/BlogTagsPostsPage';
import SearchMetadata from '@theme/SearchMetadata';

import BlogList from '../BlogList';
import BlogHeader from '../BlogHeader';
import BlogCategoriesNav from "../BlogCategoriesNav";
import BlogPagination from '../BlogPagination';
import PageMetadata from '../PageMetadata';

interface IProps extends Props {
  category: any;
  categoriyList: any[];
}
const Index = (props: IProps) => {
  const { category, categoriyList, items, listMetadata, } = props
  // console.log('...props', props);
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <PageMetadata
        title={`${category.label} | ${listMetadata.blogTitle}`}
        description={listMetadata.blogDescription}
        ogType='website'
        image={require('@site/static/img/blog/cover@4x.png').default} />
      <SearchMetadata tag="blog_tags_posts" />
      <Layout>
        <BlogHeader />
        <div className='container'>
          <BlogCategoriesNav
            className="mt-5"
            data={categoriyList}
            activeLabel={category?.label} />
          <h2
            className='mb-4'
            style={{
              fontSize: '2rem',
              marginTop: '1.5rem' }}
          >
            <Translate
              id="blogCategoryPostsPage.posts"
              values={{
                category_name: category.label,
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
