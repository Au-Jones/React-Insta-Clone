import React from 'react';
import './Posts.css';
import styled, { css } from 'styled-components';

const PostHeaderDiv = styled.div`
  display: flex;
  padding: 10px;
`;

const PostThumbWrapper = styled.div`
  height: 40px;
  width: 40px;
`;

export const Username = styled.div`
  font-weight: 400;
  font-size: 0.8em;
  padding: 0 10px;
  ${props =>
    props.bold &&
    css`
      font-weight: 400;
      font-size: 0.9em;
      padding: 10px;
    `};
`;

const PostHeader = props => {
  return (
    <PostHeaderDiv>
      <PostThumbWrapper>
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <Username bold>{props.username}</Username>
    </PostHeaderDiv>
  );
};

export default PostHeader;