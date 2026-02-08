import React from 'react'
import { Link } from 'react-router-dom';

export const NetflixMovies = () => {

  const movies = [
    { movieId: 1, movieName: "Dhurandhar"},
    { movieId: 2, movieName: "Black Friday"},
    { movieId: 3, movieName: "Maharaja"},
  ];
  
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
        {
          movies.map((movie) => {
            return <li>
              <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
            </li>
          })
        }
    </div>
  )
}
