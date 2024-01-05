import React from 'react';
import Navbar from '../components/navbar';
import Trends from '../components/trends';

export default function Profil() {
  return (
    <>
    <div className='sidebar'>
        <Navbar />
    </div>
    <div className="timeline">

    </div>
    <div className="trends">
        <Trends />
    </div>
    </>
  )
}
