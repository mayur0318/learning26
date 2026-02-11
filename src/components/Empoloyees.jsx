import React from 'react'
import { EmployeeList } from './EmployeeList'
import { TableComponent } from './TableComponent'

export const Empoloyees = () => {
    let title = "EMPLOYEE APP"

    let company ={
        name:'JINDAL PVT LTD',
        year: 1988
    }
   
  return (
    <div>
        <h1>Employees</h1>
        <EmployeeList title={title} company={company}></EmployeeList>
        
    </div>
  )
}
