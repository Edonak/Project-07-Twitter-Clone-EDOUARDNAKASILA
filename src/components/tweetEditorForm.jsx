import Image from "./../images/mediaImage.svg";
import GifIcon from "./../images/mediaGif.svg";
import Poll from "./../images/commentMediaIcon.svg";
import EmogiIcon from "./../images/mediaEmogi.svg";
import Schedule from "./../images/media-d.svg";
import React, { useState } from "react";

export default function TweetEditorForm() {
  const [tweetText, setTweetText] = useState("");

  const handleTweet = () => {
    
    // Ajoutez ici le code pour afficher le tweet sur la page d'accueil
    console.log(tweetText);
  };
  return (
    <form action="" className="tweet-editor-form">
      <input
        type="text"
        className="tweet-editor-input"
        placeholder="What's happening?"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      />
      <div className="tweet-editor-buttons">
        <div className="tweet-editor-actions">
          <img src={Image} alt="image media" />
          <img src={GifIcon} alt=" gif media" />
          <img src={Poll} alt=" poll media" />
          <img src={EmogiIcon} alt="emogi media" />
          <img src={Schedule} alt=" Schedule media" />
        </div>
        <button className="button" onClick={handleTweet}>
          Tweet
        </button>
      </div>
    </form>
  );
}
