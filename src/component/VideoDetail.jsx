import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import ReactPlayer from "react-player";
import Loader from "./Loader";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  // const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => {
        setVideoDetail(data.items[0]);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="h-auto bg-black px-3">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        width="100%"
        controls
      />
      <div className="content text-white py-5">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex gap-5 py-4 text-gray-300">
          <p>{parseInt(viewCount).toLocaleString()} views</p>
          <p>{parseInt(likeCount).toLocaleString()} likes</p>
        </div>

        <div className="channel-sec">
          <p>{channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
