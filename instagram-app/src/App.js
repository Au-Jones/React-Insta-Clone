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
      posts: dummyData
    };
  }
  componentDidMount() {
    this.setState({ post: dummyData });
  }
  FindPostHandler = () => {
    const post = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });


    render() {
      return (
        <div className="App">
          <SearchBar />
          <PostsContainer posts={this.state.posts} />
        </div>
      );
    }
  }

  export default App;
