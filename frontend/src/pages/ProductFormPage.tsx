import React from 'react'
import TextField from '../components/TextField'
import TextArea from '../components/TextArea'

// GraphQL ApolloBoost Dependencies
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash';

// Grapqhl
import {addProductMutation} from '../gql/mutations'
import {getProductsQuery} from '../gql/queries'

interface Props{
	addProductMutation: (arg: {})=>any;
	getProductsQuery: any;
}

const ProductFormPage:React.FC<Props> =(props)=>{

	// initialise useState for this variables
	const [title, setTitle] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')
	const [price, setPrice] = React.useState<any>()

	// function to setTitle onChange
	const onChangeTitle=(e:React.ChangeEvent<any>)=>{
		setTitle(e.target.value)
	}

	// function to setDescription onChange
	const onChangeDescription=(e:React.ChangeEvent<any>)=>{
		setDescription(e.target.value)
	}
	
	//function to setPrice onChange
	const onChangePrice=(e:React.ChangeEvent<any>)=>{
		setPrice(e.target.value)
	}


	// function to handle submission
	const onSubmit=()=>{
		alert(`${title} ${description} ${price}`)

		props.addProductMutation({
			variables: {
				title: title,
				description: description,
				price: parseFloat(price)
			},
			refetchQueries: [{query: getProductsQuery}]
		}).then((res: any)=>{
			console.log(res)
		})

	}

	return(


			<div className="row d-flex justify-content-center">
				<div className="col-md-8">
					<div className="form-group"> 
						<TextField label='Title' type="text" fn={onChangeTitle}/>
						<TextArea label="Description" fn={onChangeDescription} cols={20} rows={10} />
						<TextField label='Price' type="number" fn={onChangePrice}/>
					</div>
					<button onClick={onSubmit} className="btn btn-primary">Create New Product</button>
				</div>
			</div>
			

		)

}

export default compose(
					graphql<any>(addProductMutation, {name: 'addProductMutation'}),
					graphql<any>(getProductsQuery, {name: 'getProductsQuery'})
					)(ProductFormPage);