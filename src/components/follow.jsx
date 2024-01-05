import React from 'react';
import NewYorkLogo from './../images/logoNewYorkTime.svg';
import CertificateLogo from './../images/Verified.svg';
import CnnLogo from './../images/CnnLogo.svg';
import TwitterLogo from './../images/twitterLogoBleu.svg';

export default function Follow() {
    const userFollows = [
        {
            avatar : NewYorkLogo,
            username : "The New York Times",
            certificate : CertificateLogo,
            user : '@nytimes',
          },
        {
            avatar : CnnLogo,
            username : "CNN",
            certificate : CertificateLogo,
            user : '@cnn',
          },
        {
            avatar : TwitterLogo,
            username : "Twitter",
            certificate : CertificateLogo,
            user : '@twitter',
          }
    ]
  return (
    <div className='follow'>
        <h3 className='follow-title'>Who to follow</h3>
        {userFollows.map((follow)=>(
        <div key={follow} className="follow-contenair">
            {follow}
            <img src={avatar} alt="avatar image" />
            <div className='follow-user'>
                <div className="follow-user-t">
                <h5 className='follow-use'>{usarname}</h5>
                <img src={certificate} alt="image certificate" />
                </div>
                <p className='follow-usarname'>{user}</p>
            </div>
        </div>
        ))}
        <button className='button'>Follow</button>
    </div>
  )
}
