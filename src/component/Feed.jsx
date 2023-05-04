import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
      console.log(data);
    });
  }, [selectedCategory]);

  return (
    <main className="md:flex gap-5 py-4 px-2">
      <Sidebar
        categorie={selectedCategory}
        setCategorie={setSelectedCategory}
      />
      <hr />
      <div>
        <div className="container my-4">
          <div className="text-white text-2xl font-bold py-4">
            {selectedCategory} <span className="text-red-700">Videos</span>
          </div>
        </div>
        {videos !== null && <Videos videos={videos} />}
      </div>
    </main>
  );
};

export default Feed;
