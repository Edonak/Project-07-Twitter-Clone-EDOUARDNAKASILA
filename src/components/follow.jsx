import React from "react";
import { userFollows } from './../datas/data';
import Follows from "./follows";

export default function Follow() {
  const followData = userFollows.map((follow, index) => {
    return (
      <Follows
        key={index}
        id={follow.id}
        avatar={follow.avatar}
        author={follow.author}
        certificate={follow.certificate}
        username={follow.username}
      />
    );
  });

  return <div className="tweets">{followData}</div>;
}
