import React from 'react'

export const MapDemo7 = () => {
    const table4 = [
        { id: 1, product: "Laptop", brand: "HP", price: 50000, stock: "Yes", rating: 4 },
        { id: 2, product: "Mobile", brand: "Samsung", price: 20000, stock: "Yes", rating: 4 },
        { id: 3, product: "Mouse", brand: "Logi", price: 500, stock: "Yes", rating: 5 },
        { id: 4, product: "Keyboard", brand: "Dell", price: 1500, stock: "No", rating: 3 },
        { id: 5, product: "Monitor", brand: "LG", price: 12000, stock: "Yes", rating: 4 }
        ];

  return (
    <div>
        <h1> MAP DEMO 7</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    table4.map((item) =>{
                        return <tr style={{backgroundColor:item.id % 2 === 0 ? "#de8f64" : "#a4e1ec"}}>
                            <td>{item.id}</td>
                            <td style={{color:item.rating === 5 ? "#f71313" : ""}}>{item.product}</td>
                            <td>{item.brand}</td>
                            <td style={{backgroundColor:item.price > 10000 ? "#90f18b" : ""}}>{item.price}</td>
                            <td style={{fontWeight:item.stock === "Yes" ? 900:100}}>{item.stock}</td>
                            <td>{item.rating}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
