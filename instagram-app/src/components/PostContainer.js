import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
    return (
        <div className = 'post-container'>
            {props.post.map(p => <Post Key={p.imageUrl} post={p} />)} 
        </div>
    );
};

export default PostContainer;