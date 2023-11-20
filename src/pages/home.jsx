import React from "react";

function Home() {
  return (
    <main className="timeline">
      <div className="header">
        <h1 className="page-title">Home</h1>
        <p className="top-tweets">Icon</p>
      </div>
      <div className="tweet-editor">
        <div className="avatar">
          <img src="" alt="image" srcset="" />
        </div>
        <div className="tweet-editor-form">
          <div className="tweet-editor-input">
            <p>What’s happening?</p>
          </div>
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

      <div className="tweets">
        <div className="tweet">
          <img src="" alt="img" srcset="" />
          <p>Laala</p>
          <p>
            CNN @CNN . 7m President Joe Biden touted a new agreement reached
            with the European Union to ease Trump-era tariffs on aluminum and
            steel as a "major breakthrough" that would serve to both strengthen
            the US steel industry and combat the global climate crisis.
          </p>
        </div>
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
            <img src="../images/tweet-image.png" alt="" srcset="" />
          </div>
          <div className="tweet-actions"></div>
        </div>
      </div>
    </main>
  );
}

export default Home;
