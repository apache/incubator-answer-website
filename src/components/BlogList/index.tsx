import React, { memo } from 'react';
import type { Content } from "@theme/BlogPostPage";
import BlogCardItem from '../BlogCardItem';

interface Props {
  data: { readonly content: Content }[];
}
const Index= ({ data }: Props) => {
  return (
    <div className="row">
      {data.map((item) => {
        return (
          <BlogCardItem
            key={item.content.metadata.permalink}
            data={item.content}
          />
        )
      })}
    </div>
  )
}

export default memo(Index);
