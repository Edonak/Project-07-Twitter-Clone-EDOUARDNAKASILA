
import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/tweetEditor';
import Tweet from '../components/tweet';
import Navbar from '../components/navbar';
import Trends from '../components/trends';

export default function Home() {
  return (
    <>

    <header className='sidebar'>
     <Navbar />
    </header>
    <main className="timeline">
    <Header />
    <TweetEditor />
    <Tweet />
    </main>
    <div className="trends">
    <Trends />
    </div>
    </>
  );
}
