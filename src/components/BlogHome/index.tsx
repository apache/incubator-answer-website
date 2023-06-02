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


interface HomeProps {
  tagsList;
  pagenation;
  readonly recommendPosts: any;
  readonly blogListPaginated: any;
  readonly blogList: readonly { readonly content: Content }[];
}

export function Home({ recommendPosts, tagsList, blogList, pagenation }: HomeProps): JSX.Element {
  console.log('recommendPosts', pagenation);
  console.log('tagsList', tagsList);
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <PageMetadata title="dashuai blog" keywords="sdfsdfdf" image="https://image-static.segmentfault.com/144/353/1443532229-64701786e4417_fix732"/>
      <Layout>
        <BlogHeader />
        <div className="container">
          <BlogRecommend data={recommendPosts} />
          <BlogTagsNav data={tagsList} />

         <BlogList data={blogList}/>

          <BlogPagination data={pagenation} />
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}

export default Home;
