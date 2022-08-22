import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Speakers from "./components/Speakers";
import Topics from "./components/Topics";
import {speakerz,topicz} from "./speakers";
import { useState } from "react";
import { MyGlobalContext } from "./Helper/Context";

interface TopicInterface{
  id:number,
  name:string,
  time:string
}
interface SpeakerInterface{
  id:number,
  photo:string,
  name:string,
  role:string,
  description:string,
}

function App() {
  const [isAdmin, setAdmin] = useState(false);
  const [speakers, setSpeakers] = useState<SpeakerInterface[]>(speakerz);
  const [topics, setTopics] = useState<TopicInterface[]>(topicz);
  const [photo, setPhoto] = useState<string>("");

  const handleClick = () => {
    setAdmin(!isAdmin);
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>DevTalks</h1>
            <button
              onClick={handleClick}
              className={isAdmin ? "btn btn-primary" : "btn btn-danger"}
            >
              {isAdmin ? "Guest Mode" : "Admin Mode"}
            </button>
          </div>
          <div>
            <Link to="/DevTalks">Home</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/topics">Topics</Link>
          </div>
        </nav>

        <MyGlobalContext.Provider value={{ isAdmin, setAdmin, speakers, setSpeakers, photo, setPhoto,topics, setTopics }}>
          <Routes>
            <Route path="/DevTalks" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/topics" element={<Topics />} />
          </Routes>
        </MyGlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
