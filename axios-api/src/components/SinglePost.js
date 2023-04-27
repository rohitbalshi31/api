import React from 'react'

const SinglePost = () => {
  return (
    <div className="card">
    <img src={post.image} alt={post.text} />
    <div className="card-content">
      <h2>{post.text}</h2>
      <img src={post.owner.image} alt="" />
      <p>{post.owner.firstName} {post.owner.lastName}</p>
    </div>
  </div>
  );
}

export default SinglePost
