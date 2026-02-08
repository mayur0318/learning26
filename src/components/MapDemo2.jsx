import React from 'react'

export const MapDemo2 = () => {
    let users = [
        {name: 'mayur', EnrlNo : 1, city : 'patan'},
        {name : 'rehan', EnrlNo : 2, city : 'gandhidham'}, 
        {name : 'drashti', EnrlNo : 3, city : 'bhuj'}
    ]
  return (
    <div >
        <h1>Map Demo 2</h1>
        {
            users.map((user) => {
                return(
                    <li>{user.name} - {user.EnrlNo} - {user.city}</li>
                )
            })
        }
        
    </div>
  )
}
