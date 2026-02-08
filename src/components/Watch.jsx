import React from 'react'
import { Link, useParams } from 'react-router-dom'


export const Watch = () => {

  const showname = useParams().name // .name -->/watch/:name
  //const movieName = useParams().id // .name -->/watch/:id

  return (
    <div style={{textAlign: 'center'}}>
        <h1>Watching....{showname}</h1>
    </div>
  )
}
