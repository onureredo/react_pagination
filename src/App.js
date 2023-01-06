import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './style.css';

function App() {
  const [posts, setPosts] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  useEffect(() => {
    const fetchPosts = async () => {      
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);      
    }

    fetchPosts();
  }, []);

  // console.log(posts);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage; //index of the last post
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="container">
      <h1>POSTS</h1>
      {/* <Posts posts={posts}/>*/}
      <Posts posts={currentPosts}/>
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length} 
        paginate={paginate}
      />      
    </div>
  );
}

export default App;
