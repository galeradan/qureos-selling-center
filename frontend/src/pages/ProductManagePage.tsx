import React from 'react'
import {NavLink} from 'react-router-dom'

// GraphQL ApolloBoost Dependencies
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash';

// Grapqhl
import {getProductsQuery} from '../gql/queries'
import {deleteProductMutation} from '../gql/mutations'

import ProductRow from '../components/ProductRow';

interface Props{
    getProductsQuery: any;
    deleteProductMutation: any;
}


const ProductManagePage:React.FC<Props> =(props)=>{
    let products = props.getProductsQuery.products


    // Function to run when deleting a product
    const onDeleteProduct =(id: any)=>{
        props.deleteProductMutation({
            variables: {id: id},
            refetchQueries: [{query: getProductsQuery}]
        })
    }

    return(

        <div className="container">
            <h2>Manage Products</h2>
            <hr/>
            <div className="form-group">
              <NavLink to="/products/manage/new" className="btn btn-primary">Add New</NavLink>
            </div>
            <div className="row">
                <div className="col-md-12 table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col" className="text-right">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products===undefined?
                                    <tr>
                                        <td colSpan={4} className="text-center">Loading...</td>
                                    </tr>
                                    :
                                    products.map((product: any)=>{
                                        return <ProductRow 
                                                    key={product.id}
                                                    id={product.id}
                                                    title={product.title}
                                                    description={product.description}
                                                    price={product.price}
                                                    onDelete={onDeleteProduct}
                                                />
                                    })
                            }
                            

                        </tbody>
                    </table>

                </div>
                
            </div>
        </div>
    )

}


export default compose(
                        graphql<any>(getProductsQuery,{name:"getProductsQuery"}),
                        graphql<any>(deleteProductMutation,{name:"deleteProductMutation"}),
                        )(ProductManagePage)