// @ts-nocheck
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
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
import TOC from "../TOC";
import BlogPostItemHeader from '../BlogPostItem/Header';

import BlogPostItem from '../BlogPostItem';


function BlogPostPageContent({relatedList, sidebar, children}) {
  const {metadata, toc} = useBlogPost();

  console.log('BlogPostPageContent', toc);
  const { frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  return (
    <Layout
      sidebar={sidebar}>
        <Container>
          <Row className='justify-content-end mb-4'>
            <Col lg={8} md={12}>
               <div className='px-0 px-lg-5 pt-5'>
                 <BlogPostItemHeader />
               </div>
            </Col>
            <Col lg={2} md={12} />
          </Row>
          <Row className='justify-content-end'>
            <Col lg={8} md={12}>
              <BlogPostItem relatedList={relatedList}>
                {children}
              </BlogPostItem>
            </Col>
            <Col lg={2} md={12}>
              {toc && <TOC
                  toc={toc}
                  minHeadingLevel={tocMinHeadingLevel}
                  maxHeadingLevel={tocMaxHeadingLevel}
                />}
            </Col>
          </Row>
        </Container>
    </Layout>
  );
}

const Index = (props) => {
  const BlogPostContent = props.content;
  const { relatedList = [] } = props;

  return (
      <BlogPostProvider content={props.content} isBlogPostPage>
        <HtmlClassNameProvider
          className={clsx(
            ThemeClassNames.wrapper.blogPages,
            ThemeClassNames.page.blogPostPage,
          )}
          >
            <BlogPostPageMetadata />
            <BlogPostPageContent relatedList={relatedList}>
              <BlogPostContent />
            </BlogPostPageContent>
        </HtmlClassNameProvider>
    </BlogPostProvider>
  )
}


export default Index;
