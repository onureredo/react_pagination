import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Posts from './components/Posts';
import './style.css';

//https://jsonplaceholder.typicode.com/posts
function App() {
  const [posts, setPosts] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);


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


  
  return (
    <div className="container">
      <h1>POSTS</h1>
      {/* <Posts posts={posts}/>            */}
      <Posts posts={currentPosts}/>           
    </div>
  );
}

export default App;
