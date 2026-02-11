import React from 'react'
import { TableComponent } from './TableComponent';

export const StudentReusableTable = () => {
    const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" }
  ];

  const data = [
    { id: 1, name: "Mayur", age: 21 },
    { id: 2, name: "Rahul", age: 22 }
  ];

  return (
    <div>
        <h1>STUDENT DATA</h1>
        <TableComponent columns={columns} data={data}></TableComponent>
    </div>
  )
}
