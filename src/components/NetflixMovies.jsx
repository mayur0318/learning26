import React from 'react'
import { Link } from 'react-router-dom';
import { TableComponent } from './TableComponent';

export const NetflixMovies = () => {

  const movies = [
    { movieId: 1, movieName: "Dhurandhar"},
    { movieId: 2, movieName: "Black Friday"},
    { movieId: 3, movieName: "Maharaja"},
  ];
  
  const columns = [
    { header: "Title", accessor: "title" },
    { header: "Year", accessor: "year" },
    { header: "Rating", accessor: "rating" }
  ];

  const data = [
    { title: "3 Idiots", year: 2009, rating: 8.4 },
    { title: "Bahubali", year: 2015, rating: 8.0 },
    { title: "KGF", year: 2018, rating: 8.2 },
    { title: "Dangal", year: 2016, rating: 8.3 }
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
        <TableComponent columns={columns} data={data}></TableComponent>
    </div>
  )
}
