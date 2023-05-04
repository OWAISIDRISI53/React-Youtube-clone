import React, { useState, useEffect } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <main className="py-4 px-2 text-white text-2xl">
      <div className="text-center py-3">
        Search Results for <span className="text-red-600">{searchTerm}</span>{" "}
        videos
      </div>
      <div>{videos !== null && <Videos videos={videos} />}</div>
    </main>
  );
};

export default SearchFeed;
