import React from 'react';
import './Post.css';

const PostTop = props => {
    return (
      <div className="post-top">
        <div className="post-thumb-wrapper">
          <img
            alt="post top"
            className="post-thumb"
            src={props.thumbnailUrl}
          />
        </div>
        <div>{props.username}</div>
      </div>
    );
  };
  
  export default PostTop;