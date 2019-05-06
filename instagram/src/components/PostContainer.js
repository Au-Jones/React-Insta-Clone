import React from 'react';
import Post from './Post';
import'./Post.css';
const PostContainer = (props) => {
    return (
        <div className = 'posts-container'>
            {props.posts.map(p => <Post Key={p.imageUrl} post={p} />)} 
        </div>
    );
};

export default PostContainer;