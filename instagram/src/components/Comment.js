import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comments = props => {
    return (
        <div className='com-text'>
        <span className='Comment'> {props.Comment.text}</span>{''}
        <span className='user'>-{props.comment.username}</span>
        </div>
    );
};

Comments.propTypes = {
    comment:PropTypes.shape({
        text:PropTypes.string,
        username:PropTypes.string
    })
};
export default Comments;