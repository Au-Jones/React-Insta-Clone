import React from 'react';
import Comment from './CommentSection'
const PostContainer = (props) => {
    return (
        <div>
            {props.InstaData.map(item => {
                return <Comment eachComment={item} key={item.id} />
            })}
        </div>
    );
};

export default PostContainer;