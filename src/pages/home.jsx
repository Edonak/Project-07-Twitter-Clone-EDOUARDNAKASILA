import React from "react";
import Header from "../components/header";
import Editor from "../components/tweetEditor";
import Tweets from "../components/tweets";
import Sidebar from "../components/sidebarLeft";

import SidebarRight from "./../components/sidebarRight";

function Home() {
  return (
    <>
      <Sidebar />

      <main className="timeline">
        <Header />
        <Editor />
        <Tweets />
      </main>
      <SidebarRight />
    </>
  );
}

export default Home;
