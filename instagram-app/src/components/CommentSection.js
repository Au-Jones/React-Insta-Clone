import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import NewComment from './NewComment';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    componentDidMount() {
        const id = this.props.postId



    }


    commentHandler = e => {
        this.setState({ comment: e.target.value });
    };



    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <NewComment
                    comment={this.state.comment}
                    changeComment={this.commentHandler}
                />
            </div>
        );
    }


    
}

CommentSection.propTypes = {
    comment: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;