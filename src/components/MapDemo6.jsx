import React from 'react'

export const MapDemo6 = () => {
    const table3 = [
        { roll: 1, name: "Amit", dept: "IT", year: 3, city: "Surat", result: "Pass" },
        { roll: 2, name: "Neha", dept: "CE", year: 2, city: "Rajkot", result: "Pass" },
        { roll: 3, name: "Rahul", dept: "IT", year: 4, city: "Ahmedabad", result: "Pass" },
        { roll: 4, name: "Pooja", dept: "EC", year: 3, city: "Vadodara", result: "Pass" },
        { roll: 5, name: "Karan", dept: "CE", year: 1, city: "Surat", result: "Pass" }
        ];

  return (
    <div>
        <h1>MAP DEMO 6</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Year</th>
                    <th>City</th>
                    <th>Result</th>
                </tr>
            </thead>

            <tbody>
                {
                    table3.map((st)=> {
                        return <tr style={{
                                    backgroundColor: st.roll % 2 === 1 ?  "#ad9eda" : "transparent"
                                    }}
                                >
                            <td>{st.roll}</td>
                            <td style={{
                                backgroundColor:st.name.length > 4 ? "#ee7f4f" : "transparent"
                                }}
                            >
                                {st.name}</td>
                            <td>{st.dept}</td>
                            <td style={{backgroundColor:(st.year)%2 === 0 ? "#92dfe4" : "transparent"}}>{st.year}</td>
                            <td style={{
                                color: st.city === 'Vadodara' ?  "#c90303" : "",
                                fontWeight: st.city ==='Vadodara' ? 900 : 100 
                                }}
                            >
                                {st.city}</td>
                            <td>{st.result}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
