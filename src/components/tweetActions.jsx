import React, {useState} from 'react';
import CommentIcon from './../images/commentIcon.svg';
import RetweetIcon from './../images/retweetIcon .svg';
import LikeIcon from './../images/like.svg';
import ShareIcon from './../images/shareIcon.svg';

export default function TweetActions({comment, retweet, like}) {

    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
  
    const handleClick1 = () => {
      setColor1("green");
    };
  
    const handleClick2 = () => {
      setColor2("blue");
    };
  
    const handleClick3 = () => {
      setColor3("red");
    };
  

  return (
    <div className="tweet-actions">
    <div className="tweet-action" title="Comments" onClick={handleClick1} style={{color: color1 }}>
        <img src={CommentIcon} alt="" style={{color: color1 }}/>
        {comment}
    </div>
    <div className="tweet-action" title="Retweets"  onClick={handleClick2} style={{ color: color2 }}>
        <img src={RetweetIcon} alt="" />
        {retweet}
    </div>
    <div className="tweet-action" title="Likes"  onClick={handleClick3} style={{ color: color3 }}>
        <img src={LikeIcon} alt="" />
        {like}
    </div>
    <div className="tweet-action" title="Share">
        <img src={ShareIcon} alt="" />
    </div>
</div>
  )
}
