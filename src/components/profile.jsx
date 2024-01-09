import logo from "./../images/profilePhoto.png";
import more from "./../images/moreIcon.svg";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-banner">
        <img src="" alt="photo couverture" />
      </div>
      <div className="profile-photo-actions">
        <div className="profile-photo">
          <img src={logo} alt="photo profil" />
        </div>
        <div className="profile-actions">
          <div>
            <img src={more} alt="photo more" />
          </div>
          <div>
            <button className="button">Follow</button>
          </div>
        </div>
      </div>
      <div className="profile-infos">
        <div className="usernames">
          <h1>Profil</h1>
          <p>@monprofil</p>
        </div>
        <div className="profile-bio">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Molestiae distinctio cumque quasi officia doloribus 
           enim magnam nulla dolores quam nisi?
          </p>
          <div className="additional-infos">
            <div>
              <img src="" alt="" />
              <span>Profil.com</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>Joined Twitter since 2012</span>
            </div>
          </div>
          <div className="followers">
            <p>
              <span>86</span> following
            </p>
            <p>
              <span>1M</span> followers
            </p>
          </div>
          <div className="profile-nav">
            <ul>
              <li>Tweets</li>
              <li>Answers</li>
              <li>Highlighted Tweets</li>
              <li>Medias</li>
              <li>Likes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
