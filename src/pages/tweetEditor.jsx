import React from "react";
import Image from "./../images/profile-photo.png";
import ImagesTweet from "./../images/Metameta.png"

function TextTweet ({placeholder}){
  return <p className="tweet-editor-input" >{placeholder}</p>
}
function TweetEdit() {
    return(
        <div className="tweet-editor">
        <div className="avatar">
          <img src={Image} alt="image" srcset="" />
        </div>
        <div className="tweet-editor-form">
          <TextTweet placeholder="What’s happening?"/>
          <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
            <img src={ImagesTweet} alt="" srcset="" />
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