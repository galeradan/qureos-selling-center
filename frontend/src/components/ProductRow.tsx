import React from 'react'
import {NavLink} from 'react-router-dom'
interface Props {
    id:string;
    title: string;
    description: string;
    price: number;
    onDelete: (id: string)=>void;
}


const ProductRow:React.FC<Props> =({id, title, description, price, onDelete})=>{
    return(
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td className="text-right">
                <span className="mr-1">
                    <NavLink to={`/products/manage/edit/${id}`} className="btn btn-primary mb-1">Update</NavLink>
                </span>
                <span className="mr-1">
                    <button 
                        className="btn btn-danger mb-1"
                        onClick={()=> onDelete(id)}
                         > Delete</button>
                </span>
            </td>
        </tr>

    )
}

export default ProductRow