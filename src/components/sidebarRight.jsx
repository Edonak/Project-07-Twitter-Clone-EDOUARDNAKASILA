import logoSetting from "./../images/Options.svg";
import Image from "./image";


export default function SidebarRight() {
 
  const trends = ["#SQUID", "#SQUID", "#SQUID", "#SQUID"];

  return (
    <div className="sidebar-right">
      <div>
        <input
          type="text"
          placeholder="Search Twitter"
          className="search-twitter search-icon"
        />
      </div>
      <div className="trends">
        <div className="Trends-for-you">
          <h3>Trends for you</h3>
          <Image src={logoSetting} className="setting" />
        </div>

        <ul>
          {trends.map((trend) => (
            <>
              <div className="Trending">
                <p className="tweet-title-details">Trending in Turkey</p>
                <p className="more">...</p>
              </div>
              <li key={trend}>{trend}</li>
              <span className="tweet-title-details">2,066 Tweets</span>
            </>
          ))}
        </ul>
        <a href="">Show more</a>
      </div>
     
    </div>
  );
}
