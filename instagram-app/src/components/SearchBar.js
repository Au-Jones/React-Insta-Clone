import React from 'react'

// import './searchbar.css';

const search = props => {
    return (
        <div className="search-bar">
       
        <div>
          <input type="text" placeholder="Search" onKeyDown={PaymentResponse.searchPost} />
        </div>
        <div className="social-Container">
          <div className="social">
            <i className="fa fa-compass" />
          </div>
          <div className="social">
            <i className="fa fa-heart" />
          </div>
          <div className="social">
            <i className="fa fa-user-circle" />
          </div>
        </div>
      </div>
    );
  };
  
  export default search;