
import React from 'react';
import SearchIcon from './../images/searchIcon.svg';

export default function SidebarRight() {
  const usersToFollow = [
    {
      name: "Utilisateur1",
      username: "@utilisateur1",
    },
    {
      name: "Utilisateur2",
      username: "@utilisateur2",
    },
    {
      name: "Utilisateur3",
      username: "@utilisateur3",
    },
  ];
  const trends = ["#SQUID", "#SQUID", "#SQUID", "#SQUID"];

  return (
    <div className="sidebar-right">
     <div className="search-container">
        <img src={SearchIcon} alt="search icon" />
        <input
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <div className="trends">
        <div className="Trends-for-you">
          <h3>Trends for you</h3>
          <Image src={logoSetting} className="setting" />
        </div>

        <ul>
          {trends.map((trend) => (
            <>
              <div className="Trending">
                <p className="tweet-title-details">Trending in Turkey</p>
                <p className="more">...</p>
              </div>
              <li key={trend}>{trend}</li>
              <span className="tweet-title-details">2,066 Tweets</span>
            </>
          ))}
        </ul>
        <a href="" className="show-more">
          Show more
        </a>
      </div>
      <div className="who-to-follow">
        <h3>Who to follow</h3>
        <ul>
          {tweets.slice(0, 3).map((tweet, index) => (
            <>
              <li key={index}>
                {index === 0 ? (
                  <>
                    <Image src={tweets[1].profileUser} />
                    <div>
                      <div className="who-to-follow-name">
                        <span>
                          {tweets[1].name} <Image src={Verified} />
                        </span>
                        <button>Follow</button>
                      </div>
                      <span className="username tweet-title-details">
                        {tweet.author}
                      </span>
                    </div>
                  </>
                ) : index === 1 ? (
                  <>
                    <Image src={tweets[0].profileUser} />
                    <div>
                      <div className="who-to-follow-name">
                        <span>
                          {tweets[0].name} <Image src={Verified} />{" "}
                        </span>

                        <button>Follow</button>
                      </div>
                      <span className="username tweet-title-details">
                        {tweet.author}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <Image src={tweet.profileUser} />
                    <div>
                      <div className="who-to-follow-name">
                        <span>
                          {tweet.name} <Image src={Verified} />
                        </span>
                        <button>Follow</button>
                      </div>
                      <span className="username tweet-title-details">
                        {tweet.author}
                      </span>
                    </div>
                  </>
                )}
              </li>
            </>
          ))}
        </ul>
        <a href="" className="show-more">
          Show more
        </a>
      </div>
    </div>
  );
}

