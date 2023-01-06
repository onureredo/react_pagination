import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Posts from './components/Posts';
import './style.css';

//https://jsonplaceholder.typicode.com/posts
function App() {
  const [posts, setPosts] = useState([]);  

  //paginationn
  const [currentPage, setCurrentpage] = useState(); // 1
  const [postPerPage, setPostsPerPage] = useState(); // 10

  useEffect(() => {
    const fetchPosts = async () => {      
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);      
    }

    fetchPosts();
  }, []);

  // console.log(posts);
  return (
    <div className="container">
      <h1>POSTS</h1>
      <Posts posts={posts}/>           
    </div>
  );
}

export default App;
