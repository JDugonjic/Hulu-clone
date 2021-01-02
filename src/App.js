import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import requests from "./requests";
import Results from "./Results";
import PlayVideo from "./PlayVideo";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/play/:selectedCategory/:movieTitle">
            <PlayVideo />
          </Route>

          <Route path="/">
            <Header />

            <Nav setSelectedOption={setSelectedOption} />

            <Results selectedOption={selectedOption} />
          </Route>
        </Switch>
      </Router>
      <div className="app__footer"></div>
    </div>
  );
}

export default App;
