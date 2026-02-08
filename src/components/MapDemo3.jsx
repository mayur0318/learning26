import React from 'react'

export const MapDemo3 = () => {
    let students =[
        {id:1,name:"nimit",age:23,marks:78,city:"ahmedabad",gender:"male"},
        {id:2,name:"priya",age:25,marks:81,city:"ahmedabad",gender:"female"},
        {id:3,name:"raha",age:22,marks:72,city:"ahmedabad",gender:"female"},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 3</h1>
        {
            
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>MARKS</th>
                        <th>CITY</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((st) => {
                            return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        }
        
    </div>
  )
}
