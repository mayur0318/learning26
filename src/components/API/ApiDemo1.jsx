import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
  const [users, setUsers]=useState([])
  const getUser = async ()=>{
    const response = await axios.get("https://node5.onrender.com/user/user/")
    // console.log(response);
    // console.log(response.data);
    console.log(response.data.data);
    console.log(response.data.message);
    setUsers(response.data.data)
    
  }
  
  return (
    <div>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getUser()}}
          style={{margin: 10, backgroundColor:'#fe5005', color:'#ffff', borderRadius: 10, paddingRight:15, paddingLeft:15, border:"none" }}
          >GET</button>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>AGE</th>
            </tr>
          </thead>
          <tbody>
            { 
              users.map((user)=>{ return <tr key={user._id}>
                  <td>{user._id.substring(5,10)}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password.substring(0,8)}</td>
                  <td>{user.age}</td>
                </tr>
              })
            }
          </tbody>
        </table>
        
    </div>
  )
}
