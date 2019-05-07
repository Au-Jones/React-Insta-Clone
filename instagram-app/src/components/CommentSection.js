import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import NewComment from './EnterNewComment';


class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:props.comments
        };
    }
    render() {
        return (
            <div>
                {this.state.comments.map((c ,i) => <Comment key = {i} comment={c} />)}
                <NewComment />
            </div>
        );
    }
}

Comments.propTypes ={
    comments: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string , username: PropTypes.string})
    )
};

export default Comments;