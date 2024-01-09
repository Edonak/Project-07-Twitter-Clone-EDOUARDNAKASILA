import React from "react";
export default function Follows({ avatar, author, certificate, username, id }) {
  return (
    <div className="follow" key={id}>
      <h2 className="follow-title">Who to follow</h2>
      <div className="follow-container">
        <div className="follow-avatar">
          <img src={avatar} alt="" />
        </div>
        <span className="tweet-title-author">{author}</span>
        <img
          src={certificate}
          alt="image certificate"
          className="tweet-certificate"
        />
        <span className="tweet-title-details">{username}</span>
        <button className="button">Follow</button>
      </div>
      <a href="" className="show-more">
        Show more
      </a>
    </div>
  )}