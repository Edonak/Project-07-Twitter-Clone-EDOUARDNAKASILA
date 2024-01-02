import React from 'react';
import CommentIcon from './../images/commentIcon.svg';
import RetweetIcon from './../images/retweetIcon .svg';
import LikeIcon from './../images/like.svg';
import ShareIcon from './../images/shareIcon.svg';

export default function TweetActions({comment, retweet, like}) {
  return (
    <div className="tweet-actions">
    <span className="tweet-action" title="Comments">
        <img src={CommentIcon} alt="" />
        {comment}
    </span>
    <span className="tweet-action" title="Retweets">
        <img src={RetweetIcon} alt="" />
        {retweet}
    </span>
    <span className="tweet-action" title="Likes">
        <img src={LikeIcon} alt="" />
        {like}
    </span>
    <span className="tweet-action" title="Share">
        <img src={ShareIcon} alt="" />
    </span>
</div>
  )
}
