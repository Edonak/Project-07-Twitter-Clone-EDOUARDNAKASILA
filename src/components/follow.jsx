import React from 'react';
import { userFollows } from '../datas/dataFollows';

export default function Follow({id, avatar, usarname, certificate, user}) {
  return (
    <div className='follow'>
        <h3 className='follow-title'>Who to follow</h3>
        <div key={id} className="follow-container">
            <img src={avatar} alt="avatar image" />
            <div className='follow-user'>
                <div className="follow-user-t">
                <h5 className='follow-use'>{usarname}</h5>
                <img src={certificate} alt="image certificate" />
                </div>
                <p className='follow-usarname'>{user}</p>
            </div>
        </div>
        <button className='button'>Follow</button>
    </div>
  )
}
