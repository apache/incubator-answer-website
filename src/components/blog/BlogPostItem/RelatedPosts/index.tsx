import React, { memo } from 'react';
import Translate from '@docusaurus/Translate';
import BlogList from '../../BlogList';

const Index = ({ relatedList = []  }) => {
  if (relatedList.length === 0) return null;
  return (
    <div style={{ marginTop: '6rem' }}>
      <h2 className='mb-4' style={{ fontSize: '2rem' }}>
        <Translate id="blogPostItem.relatedPosts">
          Related Posts
        </Translate>
      </h2>
      <BlogList data={relatedList}/>
    </div>
  )
}

export default memo(Index);
