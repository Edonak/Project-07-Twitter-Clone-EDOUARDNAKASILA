import React from 'react';
import Navbar from '../components/navbar';
import Trends from '../components/trends';
import Profile from '../components/profile';

export default function Profil() {
  return (
    <>
    <div className='sidebar'>
        <Navbar />
    </div>
    <div className="timeline">
      <Profile />
    </div>
    <div className="trends">
        <Trends />
    </div>
    </>
  )
}
