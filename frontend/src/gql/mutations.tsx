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
const deleteProductMutation = gql`
	mutation($id: ID!){
		deleteProduct(id: $id){
			title
			description
			price
		}
	}
`

const updateProductMutation = gql`
	mutation($id: ID!, $title: String!, $description: String!, $price: Float! ){
	  updateProduct(id: $id, title: $title, description: $description, price: $price){
		 id
		 title
	     description
	     price
	  }
	}
`


export {
	addProductMutation,
	updateProductMutation,
	deleteProductMutation
}