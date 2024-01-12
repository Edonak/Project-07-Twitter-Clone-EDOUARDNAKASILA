import React, { createContext, useState } from 'react';

const valueLike = createContext();

export function valueLikeProvider({ children }) {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <valueLike.Provider value={{ likes, incrementLikes }}>
      {children}
    </valueLike.Provider>
  );
}

export default valueLike;