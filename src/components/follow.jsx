import React from 'react';

export default function Follow({id, avatar, username, certificate, user}) {
  return (
    <div className='follow'>
        <h3 className='follow-title'>Who to follow</h3>
        <div key={id} className="follow-container">
            <img src={avatar} alt="avatar image" />
            <div className='follow-user'>
                <div className="follow-user-t">
                <h5 className='follow-use'>{username}</h5>
                <img src={certificate} alt="image certificate" />
                </div>
                <p className='follow-usarname'>{user}</p>
            </div>
            <button className='button'>Follow</button>
        </div>
       
    </div>
  )
}
