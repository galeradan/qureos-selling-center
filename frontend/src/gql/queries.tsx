import {gql} from 'apollo-boost'


const getProductsQuery = gql`
{
  products{
     id
     title
     description
     price
   }
}`

export {
	getProductsQuery
}