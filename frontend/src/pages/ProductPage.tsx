import React from 'react';

// GraphQL ApolloBoost Dependencies
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import ProductCard from '../components/ProductCard';
import { getProductsQuery } from '../gql/queries';

interface Props {
  getProductsQuery: any;
}

const ProductPage: React.FC<Props> = (props) => {
  const { products } = props.getProductsQuery;

  return (
    <div className="container">
      <h2>Products</h2>
      <hr />
      <div className="row d-flex align-items-stretch">
        {products === undefined ? (
          <p>Loading...</p>
        ) : (
          products.map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default compose(graphql(getProductsQuery, { name: 'getProductsQuery' }))(
  ProductPage
);
