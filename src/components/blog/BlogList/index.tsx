import React, { memo } from 'react';
import { Row } from 'react-bootstrap';
import type { Content } from "@theme/BlogPostPage";
import BlogCardItem from '../BlogCardItem';

interface Props {
  data: { readonly content: Content }[];
}
const Index= ({ data }: Props) => {
  return (
    <Row>
      {data.map((item) => {
        return (
          <BlogCardItem
            key={item.content.metadata.permalink}
            data={item.content}
          />
        )
      })}
    </Row>
  )
}

export default memo(Index);
