import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';

// GraphQL ApolloBoost Dependencies

// Grapqhl
import { updateProductMutation } from '../gql/mutations';
import { getProductQuery, getProductsQuery } from '../gql/queries';

// for redirecting and response to user

// types
interface Props {
  getProductQuery: any;
  updateProductMutation: any;
}

const ProductFormPage: React.FC<Props> = (props) => {
  const getProduct = props.getProductQuery.product;
  const history = useHistory();

  // initialise useState for this variables
  const [title, setTitle] = React.useState<string>('');
  const [id, setId] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [price, setPrice] = React.useState<any>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  // Loads data and set it as a value of inputs
  React.useEffect(() => {
    if (getProduct !== undefined) {
      setId(getProduct.id);
      setTitle(getProduct.title);
      setDescription(getProduct.description);
      setPrice(getProduct.price);
      setLoading(false);
    }
  }, [getProduct]);

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
  const onUpdate = () => {
    // Make sure variables are not empty strings, if empty strings throw a warning alert
    if (title !== '' && description !== '' && price !== '') {
      // run update product mutation if passed
      props
        .updateProductMutation({
          variables: {
            id,
            title,
            description,
            price: parseFloat(price),
          },
          refetchQueries: [
            { query: getProductsQuery },
            {
              query: getProductQuery,
              variables: {
                id,
              },
            },
          ],
        })
        .then(
          () => {
            // If successful show success alert and redirect to manage page
            Swal.fire({
              icon: 'success',
              title: 'Product succesfully updated',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              history.push(`/products/manage`);
            });
          },
          // If encountered any error show Error alert
          () => {
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
              showConfirmButton: true,
            });
          }
        );
    } else {
      Swal.fire({
        title: 'Something went wrong',
        text: 'Please check your fields. Make sure they are not empty',
        icon: 'warning',
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="container mx-auto md:px-20 ">
      <div className="grid mt-5 mx-5 md:grid-cols-1">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="form-group">
            <TextField
              label="Title"
              type="text"
              fn={onChangeTitle}
              value={title}
            />
            <TextArea
              label="Description"
              fn={onChangeDescription}
              cols={20}
              rows={10}
              value={description}
            />
            <TextField
              label="Price"
              type="number"
              fn={onChangePrice}
              value={price}
            />
          </div>
        )}

        <button
          type="button"
          onClick={onUpdate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default compose(
  graphql<any>(getProductQuery, {
    options: (props) => {
      return {
        variables: {
          id: props.match.params.id,
        },
      };
    },
    name: 'getProductQuery',
  }),
  graphql<any>(updateProductMutation, { name: 'updateProductMutation' }),
  graphql<any>(getProductsQuery, { name: 'getProductsQuery' })
)(ProductFormPage);
