import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import tvShowsInfo from "./store/tvshowsinfo";
import TVShow from "./pages/TVShow";

class App extends Component {
  constructor(){
    super()
    this.state = {
      tvShows : tvShowsInfo
    }
  }
  render(){
    return (
      <div>
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
                  <h3>Top TV Shows</h3>
                  <ol>

                  { this.state.tvShows.map((tvShow,index) =>
                    <li key={ index }>
                      <Link to={ `/tvShowsInfo/${tvShow.id}` }>
                      { tvShow.name }
                      </Link>
                    </li>
                  )}
                  </ol>
                </ul>
              </nav>
              <Switch>
              <Route path="/about/" component={ AboutUs } />
              <Route path="/tvShowsInfo/:id"
              render={ (props) => <TVShow {...props} tvShows={ this.state.tvShows } /> } />
              <Route path="/" exact component={ Home } />
              <Route component={ NotFound } />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
