import Media from "./../images/Media.svg"
import Poll from "./../images/Poll.svg"
import Schedule from "./../images/Schedule.svg"
import Gif from "./../images/gif.svg"
import Emoji from "./../images/Group.svg"
import Image from "./image"

export default function TweetEdiorActions() {
  return (
    <>
      <Image src={Media} />
      <Image src={Gif} />
      <Image src={Poll} />
      <Image src={Emoji} />
      <Image src={Schedule} />
    </>
  )
}
