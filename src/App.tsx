import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Speakers from "./components/Speakers";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h1>DevTalks</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/topics">Topics</Link>
          </div>
        </nav>
        {/* <hr /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
