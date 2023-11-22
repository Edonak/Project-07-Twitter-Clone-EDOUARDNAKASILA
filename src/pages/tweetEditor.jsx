import React from "react";
import Image from "./../images/profile-photo.png";

function TweetEdit() {
    return(
        <div className="tweet-editor">
        <div className="avatar">
          <img src={Image} alt="image" srcset="" />
        </div>
        <div className="tweet-editor-form">
          <p className="tweet-editor-input">What’s happening?</p>
          <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
              <p>Icon1</p>
              <p>Icon1</p>
              <p>Icon1</p>
              <p>Icon1</p>
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