import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return(
    props.blogPost.map((post) => {
      return(
        <Link to = {`/PostDetails/${post.id}`} className ="rounded overflow-hidden shadow-lg">
        <div className ="px-6 py-4">
          <div className ="font-bold text-xl mb-2">{post.title}</div>
          <p className ="text-gray-700 text-base">
            {post.body}
          </p>
        </div>
      </Link>
  
      )
    })

  )
  

}

export default Card;