import { NavLink } from "react-router-dom";
import Button from "./button";
import Image from "./image";
import LogoHome from "./../images/Home-Fill.svg";
import LogoX from "./../images/Twitter.svg";
import LogoExplore from "./../images/Explore.svg";
import LogoNotifications from "./../images/Notifications.svg";
import LogoMore from "./../images/More.svg";
import LogoImage from "./../images/Profile.svg";
import LogoLists from "./../images/Lists.svg";
import LogoBookmarks from "./../images/Bookmarks.svg";
import LogoMessages from "./../images/Messages.svg";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <Image src={LogoX} className="logoX" />
          <li>
            <Image src={LogoHome} className="spaceLogoLinkName" />
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <Image src={LogoExplore} className="spaceLogoLinkName" />
            <NavLink to="">Explore</NavLink>
          </li>
          <li>
            <Image src={LogoNotifications} className="spaceLogoLinkName" />
            <NavLink to="">Notifications</NavLink>
          </li>
          <li>
            <Image src={LogoMessages} className="spaceLogoLinkName" />
            <NavLink to="">Messages</NavLink>
          </li>
          <li>
            <Image src={LogoBookmarks} className="spaceLogoLinkName" />
            <NavLink to="">Bookmarks</NavLink>
          </li>
          <li>
            <Image src={LogoLists} className="spaceLogoLinkName" />
            <NavLink to="">Lists</NavLink>
          </li>
          <li>
            <Image src={LogoImage} className="spaceLogoLinkName" />
            <NavLink to="">Image</NavLink>
          </li>
          <li>
            <Image src={LogoMore} className="spaceLogoLinkName" />
            <NavLink to="">More</NavLink>
          </li>
        </ul>
        <Button name="Tweet" className="button_sidebar" />
      </div>
    </>
  );
}
