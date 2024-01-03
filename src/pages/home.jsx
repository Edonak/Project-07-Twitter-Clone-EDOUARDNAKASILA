
import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/tweetEditor';
import Tweet from '../components/tweet';
import Navbar from '../components/navbar';

function Home() {
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
    <div className="trend">
    
    </div>
    </>
  );
}

export default Home;
