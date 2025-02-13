import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameList from "./GameList";
import GameDetails from "./GameDetails";


function App() {
  const games = [
    { id: 1, name: "Game 1", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Game 2", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Game 3", image: "https://via.placeholder.com/300" },
  ];
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <GameList games={games} />} />
        <Route path="/game/:gameId" component={GameDetails} />
      </Switch>
    </Router>
  );
}

export default App;
