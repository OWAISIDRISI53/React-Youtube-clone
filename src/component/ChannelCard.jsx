import React from "react";
import { demoProfilePicture } from "../utils/constant";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div className={`h-full w-full grid place-items-center ${marginTop} `}>
      <Link
        to={`/channel/${channelDetail?.id?.channelId}`}
        className="channel bg-red-700 h-40 w-40 rounded-full"
      >
        <img
          src={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt="channel"
          className="h-full w-full rounded-full"
        />
      </Link>
    </div>
  );
};

export default ChannelCard;
