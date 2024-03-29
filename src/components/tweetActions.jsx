import React, { useState, createContext, useContext } from "react";
import CommentIcon from "./../images/commentIcon.svg";
import RetweetIcon from "./../images/retweetIcon .svg";
import LikeIcon from "./../images/like.svg";
import ShareIcon from "./../images/shareIcon.svg";

export default function TweetActions({like, comment, retweet }) {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [likeCount, setLikeCount] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const handleHover1 = () => {
    setColor1("green");
  };

  const handleHover2 = () => {
    setColor2("blue");
  };

  const handleHover3 = () => {
    setColor3("red");
  };

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="tweet-actions">
      <div
        className="tweet-action"
        title="Comments"
        onMouseEnter={handleHover1}
        onMouseLeave={() => setColor1("")}
        style={{ color: color1 }}
      >
        <img
          src={CommentIcon}
          alt=""
          style={{ filter: `brightness(${color1 ? "150%" : "100%"})` }}
        />
        {comment}
      </div>
      <div
        className="tweet-action"
        title="Retweets"
        onMouseEnter={handleHover2}
        onMouseLeave={() => setColor2("")}
        style={{ color: color2 }}
      >
        <img src={RetweetIcon} alt="retweet image" style={{ color: color2 }} />
        {retweet}
      </div>
      
      <div 
        className="tweet-action"
        title="Likes"
        onMouseEnter={handleHover3}
        onMouseLeave={() => setColor3("")}
        style={{ color: color3 }}
        onClick={handleLikeClick}
      >
        <img src={LikeIcon} alt="like image" style={{ color: color3 }} />
        {like}
      </div>
      <div className="tweet-action" title="Share">
        <img src={ShareIcon} alt="share image" />
      </div>
    </div>
  );
}
