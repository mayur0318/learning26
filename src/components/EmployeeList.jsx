import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'
import { TableComponent } from './TableComponent'

export const EmployeeList = (props) => {

     let columns = [
            { header: "ID", accessor: "id" },
            { header: "Name", accessor: "name" },
            { header: "City", accessor: "city" }
        ]
    
        let data = [
            {id:101, name:"Dasarath", city: "Dhanera"},
            {id:102, name:"Meghraj", city: "Un"},
            {id:103, name:"Vipul", city: "Dhanera"},
            {id:104, name:"Rahul", city: "Diyodar"},
        ]
    
  return (
    <div>
        <h1>EmployeeList</h1>
        <h3>{props.title}</h3>
        <h4>{props.company.name}</h4>
        <h4>{props.company.year}</h4>

        <TableComponent columns={columns} data={data}></TableComponent>
        <SubEmployeeList title = {props.title}></SubEmployeeList>
    </div>
  )
}
