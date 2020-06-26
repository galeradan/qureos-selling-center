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
    <div className="container mx-auto px-4">
      <h2 className="text-3xl mb-2">Products</h2>
      <hr />
      <div className="grid gap-4 mt-5 mb-5 md:grid-cols-4">
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
