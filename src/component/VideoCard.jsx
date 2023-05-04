import React from "react";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../utils/constant";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <main className="shadow cursor-pointer">
      <Link to={videoId ? `/video/${videoId}` : "/video/cV2gBU6hKfY"}>
        <img
          src={snippet?.thumbnails?.high.url || demoThumbnailUrl}
          alt="thumbnail"
          className="w-[100%] md:w-72 md:h-[180px]"
        />
      </Link>

      <div className="card-content bg-[#1E1E1E]">
        <div className="flex flex-col gap-2">
          <h4 className="text-gray-300">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}...
          </h4>
          <div className="text-sm font-bold">
            {snippet?.channelTitle || demoChannelTitle}
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideoCard;
