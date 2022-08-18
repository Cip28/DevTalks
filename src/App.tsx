import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Speakers from "./components/Speakers";
import Topics from "./components/Topics";
import { useState  } from "react";


function App() {
  const [isAdmin, setAdmin] = useState(false);

  const handleClick = () => {
    setAdmin(!isAdmin);
    console.log(isAdmin);
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
            <Link to="/">Home</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/topics">Topics</Link>
          </div>        
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={ <Speakers />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
