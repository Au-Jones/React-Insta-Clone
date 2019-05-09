import React from 'react';
import PropTypes from 'prop-types';
import { username } from './PostTop';
import styled, { css } from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  ${props =>
    props &&
    css`
      line-height: 8px;
    `};
`;

const Comtext = styled.p`
  font-weight: 400;
  font-size: 0.8em;
  padding: 0 5px;
`;


const Comments = props => {
    return (
        <FlexWrapper>
        <UserName>{props.comment.username}</UserName>
        <Comtext>{props.comment.text}</Comtext>
      </FlexWrapper>
    );
};

Comments.propTypes = {
    comment:PropTypes.shape({
        text:PropTypes.string,
        username:PropTypes.string
    })
};
export default Comments;