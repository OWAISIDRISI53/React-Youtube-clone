import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from './component/Feed';
import Navbar from './component/Navbar';
import VideoDetail from "./component/VideoDetail";
import SearchFeed from "./component/SearchFeed";
import ChannelDetail from "./component/ChannelDetail";

function App() {
  return (
    <Router>
      <div className="bg-black pb-11">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/video/:id" element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
