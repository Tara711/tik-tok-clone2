import React, { useState } from "react";
import "./VideoSider.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";

function VideoSidebar({ likes, messages, shares }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="videosidebar">
      <div className="videosidebar__button">
        {isLiked ? (
          <AiFillHeart
            onClick={() => setIsLiked(false)}
            color="white"
            size={25}
          />
        ) : (
          <AiOutlineHeart
            onClick={() => setIsLiked(true)}
            color="white"
            size={25}
          />
        )}

        <p>{isLiked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar__button">
        <AiFillMessage color="white" size={25} />
        <p>{messages}</p>
      </div>
      <div className="videosidebar__button">
        <AiOutlineShareAlt color="white" size={25} />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
