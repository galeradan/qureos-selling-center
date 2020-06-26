import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';

// GraphQL ApolloBoost Dependencies

// Grapqhl
import { addProductMutation } from '../gql/mutations';
import { getProductsQuery } from '../gql/queries';

// for redirecting and response to user

// Types
interface Props {
  addProductMutation: (arg: {}) => any;
  getProductsQuery: any;
}

const ProductFormPage: React.FC<Props> = (props) => {
  const history = useHistory();

  // initialise useState for this variables
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [price, setPrice] = React.useState<any>();

  // function to setTitle onChange
  const onChangeTitle = (e: React.ChangeEvent<any>) => {
    setTitle(e.target.value);
  };

  // function to setDescription onChange
  const onChangeDescription = (e: React.ChangeEvent<any>) => {
    setDescription(e.target.value);
  };

  // function to setPrice onChange
  const onChangePrice = (e: React.ChangeEvent<any>) => {
    setPrice(e.target.value);
  };

  // function to handle submission
  const onSubmit = () => {
    // Make sure variables are not empty strings, if empty strings throw a warning alert
    if (title !== '' && description !== '' && price !== '') {
      // run add product mutation if passed
      props
        .addProductMutation({
          variables: {
            title,
            description,
            price: parseFloat(price),
          },
          refetchQueries: [{ query: getProductsQuery }],
        })
        .then(
          () => {
            // If successful show success alert and redirect to manage page
            Swal.fire({
              icon: 'success',
              title: 'Product succesfully added',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              history.push(`/products/manage`);
            });
          },
          () => {
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
              showConfirmButton: true,
            });
          }
        );
    } else {
      // show warning if variables value is empty string
      Swal.fire({
        icon: 'warning',
        title: 'Somethings wrong',
        text: 'Please check your fields',
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-6">
        <div className="form-group">
          <TextField label="Title" type="text" fn={onChangeTitle} />
          <TextArea
            label="Description"
            fn={onChangeDescription}
            cols={20}
            rows={10}
          />
          <TextField label="Price" type="number" fn={onChangePrice} />
        </div>
        <button type="button" onClick={onSubmit} className="btn btn-primary">
          Create New Product
        </button>
      </div>
    </div>
  );
};

export default compose(
  graphql<any>(addProductMutation, { name: 'addProductMutation' }),
  graphql<any>(getProductsQuery, { name: 'getProductsQuery' })
)(ProductFormPage);
