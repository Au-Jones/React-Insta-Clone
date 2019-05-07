import React from 'react'
// import IGLogo from '../assets/' ;
import './searchbar.css';
const search = () => {
    return (
        <div className="search-bar">
        {/* <div className="image">
          <img alt="instagram logo" src={IGLogo} className="logo-image" />
        </div> */}
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