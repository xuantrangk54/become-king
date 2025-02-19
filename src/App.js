import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import GameList from "./Components/GameList";
import GameDetails from "./Components/GameDetails";
import LuckyWheel from "./Components/LuckyWheel"
import Layout from "./Components/Layout";
import PieChartWithIcons from './Components/PieChartWithIcons';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/pie-with-icons" element={<PieChartWithIcons/>}/>
          <Route path="/lucky-wheel" element={<LuckyWheel />} />
          <Route path="/game/:gameId" element={<GameDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
