import React from "react";
import Layout from "@theme/Layout";
import clsx from 'clsx';
import { Content } from "@theme/BlogPostPage";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';

import HeaderSlogon from "../../HeaderSlogon";
import BlogRecommend from "../BlogRecommend";
import BlogCategoriesNav from "../BlogCategoriesNav";
import BlogList from "../BlogList";
import BlogPagination from "../BlogPagination";
import PageMetadata from "../PageMetadata";

type MetaData = {
  blogDescription: string;
  blogTitle: string;
  nextPage: string;
  page: number;
  permalink: string;
  postsPerPage: number;
  totalCount: number;
  totalPages: number;
}
interface HomeProps {
  categoyList;
  metadata: MetaData;
  readonly featuredPosts: any[];
  readonly blogListPaginated: any;
  readonly blogList: readonly { readonly content: Content }[];
}

export function Home({ featuredPosts, categoyList, metadata, blogList }: HomeProps): JSX.Element {
  // console.log('metadata', metadata);
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <PageMetadata
        title="Blog"
        keywords={metadata.blogDescription}
        ogType="website"
        image={require('@site/static/img/blog/cover@4x.png').default} />
      <Layout>
        <HeaderSlogon type="blog" />
        <div className="container pb-5">
          <BlogRecommend data={featuredPosts} />
          <BlogCategoriesNav
            data={categoyList}
            className={clsx(featuredPosts.length ? '' : 'mt-5')}
            activeLabel="All"
          />
          <BlogList data={blogList}/>
          <BlogPagination data={metadata} />
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}

export default Home;
