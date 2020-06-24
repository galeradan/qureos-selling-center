import {gql} from 'apollo-boost'


const addProductMutation = gql`
	mutation($title: String!, $description: String!, $price: Float! ){
	  addProduct(title: $title, description: $description, price: $price){
		 id
		 title
	     description
	     price
	  }
	}
`


export {
	addProductMutation,
}