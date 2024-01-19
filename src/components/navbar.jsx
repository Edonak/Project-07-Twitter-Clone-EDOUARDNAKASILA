import LogoTweeter from "./../images/twitterIcon.svg";
import Bookmark from "./../images/Bookmarks.svg";
import Explore from "./../images/Explore.svg";
import Home from "./../images/homeIcone.svg";
import Lists from "./../images/Lists.svg";
import Messages from "./../images/messagesIcon.svg";
import More from "./../images/moreIconCircle.svg";
import Notifications from "./../images/notificationIcone.svg";
import Profile from "./../images/profileIcon.svg";
import { Link } from "react-router-dom";
import NavbarProfil from "./navbarProfil";

export default function Navbar() {
  return (
    <>
      <div className="navigation">
        <img src={LogoTweeter} alt="" />
      </div>
      <ul className="navigation-list">
        <Link to="/" className="navigation-link">
          {" "}
          <li className="navigation">
            <img src={Home} alt="" />
            Home
          </li>
        </Link>
        <li className="navigation">
          <img src={Explore} alt="" />
          <span>Explore</span>
        </li>
        <li className="navigation">
          <img src={Notifications} alt="" />
          <span>Notifications</span>
        </li>
        <li className="navigation">
          <img src={Messages} alt="" />
          <span>Messages</span>
        </li>
        <li className="navigation">
          <img src={Bookmark} alt="" />
          <span>Bookmarks</span>
        </li>
        <li className="navigation">
          <img src={Lists} alt="" />
          <span>Lists</span>
        </li>
        <Link to="/profil"  className="navigation-link">
          <li className="navigation">
            <img src={Profile} alt="" />
            <span>Profile</span>
          </li>
        </Link>
        <li className="navigation">
          <img src={More} alt="" />
          <span>Plus</span>
        </li>
        <button className="button">Tweet</button>
      </ul>
      <Link to="/profil"  className="navigation-link">
        <NavbarProfil />
      </Link>
    </>
  );
}
