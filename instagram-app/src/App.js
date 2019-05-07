import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';



class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      filteredPost:[]
    };
  }
  componentDidMount() {
    this.setState({ post: dummyData });
  }
  FindPostHandler = (e) => {
    const post = this.state.post.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
this.setState({ filteredPost:post});
  };

    render() {
      return (
        <div className="App">
          <SearchBar
          searchTerm={this.state.searchTerm}
          findPost={this.FindPostHandler}
           />
          <PostsContainer post={this.state.post} 
          post={
            this.state.filteredPost.length > 0
            ? this.state.filteredPost:this.state.post
          }
          />
        </div>
      );
    }
  }

  export default App;
