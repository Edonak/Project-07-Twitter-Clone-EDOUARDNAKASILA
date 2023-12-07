import Image from "./image"
import Img from "./../images/topTweet.png"

export default function Header() {
  return (
    <header className="header">
      <h1 className="page-title">Home</h1>

      <Image className="top-tweets" src={Img} />
    </header>
  );
}
