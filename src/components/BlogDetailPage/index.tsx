// @ts-nocheck
import React from 'react';
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  BlogPostProvider,
  useBlogPost,
} from "@docusaurus/theme-common/internal";
import Layout from "@theme/Layout";
import BlogPostPageMetadata from "./Metadata";
import TOC from "@theme/TOC";

import BlogPostItem from '../BlogPostItem';


function BlogPostPageContent({relatedList, sidebar, children}) {
  const {metadata, toc} = useBlogPost();
  const { frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  return (
    <Layout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <BlogPostItem relatedList={relatedList}>{children}</BlogPostItem>

    </Layout>
  );
}

const Index = (props) => {
  const BlogPostContent = props.content;
  const { relatedList = [] } = props;
  console.log(props);
  return (
      <BlogPostProvider content={props.content} isBlogPostPage>
        <HtmlClassNameProvider
          className={clsx(
            ThemeClassNames.wrapper.blogPages,
            ThemeClassNames.page.blogPostPage,
          )}
          >
            <BlogPostPageMetadata  />
            <BlogPostPageContent relatedList={relatedList}>
              <BlogPostContent />
            </BlogPostPageContent>
        </HtmlClassNameProvider>
    </BlogPostProvider>
  )
}


export default Index;
