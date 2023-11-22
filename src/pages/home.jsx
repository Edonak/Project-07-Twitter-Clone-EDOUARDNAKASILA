import React from "react";
import Navbar from "./header";
import TweetEdit from "./tweetEditor";
import Tweet from "./tweet";

function Home() {
  return (
    <main className="timeline">
      <Navbar />
      <TweetEdit />
      <Tweet />
    </main>
  );
}

export default Home;
