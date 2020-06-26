import React from 'react';
import { NavLink } from 'react-router-dom';

// GraphQL ApolloBoost Dependencies
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

// Grapqhl
import Swal from 'sweetalert2';
import { getProductsQuery } from '../gql/queries';
import { deleteProductMutation } from '../gql/mutations';

// Components
import ProductRow from '../components/ProductRow';

// for response to user

interface Props {
  getProductsQuery: any;
  deleteProductMutation: any;
}

const ProductManagePage: React.FC<Props> = (props) => {
  const { products } = props.getProductsQuery;

  // Function to run when deleting a product
  const onDeleteProduct = (id: any) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceed deleting product',
    }).then((result: any) => {
      if (result.value) {
        props
          .deleteProductMutation({
            variables: { id },
            refetchQueries: [{ query: getProductsQuery }],
          })
          .then(
            () => {
              Swal.fire({
                icon: 'success',
                title: 'Product succesfully deleted',
                showConfirmButton: false,
                timer: 1500,
              });
            },
            () => {
              Swal.fire(
                'Something went wrong!',
                'The was not deleted',
                'error'
              );
            }
          );
      }
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl mb-2">Manage Product</h2>
      <hr />
      <div className="mt-3 mb-3">
        <NavLink
          to="/products/manage/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New
        </NavLink>
      </div>
      <div className="grid overflow-y-auto grid-cols-1 bg-white shadow-md rounded px-1 pt-6 pb-8 mb-4">
        <table className="table-auto">
          <thead>
            <tr>
              <th scope="col" className="bg-blue-500 text-white px-4 py-2">
                Title
              </th>
              <th scope="col" className="bg-blue-500 text-white px-4 py-2">
                Description
              </th>
              <th scope="col" className="bg-blue-500 text-white px-4 py-2">
                Price
              </th>
              <th
                scope="col"
                className="bg-blue-500 text-white px-4 py-2 text-right"
              >
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {products === undefined ? (
              <tr>
                <td colSpan={4} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              products.map((product: any) => {
                return (
                  <ProductRow
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    onDelete={onDeleteProduct}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default compose(
  graphql<any>(getProductsQuery, { name: 'getProductsQuery' }),
  graphql<any>(deleteProductMutation, { name: 'deleteProductMutation' })
)(ProductManagePage);
