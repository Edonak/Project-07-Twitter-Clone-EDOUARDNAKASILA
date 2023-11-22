import React from "react";
import TopImage from "./../images/Top-Tweetslogo.png"

function Navbar() {
  return (
    <>
      <div className="header">
        <h1 className="page-title">Home</h1>
        <div className="top-tweets">
          <img src={TopImage} alt="" srcset="" />
        </div>
      </div>
      
    </>
  );
}
export default Navbar;
