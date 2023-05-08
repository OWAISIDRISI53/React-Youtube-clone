import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ videos, LgCol }) => {
  if (!videos?.length) return <Loader />;
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${LgCol} w-full gap-8 px-3`}
    >
      {videos.map((item, idx) => (
        <div key={idx} className="text-white">
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
