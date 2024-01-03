import React from "react";
import ProfilPhoto from "./../images/profilePhoto.svg";
import IconMore from "./../images/moreIcon.svg";
import PrivateIcon from "./../images/privateIcon.svg";

export default function NavbarProfil() {
  return (
    <div className="user">
      <div className="profile-user">
        <img src={ProfilPhoto} alt="" />
      </div>
      <div className="user-id">
        <div className="user-id-author">
          <h3>Edouardo Nak</h3>
          <img src={PrivateIcon} alt="" />
        </div>
        <p className="user-id-details">@ednak</p>
      </div>
      <div className="user-more-info">
        <img src={IconMore} alt="" />
      </div>
    </div>
  );
}
