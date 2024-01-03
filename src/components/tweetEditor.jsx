import React from 'react';
import ProfilAvatar from './../images/profilePhoto.png';
import TweetEditorForm from './tweetEditorForm';

export default function TweetEditor() {
  return (
    <div className='tweet-editor'>
      <div className='avatar'>
      <img src={ProfilAvatar} alt="profil image" />
      </div>
        <TweetEditorForm />
    </div>
  )
}
