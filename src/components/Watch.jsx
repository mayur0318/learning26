import React from 'react'
import { Link, useParams } from 'react-router-dom'


// export const Watch = () => {

//   const movies = [
//     {img: "/src/assets/dhurandhar.webp" },
//     {img: "/src/assets/black friday.jpg" },
//     {img: "/src/assets/maharaja.jpeg" },
//   ];
//   const showname = useParams().name // .name -->/watch/:name
//   //const movieName = useParams().id // .name -->/watch/:id

//   return (
//     <div style={{textAlign: 'center'}}>
//         <h1>Watching....{showname}</h1>
//         {
//           movies.map((movie) => {
//             return <img
//                 src={movie.img}
//                 width="200"
//                 style={{ display: "block", margin: "0 auto" }}
//               />
//           })
//         }
//     </div>
//   )
// }

export const Watch = () => {

  const { name } = useParams();

  const movies = [
    { name: "Dhurandhar", img:"/src/assets/dhurandhar.webp" },
    { name: "Black Friday", img:"/src/assets/black friday.jpg" },
    { name: "Maharaja", img:"/src/assets/maharaja.jpeg" },
    { name: "gott", img:"/src/assets/gott.jpeg" },
    { name: "strangerthings", img:"/src/assets/strangerthings.jpeg" },
    { name: "breakingbad", img:"/src/assets/breakingbad.jpeg" },
  ];

  const selectedMovie = movies.find(
    (movie) => movie.name === name
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Watching... {name}</h1>

      {selectedMovie ? (
        <img
          src={selectedMovie.img}
          width="300"
          alt={name}
        />
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};
