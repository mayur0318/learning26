import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <ul>
          <li>
            <Link to="/watch/gott">Game Of Throns</Link>
          </li>
          <li>
            <Link to="/watch/strangerthings">Stranger Things</Link>
          </li>
          <li>
            <Link to="/watch/breakingbad">Breaking Bad</Link>
          </li>
          
        </ul>
    </div>
  )
}
