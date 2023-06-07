import React, { memo } from 'react';
import BlogList from '../../BlogList';

const Index = ({ relatedList = []  }) => {
  if (relatedList.length === 0) return null;
  return (
    <div style={{ marginTop: '6rem' }}>
      <h2 className='mb-4' style={{ fontSize: '2rem' }}>Related Posts</h2>
      <BlogList data={relatedList}/>
    </div>
  )
}

export default memo(Index);
