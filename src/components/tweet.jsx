import React from "react";
import { datasTweets } from './../datas/data';
import Tweets from "./tweets";

export default function Tweet() {
  const tweetData = datasTweets.map((tweet, index) => {
    return (
      <Tweets
        key={index}
        id={tweet.id}
        avatar={tweet.avatar}
        author={tweet.author}
        certificate={tweet.certificate}
        username={tweet.username}
        date={tweet.date}
        content={tweet.content}
        image={tweet.image}
        like={tweet.likesNumber}
        comment={tweet.commentsNumber}
        retweet={tweet.retweetsNumber}
      />
    );
  });


  const Tweet = () => {
    const { author } = useParams();

    const tweet = datasTweets.find(tweet => tweet.author === author);

    return (
        <div>
        </div>
    );
};

  return <div className="tweets">{tweetData}</div>;
}
