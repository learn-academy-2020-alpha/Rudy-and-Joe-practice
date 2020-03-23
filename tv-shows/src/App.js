import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Router>
          <div>
            <h1>Welcome to Our Favorite TV Shows</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to={ `/tvshowsinfo/${tvshow.id}` }> {tvshow.id} </Link>
                </li>
              </ul>
            </nav>
            <Switch>
            <Route path="/about/" component={ AboutUs } />
            <Route path="/tvshowsinfo/:id" 
            render={ (props) => <TVShow {...props} tvshows={ this.state.allTVShows } /> } />
            <Route path="/" exact component={ Home } />
            <Route component={ NotFound } />
            </Switch>
          </div>
        </Router>
    </>
  );
}

export default App;
