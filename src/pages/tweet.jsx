import React, { Component } from "react";
import Image from "./../images/tweet-profile-photo.png";
import ImageAvatar from "./../images/tweet-image.png";
import LogoTweet from "./../images/Tweet Photo.png";
import LogoAvatar from "./../images/Tweet-Profile-Photo (1).png";
import ImageVerified from "./../images/Verified.png";
import ImagesTweet from "./../images/Frame 8.png";
import ImageTweetAction from "./../images/Frame big new.png";
import data from "../components/data.json";

function Verfied() {
  <img src={ImageVerified} alt="" srcset="" />
}

function LogoTweeter() {
  return <img src={LogoTweet} alt="logo tweeter" srcset="" />;
}

function TweetAction() {
  return <img src={ImagesTweet} alt="" srcset="" />;
}

function TweetDetail({ value }) {
  return <span className="tweet-title-details">{value}</span>;
}
function Tweet() {
  return (
    <div className="tweets">
      <div className="tweet">
        <div className="avatar">
        <img src={Image} alt="img" srcset="" />
        </div>
        <div className="tweet-content">
          <div className="tweet-body">
            <p className="tweet-title">
              CNN <Verfied /> <TweetDetail value="@CNN . 7m" />
            </p>
            <p className="tweet-text">
              President Joe Biden touted a new agreement reached with the
              European Union to ease Trump-era tariffs on aluminum and steel as
              a "major breakthrough" that would serve to both strengthen the US
              steel industry and combat the global climate crisis.
            </p>
            <div className="tweet-action">
              <div className="tweet-actions">
                <TweetAction />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tweet">
        <div className="tweet-avatar">
          <img src={LogoAvatar} alt="" srcset="" />
        </div>
        <div className="tweet-content">
          <div className="tweet-body">
            <p className="tweet-title">The New York Times <Verfied />
            {data?.pictures?.map((item, index)=>(
              <div key={index}>
                 <img src={item.src} alt="img validate"/>
              </div>
               ))}
             <TweetDetail value="@nytimes . 2h" /></p>
            <p className="tweet-text">
              Gardening boomed during the pandemic. Six Black writers share how
              it has helped them re-establish, and reimagine, a connection to
              cultivation and the land
            </p>
            <div className="tweet-image">
              <img src={ImageAvatar} alt="image" srcset="" />
            </div>
          </div>
          <div className="tweet-actions">
            <TweetAction />
          </div>
        </div>
      </div>
      <div className="tweet">
        <LogoTweeter />

        <div className="tweet-content">
          <p className="tweet-title-detail">Twitter <TweetDetail value="@Twitter . Oct 29"/> </p>
          <p className="tweet-text">BIG NEWS lol jk still Twitter.</p>
          <div className="tweet-action">
            <div className="tweet-actions">
            <img src={ImageTweetAction} alt="img" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className="tweet">
        <LogoTweeter />
        <div className="tweet-content">
          <p className="tweet-title-detail">Twitter <TweetDetail value="@Twitter . Oct 4" /></p>
          <p className="tweet-text">hello literally everyone</p>
          <div className="tweet-action">
            <div className="tweet-actions">
              <TweetAction />
            </div>
          </div>
        </div>
      </div>
      <div className="tweet">
        <LogoTweeter />
        <div className="tweet-content">
          <p className="tweet-title-detail">Twitter <TweetDetail value="@Twitter . Oct 4" /> </p>
          <p className="tweet-text">hello literally everyone</p>
          <div className="tweet-action">
            <div className="tweet-actions">
              <TweetAction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tweet;
