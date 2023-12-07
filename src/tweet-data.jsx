import Image from "../src/images/tweet-image1.png";
import Cnn from "./../src/images/tweet-profile-photo.svg";
import logoX from "./../src/images/logo-rond-twitter.svg";
import logoNewYorkTime from "./../src/images/logoNewYorkTime.svg";
const tweetsData = [
  {
    name: "CNN",
    content:
      "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
    comments: 57,
    retweets: 144,
    likes: 184,
    dateOrTime: "7m",
    author: "@CNN",
    profileUser: Cnn,
  },
  {
    name: "The New York Times",
    content:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    Img: Image,
    comments: 19,
    retweets: 48,
    likes: 482,
    dateOrTime: "2h",
    author: "@nytimes",
    profileUser: logoNewYorkTime,
  },
  {
    name: "Twitter",
    content: "BIG NEWS lol jk still Twitter",
    comments: "6.8K",
    retweets: "36.6K",
    likes: "267.1K",
    dateOrTime: "Oct 20",
    author: "@Twitter",
    profileUser: logoX,
  },
  {
    name: "Twitter",
    content: "hello literally everyone",
    comments: "118.7K",
    retweets: "785.4K",
    likes: "3.3M",
    dateOrTime: "Oct 4",
    author: "@Twitter",
    profileUser: logoX,
  },
  {
    name: "Twitter",
    content: "hello literally everyone",
    Img: Image,
    comments: "18.7K",
    retweets: "785.4K",
    likes: "3.3M",
    dateOrTime: "Oct 4",
    author: "@twitter",
    profileUser: logoX,
  },
];
export default tweetsData;
