import React from 'react'
import TextField from '../components/TextField'
import TextArea from '../components/TextArea'

// GraphQL ApolloBoost Dependencies
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash';

// Grapqhl
import {updateProductMutation} from '../gql/mutations'
import {getProductQuery, getProductsQuery} from '../gql/queries'

import {useHistory} from 'react-router-dom'

interface Props{
    getProductQuery: any;
    updateProductMutation: any;
}

const ProductFormPage:React.FC<Props> =(props)=>{
    let getProduct = props.getProductQuery.product

	// initialise useState for this variables
	const [title, setTitle] = React.useState<string>('')
	const [id, setId] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')
    const [price, setPrice] = React.useState<any>(0)
    const [loading, setLoading] = React.useState<boolean>(true)
    
    React.useEffect(()=>{
        if(getProduct!==undefined){
            setId(getProduct.id)
            setTitle(getProduct.title)
            setDescription(getProduct.description)
            setPrice(getProduct.price)
            setLoading(false)
        }
    },[getProduct])

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
	const onUpdate=()=>{
        // alert('Update')
        props.updateProductMutation({
            variables: {
                id: id,
                title: title,
                description: description,
                price: parseFloat(price)
            },
            refetchQueries: [
                                {query: getProductsQuery},
                                {query: getProductQuery,
                                    variables: {
                                        id: id
                                    }
                                }
                            ]
        }).then(()=>{
            
        })
	}

	return(


			<div className="row d-flex justify-content-center">
				<div className="col-md-8">

                     {
                            loading? <p>Loading...</p>
                            :
                            <div className="form-group">                   
                                <TextField label='Title' type="text" fn={onChangeTitle} value={title}/>
                                <TextArea label="Description" fn={onChangeDescription} cols={20} rows={10} value={description}/>
                                <TextField label='Price' type="number" fn={onChangePrice} value={price}/>
                            </div>
                    }
					
					<button onClick={onUpdate} className="btn btn-primary">Save</button>
				</div>
			</div>
			

		)

}

export default compose(
					// graphql<any>(addProductMutation, {name: 'addProductMutation'}),
                    graphql<any>(getProductQuery, 
                        {   options: (props)=>{
                            return {
                                variables:{
                                    id: props.match.params.id
                                     }
                                }
                            },
                            name: 'getProductQuery'
                        }),
                    graphql<any>(updateProductMutation, {name: "updateProductMutation"}),
                    graphql<any>(getProductsQuery, {name: "getProductsQuery"})
					)(ProductFormPage);