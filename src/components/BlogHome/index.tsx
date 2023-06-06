import React from "react";
import Layout from "@theme/Layout";
import clsx from 'clsx';
import { Content } from "@theme/BlogPostPage";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';

import BlogHeader from "../BlogHeader";
import BlogRecommend from "../BlogRecommend";
import BlogTagsNav from "../BlogTagsNav";
import BlogList from "../BlogList";
import BlogPagination from "../BlogPagination";

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
  tagsList;
  metadata: MetaData;
  readonly recommendPosts: any;
  readonly blogListPaginated: any;
  readonly blogList: readonly { readonly content: Content }[];
}

export function Home({ recommendPosts, tagsList, metadata, blogList }: HomeProps): JSX.Element {
  console.log('metadata', metadata);
  console.log('tagsList', recommendPosts);
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <PageMetadata
        title={metadata.blogTitle}
        keywords={metadata.blogDescription}
        image="https://image-static.segmentfault.com/144/353/1443532229-64701786e4417_fix732" />
      <Layout>
        <BlogHeader />
        <div className="container">
          <BlogRecommend data={recommendPosts} />
          <BlogTagsNav
            data={tagsList}
            className={clsx(recommendPosts.length ? '' : 'mt-5')}
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
