import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoComponents/VideoFooter";
import VideoSidebar from "./VideoComponents/VideoSidebar";

function Video({
  tiktok,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video_player"
        onClick={onVideoPress}
        ref={videoRef}
        loop
        src={tiktok}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
