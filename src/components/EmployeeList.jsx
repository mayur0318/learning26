import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeeList = (props) => {
  return (
    <div>
        <h1>EmployeeList</h1>
        <h3>{props.title}</h3>
        <h4>{props.company.name}</h4>
        <h4>{props.company.year}</h4>

        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((emp)=>{
                        return <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <SubEmployeeList title = {props.title}></SubEmployeeList>
    </div>
  )
}
