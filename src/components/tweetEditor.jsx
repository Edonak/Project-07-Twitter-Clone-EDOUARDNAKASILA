import Images from "./../images/profile-photo.svg"
import TweetEdiorActions from "./tweetEditorActions"
import Image from "./image"
import Button from "./button"
import TweetEditorInput from "./tweetEditorInput"

export default function Editor() {
  return (
    <>
      <div className="tweet-editor">
        <Image className="avatar" src={Images} alt="profile-image" />
        <div className="tweet-editor-form">
          <TweetEditorInput
            type="text"
            placeholder="What's happening?"
            className="tweet-editor-input"
          />
          <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
              <TweetEdiorActions />
            </div>
            <Button className="button" name="Tweet" />
          </div>
        </div>
      </div>
    </>
  )
}
