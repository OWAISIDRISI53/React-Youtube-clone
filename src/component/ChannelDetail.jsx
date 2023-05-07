import React, { useState, useEffect } from "react";
import ChannelCard from "./ChannelCard";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromAPI(
      `search?channelId=${id}&part=snippet,id&order=date&maxResult=50`
    ).then((data) => {
      setVideos(data?.items);
      // console.log(data);
    });
  }, [id]);
  const banner = channelDetail?.brandingSettings?.image?.bannerExternalUrl;

  console.log(videos);

  return (
    <div>
      <div className="header h-48 w-full bg-sky-800">
        {banner && (
          <img src={banner} alt="" className="h-full w-full object-cover" />
        )}
      </div>
      <ChannelCard channelDetail={channelDetail} marginTop="-mt-24" />
      <div className="container mx-auto">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
