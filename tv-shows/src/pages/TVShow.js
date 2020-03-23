import React, { Component } from "react"

class TVShow extends Component{
  render(){
    const { id } = this.props.match.params
    const tvShow = this.props.tvShows.find((tvShow) => tvShow.id === parseInt(id))
    return(
      <>
        <div>
          <h3>{ tvShow.name }</h3>
          <p>{ tvShow.description }</p>
          <a href={ tvShow.url }> IMDb Link </a>
        </div>
      </>
    )
  }
}
export default TVShow
