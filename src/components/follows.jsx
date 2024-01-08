import React from "react";
import { userFollows } from "../datas/dataFollows";
import Follow from "./follow";

export default function Follows() {
  const followData = userFollows.map((follow, index) => {
    return (
      <Follow
        key={index}
        id={follow.id}
        avatar={follow.avatar}
        username={follow.username}
        certificate={follow.certificate}
        user={follow.user}
      />
    );
  });

  return <div className="tweets">{followData}</div>;
}
