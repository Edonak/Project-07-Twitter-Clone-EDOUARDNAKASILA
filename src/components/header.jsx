import React from 'react';
import TopTweetIcon from './../images/tweetTopIcon.svg';

export default function Header() {
  return (
    <div className='header'>
        <h2 className='page-title'> Home </h2>
        <img src={TopTweetIcon} alt="Top twitter" className="top-tweets" />
    </div>
  )
}
