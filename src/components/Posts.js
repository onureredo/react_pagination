import React from 'react';

const Posts = ({ posts }) => {

  return (
    <div className='posts'>
      <ol>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Posts;