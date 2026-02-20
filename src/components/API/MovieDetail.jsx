import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const {imdbID} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        const getMovieDetail = async () => {
        const response = await axios.get(
        `https://www.omdbapi.com/?apikey=6bdc3591&i=${imdbID}`
        )
        setMovie(response.data)
    }
    getMovieDetail();
  },[imdbID]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
        <h1>Movie Detail</h1>
        <img 
          src={movie?.Poster}
          alt={movie?.Title}
        />
        <h2>Movie Info:</h2>
        <p>Full name: {movie?.Title}</p>
        <p>Duration: {movie?.Runtime}</p>
        <p>Genre: {movie?.Genre}</p>
        <p>Director: {movie?.Director}</p>
        <p>Actors: {movie?.Actors}</p>
        <p>Language: {movie?.Language}</p>
        <p>imdb Rating: {movie?.imdbRating}</p>
        <p>imdb Votes: {movie?.imdbVotes}</p>
        <p>BoxOffice Collection: {movie?.BoxOffice}</p>
        <h3>Storyline:</h3>
        <p>{movie?.Plot}</p>
    </div>
  )
}
