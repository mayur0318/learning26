import React from 'react'

export const TableComponent = ({columns, data}) => {

  return (
    <div>
        
        <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
        
        <thead>
            <tr>
            {columns.map((col, index) => (
                <th key={index}>{col.header}</th>
            ))}
            </tr>
        </thead>

        <tbody>
            {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                <td key={colIndex}>
                    {row[col.accessor]}
                </td>
                ))}
            </tr>
            ))}
        </tbody>

        </table>
 
    </div>
  )
}
