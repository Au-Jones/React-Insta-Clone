import React from 'react'

const NewComment = props => {
    return (
        <form>
            <input
            type='text'
            value={props.comment}
            placeholder='Add comment'
            onChange={props.changeComment}
            />
        </form>
    );
};


export default NewComment;