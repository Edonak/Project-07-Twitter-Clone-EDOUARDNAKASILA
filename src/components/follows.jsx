import React from "react";
import NewYorkLogo from "./../images/logoNewYorkTime.svg";
import CertificateLogo from "./../images/Verified.svg";
import CnnLogo from "./../images/CnnLogo.svg";
import TwitterLogos from "./../images/twitterLogoBleu.svg";

export default function Follows() {
  const userFollows = [
    {
      id: 1,
      avatar: NewYorkLogo,
      author: "The New York Times",
      certificate: CertificateLogo,
      username: "@nytimes",
    },
    {
      id: 2,
      avatar: CnnLogo,
      author: "CNN",
      certificate: CertificateLogo,
      username: "@cnn",
    },
    {
      id: 3,
      avatar: TwitterLogos,
      author: "Twitter",
      certificate: CertificateLogo,
      username: "@twitter",
    },
  ];
  return (
    <div className="follow">
      <h2 className="follow-title">Who to follow</h2>
      {userFollows.map((user) => (
        <div key={user.id} className="follow-container">
          <div className="follow-avatar">
            <img src={user.avatar} alt={user.author} />
          </div>
          <div>
         <div className="author-container">
         <span className="tweet-title-author">{user.author}</span>
          <img
            src={user.certificate}
            alt="image certificate"
            className="tweet-certificate"
          />
         </div>
          <span className="tweet-title-details">{user.username}</span>
          </div>
          
          <button className="button">Follow</button>
        </div>
      ))}

      <a href="" className="show-more">
        Show more
      </a>
    </div>
  );
}
