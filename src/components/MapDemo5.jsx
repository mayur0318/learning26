import React from 'react'

export const MapDemo5 = () => {
    const table1 = [
        { id: 1, name: "C", type: "Language", use: "System", level: "Easy", year: 1972 },
        { id: 2, name: "Java", type: "Language", use: "Backend", level: "Medium", year: 1995 },
        { id: 3, name: "Python", type: "Language", use: "AI", level: "Easy", year: 1991 },
        { id: 4, name: "JS", type: "Language", use: "Web", level: "Medium", year: 1995 },
        { id: 5, name: "Go", type: "Language", use: "Cloud", level: "Medium", year: 2009 }
        ];

  return (
    <div>
        <h1>Map Demo 5</h1>
        {
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th style={{background: "lightpink"}}>Name</th>
                        <th>Type</th>
                        <th>Use</th>
                        <th>Level</th>
                        <th>Year</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        table1.map((data) => {
                           return <tr style={{backgroundColor: data.year>2000 && "lightgreen"}}>
                            <td style={{backgroundColor: (data.id % 2) == 0 && "lightgrey"}}>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.type}</td>
                            <td>{data.use}</td>
                            <td style={{backgroundColor: data.level=="Medium" && "lightblue"}}>{data.level}</td>
                            <td style={{color: data.year < 1995 ? "red" :"black"}}>{data.year}</td>
                           </tr> 
                        })
                    }
                </tbody>
            </table>
        }
    </div>
  )
}
