import { gql } from 'apollo-boost';

// Gets all Products
const getProductsQuery = gql`
  {
    products {
      id
      title
      description
      price
    }
  }
`;

// Gets single Product

const getProductQuery = gql`
  query($id: ID!) {
    product(id: $id) {
      id
      title
      description
      price
    }
  }
`;

export { getProductsQuery, getProductQuery };
