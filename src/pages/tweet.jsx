import React from "react";
import Image from "./../images/tweet-profile-photo.png";
import ImageAvatar from "./../images/tweet-image.png";

function Tweet() {
  return (
    <div className="tweets">
      <div className="tweet">
        <img src={Image} alt="img" srcset="" />
        <p>
          CNN @CNN . 7m President Joe Biden touted a new agreement reached with
          the European Union to ease Trump-era tariffs on aluminum and steel as
          a "major breakthrough" that would serve to both strengthen the US
          steel industry and combat the global climate crisis.
        </p>
      </div>

        <div className="tweet">
            <div className="tweet-avatar">
             <p>logo</p>
            </div>
            <div className="tweet-content">
          <div className="tweet-body">
            <p className="tweet-title">The New York Times @nytimes .2h</p>
            <p className="tweet-text">
              Gardening boomed during the pandemic. Six Black writers share how
              it has helped them re-establish, and reimagine, a connection to
              cultivation and the land
            </p>
            <div className="tweet-image"></div>
            <img src="../images/tweet-image.png" alt="image" srcset="" />
          </div>
          <div className="tweet-actions">
            <p className="tweet-action">icon</p>
            <p className="tweet-action">icon</p>
            <p className="tweet-action">icon</p>
            <p className="tweet-action">icon</p>
          </div>
        </div>
      </div>
      <div className="tweet">
            <p>Lorem, ipsum dolor.</p>
      </div>
      <div className="tweet">
            <p>Lorem, ipsum dolor.</p>
      </div>
      <div className="tweet">
            <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
}
export default Tweet;
