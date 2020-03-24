import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import tvShowsInfo from "./store/tvshowsinfo";
import TVShow from "./pages/TVShow";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, ListGroup, ListGroupItem, Jumbotron, Container } from 'reactstrap';


class App extends Component {
  constructor(){
    super()
    this.toggle = this.toggle.bind(this)
    this.state = {
      tvShows : tvShowsInfo,
      dropDownOpen : true,
    }
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render(){
    return (
        <Router>
              <Jumbotron fluid>
                <Container fluid>
                  <h1>Welcome to see our Favorite TV Shows</h1>
                </Container>
              </Jumbotron>
              <Nav pills>

                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/about/">About</NavLink>
                </NavItem>

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>
                    Top 5 Shows
                  </DropdownToggle>
                  <DropdownMenu>
                    { this.state.tvShows.map((tvShow,index) =>
                      <DropdownItem key={ index }>
                      <a href={ `/tvShowsInfo/${tvShow.id}` }>
                      { tvShow.name }
                      </a>
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>

              </Nav>

              {/* Show the list in the page */}
{/*
              <ListGroup>
              { this.state.tvShows.map((tvShow,index) =>
                <ListGroupItem key={ index }>
                  <a href={ `/tvShowsInfo/${tvShow.id}` }>
                  { tvShow.name }
                  </a>
                </ListGroupItem>
              )}
              </ListGroup>
*/}
              <Switch>
              <Route path="/about/" component={ AboutUs } />
              <Route path="/tvShowsInfo/:id"
              render={ (props) => <TVShow {...props} tvShows={ this.state.tvShows } /> } />
              <Route path="/" exact component={ Home } />
              <Route component={ NotFound } />
              </Switch>

          </Router>
    );
  }
}

export default App;
