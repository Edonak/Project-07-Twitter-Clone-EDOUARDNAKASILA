import React from 'react';
import Image from './../images/mediaImage.svg'
import GifIcon from './../images/mediaGif.svg';
import Poll from './../images/commentMediaIcon.svg'
import EmogiIcon from './../images/mediaEmogi.svg';
import Schedule from './../images/media-d.svg';


export default function TweetEditorForm() {
  return (
    <form action="" className="tweet-editor-form">
            <input type="text" className="tweet-editor-input" placeholder="What's happening?" />
            <div className="tweet-editor-buttons">
                <div className="tweet-editor-actions">
                    <img src={Image} alt="image media" />
                    <img src={GifIcon} alt=" gif media" />
                    <img src={Poll} alt=" poll media" />
                    <img src={EmogiIcon} alt="emogi media" />
                    <img src={Schedule} alt=" Schedule media" />
                </div>
                <button className="button">Tweet</button>
            </div>
        </form>
  )
}
