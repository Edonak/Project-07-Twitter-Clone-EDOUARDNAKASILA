import React from "react"
import Image from "./image"
import TweetActions from "./tweetActions"
import Verified from "./../images/Verified.svg"
import tweetsData from "../tweet-data"

export default function Tweets() {
  return (
    <>
      <div className="tweets">
        {tweetsData.map((tweet, index) => {
          return (
            <div className="tweet" key={index}>
              <Image
                className="tweet-avatar"
                src={tweet.profileUser}
                alt="profile-image"
              />
              <div className="tweet-content">
                <div className="tweet-body">
                  <span className="tweet-title">
                    <span className="tweet-title-author">{tweet.name}</span>
                    <span>
                    <Image src={Verified} />
                    </span>
                    <span className="tweet-title-details">{tweet.author}</span>
                    <span className="tweet-title-details">{" . "}</span>
                    <span className="tweet-title-details">
                      {tweet.dateOrTime}
                    </span>
                  </span>

                  <p className="tweet-text">{tweet.content}</p>
                  <div className="tweet-image">
                    {tweet.Img && <Image src={tweet.Img} />}
                  </div>
                </div>
                <TweetActions
                  userComment={tweet.comments}
                  userRetweet={tweet.retweets}
                  userLove={tweet.likes}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
