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

    // componentDidMount() {
    //     const id = this.props.postId;
    //     if (localStorage.getItem(id)) {
    //         this.setState({
    //             comments: JSON.parse(localStorage.getItem(this.props.postId))
    //         });
    //     } else {
    //         this.setComments();
    //     }
    // }
    componentWillUnmount() {
      this.setComments();
        
    };

    setComments = (e) => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };

    commentHandler = e => {
        e.preventDefault();
     const NewCom = {
         text:this.state.comments,
         username:localStorage.getItem('user')
    };
    
    const comments = this.state.comments.slice();
    comments.push(NewCom);
    this.setState({ comments,comments: ''});
    setTimeout(()=> {
        this.setComments();
    },500);
    };

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <NewComment
                    comment={this.state.comment}
                    changeComment={this.commentHandler}
                    submitComment={this.handleCommentSubmit}
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