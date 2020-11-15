import React from 'react'
//import './Table.scss'

const Table = () =>{
    return <table>
        <thead>
             <tr>
                 <th>Product</th>
                 <th>Price</th>
                 <th>Stock</th>
             </tr>
        </thead>

        <tbody>
          <tr>
             <td>caneta</td>
             <td>R$ 2,00</td>
             <td>10 unidades</td>
          </tr>
          <tr>
             <td>caderno</td>
             <td>R$ 10,00</td>
             <td>15 unidades</td>
          </tr>
       
        </tbody>

    </table>
} 

export default Table