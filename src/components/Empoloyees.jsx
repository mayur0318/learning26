import React from 'react'
import { EmployeeList } from '../EmployeeList'

export const Empoloyees = () => {
    let title = "EMPLOYEE APP"

    let company ={
        name:'JINDAL PVT LTD',
        year: 1988
    }

    let employees = [
        {id:101, name:"Dasarath", city: "Dhanera"},
        {id:102, name:"Meghraj", city: "Un"},
        {id:103, name:"Vipul", city: "Dhanera"},
        {id:104, name:"Rahul", city: "Diyodar"},
    ]

  return (
    <div>
        <h1>Employees</h1>
        <EmployeeList title={title} company={company} employees = {employees}></EmployeeList>
    </div>
  )
}
