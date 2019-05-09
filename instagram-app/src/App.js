import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage';
import Login from './components/Loginpage';
import Authenticate from './components/GetAuthentication';



class App extends Component {
  constructor() {
    super();
    this.state = {};
  }


    render() {
      return (
        <div className="App">
        <PostsPage />
        </div>
      );
    }
  }

 

  export default Authenticate(App);
