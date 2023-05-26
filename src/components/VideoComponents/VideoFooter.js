import React from "react";
import "./VideoFooter.css";
import { BsMusicNote } from "react-icons/bs";
import Marquee from "react-fast-marquee";
function VideoFooter({ channel, description, song }) {
  return (
    <div className="videofooter">
      <div className="videofooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videofooter__marquee">
          <BsMusicNote className="videofooter__icon" />
          <Marquee className="marquee">{song}</Marquee>
        </div>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        className="videofooter__record"
      />
    </div>
  );
}

export default VideoFooter;
