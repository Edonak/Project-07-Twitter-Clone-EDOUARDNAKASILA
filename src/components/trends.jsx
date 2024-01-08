
import React from 'react';
import SearchIcon from './../images/searchIcon.svg';
import SettingLogo from './../images/option.svg';
import Trending from './trending';
import Follow from './follow';

export default function Trends() {
 
  return (
    <>
     <div className="search-container">
        <img src={SearchIcon} alt="search icon" />
        <input
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <div className="trends-container">
        <div className="Trends-for-you">
          <h3>Trends for you</h3>
          <img src={SettingLogo} className="setting" />
        </div>
        <Trending />
        <Trending />
        <Trending />
        <Trending />
        <a href="" className="show-more">
          Show more
        </a>
      </div>
     <Follow />
    </>
  );
}

