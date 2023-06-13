import React, { memo } from 'react';
import Translate from '@docusaurus/Translate';
import BlogList from '../../BlogList';

const Index = ({ relatedList = []  }) => {
  if (relatedList.length === 0) return null;
  return (
    <div className="pt-5 mt-5">
      <h2 className='mb-4'>
        <Translate id="blogPostItem.relatedPosts">
          Related Posts
        </Translate>
      </h2>
      <BlogList data={relatedList}/>
    </div>
  )
}

export default memo(Index);
