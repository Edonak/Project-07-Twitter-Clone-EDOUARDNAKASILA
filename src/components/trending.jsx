import React from 'react';
import MoreIcon from './../images/moreIcon.svg';

export default function Trending() {
  return (
    <div className='trending'>
        <div className="trending-container">
        <p className="trending-text">
            Trending in Turkey
        </p>
        <img src={MoreIcon} alt="show more image" />
        </div>
        <h5 className='squid'>#SQUID</h5>
        
        <p className="trending-text">2.066 Tweets</p>
    </div>
  )
}
