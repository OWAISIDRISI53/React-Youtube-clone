import React from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 px-3">
      {videos.map((item, idx) => (
        <div key={idx} className="text-white">
          {item.id.videoId && <VideoCard video={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
