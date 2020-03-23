import React, { Component } from "react"

class TVShows extends Component{
  render(){
    return(
      <React.Fragment>
        <h1>TVShows</h1>
        <ol>
            <li><a href="https://www.imdb.com/title/tt0944947" target="_blank">Game of Thrones</a></li>
            <li><a href="https://www.imdb.com/title/tt0096697 " target="_blank">Simpsons</a></li>
            <li><a href="https://www.imdb.com/title/tt0108778" target="_blank">Friends</a></li>
            <li><a href="https://www.imdb.com/title/tt0098904 " target="_blank">Seinfeld</a></li>
            <li><a href="https://www.imdb.com/title/tt0903747 " target="_blank">Breaking Bad</a></li>
        </ol>
      </React.Fragment>
    )
  }
}
export default TVShows
