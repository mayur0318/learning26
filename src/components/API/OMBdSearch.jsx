import axios from 'axios'
import React, { useState } from 'react'
import './OMBdSearch.css'
import { Link } from 'react-router-dom'

export const OMBdSearch = () => {
  const [movies, setmovies] = useState([])
  const [searchParam, setsearchParam] = useState("")

  const searchMovie = (e)=>{
    setsearchParam(e.target.value)
  }
  const getMovie = async () => {
    if (!searchParam) return

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=6bdc3591&s=${searchParam}`
    )
    setmovies(response.data.Search || [])
  }

  return (
    <div>
      <h1>OMDb SEARCH</h1>
      <div className="search-box">
      <input 
        type='text'
        className="search-input" 
        value={searchParam}
        onChange={(e)=>{searchMovie(e)}}
        onKeyDown={(e) => e.key === "Enter" && getMovie()}
        placeholder="Search movie..." 
      />

      <button className="search-btn" onClick={getMovie}>
        🔍
      </button>
      </div>

      <div className="container">
        {movies &&
          movies.map((movie) => (
            <Link to={`/moviedetail/${movie.imdbID}`} key={movie.imdbID} style={{textDecoration:"none", color:"inherit"}}>
              <div className="card">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450"
                }
                alt={movie.Title}
                onClick={()=> <Link to={`/moviedetail/${movie.imdbID}`}></Link>}
              />
              <div className="card-content">
                Download <h3>{movie.Title}</h3>
                          <p>{movie.Year}</p>
              </div>
            </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
