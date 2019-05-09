import React from 'react'
import styled from 'styled-components';


const Newform = styled.form`
border-top:1px solid red;
width:100%
height:100%;
`;

const Newinput = styled.input`
border:none;
height:100%;
width:100%;
padding:10px;
`;


const NewComment = props => {
    return (
        <Newform onSubmit={props.submitComment}>
            <Newinput
            type='text'
            value={props.comment}
            placeholder='Add comment'
            onChange={props.changeComment}
            />
        </Newform>
    );
};


export default NewComment;