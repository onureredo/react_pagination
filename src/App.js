import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './style.css';

//https://jsonplaceholder.typicode.com/posts
function App() {
  const [posts, setPosts] = useState([]);
  

  //paginationn
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {      
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);      
    }

    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
