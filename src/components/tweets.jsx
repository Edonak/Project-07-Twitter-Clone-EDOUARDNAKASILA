import React from "react";
import TweetActions from "./tweetActions";
import { Link } from "react-router-dom";

export default function Tweets({
  id,
  avatar,
  author,
  certificate,
  username,
  date,
  content,
  image,
  like,
  comment,
  retweet,
}) {
  return (
    <div className='tweet flex' key={id}>
      <div className="tweet-avatar">
        <Link to={`/${author}`}>
          <img src={avatar} alt="" />
        </Link>
      </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <span className="tweet-title-author">{author}</span>
            <img
              src={certificate}
              alt="image certificate"
              className="tweet-certificate"
            />
            <span className="tweet-title-details">@{username}</span>
            <span className="tweet-title-details">.</span>
            <span className="tweet-title-details">{date}</span>
          </div>
          <div className="tweet-text">{content}</div>
          {image ? (
            <div className="tweet-image">
              <img src={image} alt="" />
            </div>
          ) : null}
        </div>
        <TweetActions like={like} comment={comment} retweet={retweet} />
      </div>
    </div>
  );
}
