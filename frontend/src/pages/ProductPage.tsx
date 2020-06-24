import React from 'react'
import ProductCard from '../components/ProductCard';


// GraphQL ApolloBoost Dependencies
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash';
import {getProductsQuery} from '../gql/queries'



interface Props{
	getProductsQuery: any;
}

const ProductPage:React.FC<Props> =(props)=>{

	let products = props.getProductsQuery.products

	return(

			<React.Fragment>
				<div className="container">
					<div className="row d-flex align-items-stretch">
						{
							products===undefined? <p>Loading...</p> :
							products.map((product: any)=>{
								return (
									<ProductCard key={product.id} product={product}/>
								)
							})
						}
					</div>
				</div>

					
				
			</React.Fragment>

		)

}

export default compose(graphql(getProductsQuery, {name: "getProductsQuery"}))
						(ProductPage);