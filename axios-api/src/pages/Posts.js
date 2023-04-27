import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Posts = () => {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/post?limit=33', 
        { headers: {'app-id': '644a0c684a6a87b6188950b5'}})
        .then(response => setPosts(response.data.data))
        .catch(error => console.log(error));
    }, []);
  return (
    <div className="container">
      <div className="wrapper">
        {Array.isArray(post) && post.map(post => (
        <div key={post.id} className="card">
              <img src={post.image} alt={post.id} className='card-img-top'  />
              <div className="card-body">
                 <h2>{post.text}</h2>
                 <div className='likes'>
                 <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                 <h5>{post.likes}</h5>
                 </div>
                 <img src={post.owner.image} alt="" />
                 <h4>{post.owner.firstName} {post.owner.lastName}</h4>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
