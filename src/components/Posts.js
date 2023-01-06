import React from 'react'

const Posts = ({posts}) => {

  return (
    <div className='posts'>
        <ul>
            {posts.map(post = (
                <li key={post.id}>{post.title}</li>
            ) )}
        </ul>
      
    </div>
  )
}

export default Posts
