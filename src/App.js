import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import GameList from "./Components/GameList";
import GameDetails from "./Components/GameDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/game/:gameId" element={<GameDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
