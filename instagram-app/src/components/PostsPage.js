import React, { Component } from 'react';
import dummyData from '../dummy-data';
import PostContainer from './PostContainer';
import search from './SearchBar';

class PostP extends Component {
    constructor() {
        super();
        this.state={
            post:[],
            filteredPosts:[]
        };
    }
    componentDidMount() {
        this.setState({ posts:dummyData});
    }
    FindPostHandler = e => {
        // eslint-disable-next-line
        const post = this.state.posts.filter(p => {
            if (p.username.includes(e.target.value)) {
                return p;
            }
        });
        this.setState({ filteredPosts :post});
    };
    render() {
        return(
            <div className='App'>
            <search
            searchTerm={this.state.searchTerm}
            searchPosts={this.FindPostHandler}
            />
            <PostContainer
            post={
                this.state.filteredPosts.length >0
                ?this.state.filteredPosts
                :this.state.post
            }
            />
            </div>
        );
    }
}

export default PostP;