import ProfilCnn from './../images/profileCnn.png';
import image from './../images/tweetImage.png';
import ProfilNewYork from './../images/logoNewYorkTime.svg';
import TwitterLogo from './../images/twitterLogoBleu.svg';
import ImageVerified from './../images/Verified.svg';

export const datasTweets = [
    {
        id : 1 ,
        avatar : ProfilCnn,
        author : "CNN",
        certificate : ImageVerified,
        username : "CNN",
        date : "2m",
        content : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a \"major breakthrough\" that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        image : null,
        likesNumber : 100,
        commentsNumber: 58,
        retweetsNumber: 20,
    },
    {
        id : 2 ,
        avatar : ProfilNewYork,
        author : "The New York Times",
        certificate : ImageVerified,
        username : "nytimes",
        date : "2h",
        content : "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        image : image,
        likesNumber : 5326,
        commentsNumber: 807,
        retweetsNumber: 1023,
    },
    {
        id : 3 ,
        avatar : TwitterLogo,
        author : "Twitter",
        certificate : ImageVerified,
        username : "Twitter",
        date : "Oct 29",
        content : "BIG NEWS lol jk still Twitter",
        image : null,
        likesNumber : 68,
        commentsNumber: 9,
        retweetsNumber: 6,
    },
    {
        id : 4 ,
        avatar : TwitterLogo,
        author : "Twitter",
        certificate : ImageVerified,
        username : "Twitter",
        date : "Oct 4",
        content : "hello literally everyone",
        image : null,
        likesNumber : 654,
        commentsNumber: 78,
        retweetsNumber: 63,
    },
    {
        id : 5 ,
        avatar : TwitterLogo,
        author : "Twitter",
        certificate : ImageVerified,
        username : "Twitter",
        date : "Oct 4",
        content : "hello literally everyone",
        image : image,
        likesNumber : 102251,
        commentsNumber: 562,
        retweetsNumber: 845,
    }
]