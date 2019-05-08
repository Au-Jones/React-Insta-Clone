import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage';
import Login from './components/Loginpage';
import withAuthentication from './components/GetAuthentication';




class App extends Component {
  constructor() {
    super();
    this.state = {};
  }


    render() {
      return (
        <div className="App">
        <ComponentFromWithAuthenticate />
        </div>
      );
    }
  }

  const ComponentFromWithAuthenticate = withAuthentication(PostsPage)(Login);

  export default App;
