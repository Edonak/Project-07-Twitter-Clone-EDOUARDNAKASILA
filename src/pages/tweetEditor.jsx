import React from "react";
import Image from "./../images/profile-photo.png";
import ImagesText from "./../images/Poll.png";
import ImageGif from "./../images/Gif.png"; 
import ImageMedia from "./../images/Media.png"; 
import ImageEmoji from "./../images/Emoji.png"; 
import ImageSchedule from "./../images/Schedule.png";


function TextTweet (){
  return (
    <input type="text" 
    className="tweet-editor-input"
    placeholder="What’s happening?"/>
  )
}
function TweetEdit() {
    return(
        <div className="tweet-editor">
        <div className="avatar">
          <img src={Image} alt="image" srcset="" />
        </div>
        <div className="tweet-editor-form">
          <TextTweet />
          <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
            <img src={ImageMedia} alt="" srcset="" />
            <img src={ImageGif} alt="" srcset="" />
            <img src={ImagesText} alt="" srcset="" />
            <img src={ImageEmoji} alt="" srcset="" />
            <img src={ImageSchedule} alt="" srcset="" />
            </div>
            <button type="button" className="button">
              Tweet
            </button>
          </div>
        </div>
      </div>
    )
    
}
export default TweetEdit;