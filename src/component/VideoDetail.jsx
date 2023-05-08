import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import ReactPlayer from "react-player";
import Loader from "./Loader";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0])
    );

    fetchFromAPI(
      `search?relatedToVideoId=${id}&part=id,snippet&type=video  `
    ).then((data) => setVideo(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="h-auto bg-black px-3 flex flex-col sm:flex-row justify-between gap-10">
      <div className="video-control w-full sm:w-[60%]">
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

      <div className="w-full sm:w-[40%]">
        <h2 className="text-2xl text-red-700 font-bold italic">
          Related video
        </h2>
        <br />
        <Videos videos={video} LgCol={2} />
      </div>
    </div>
  );
};

export default VideoDetail;
