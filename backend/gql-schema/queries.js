const {
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
	GraphQLNonNull
} = require('graphql')

const {
    ProductType,
} = require('./types')

// Mongoose models.
const Product = require('../models/product')


// Query declaration and expor

module.exports = new GraphQLObjectType({
	name: 'Query',
	fields: {
		products: {
		    type: new GraphQLList(ProductType),
		    resolve: (parent, args) => {
		        return Product.find({})
		    }
		},
		product:{
			type: ProductType,
			args: {
				id: {type: GraphQLID}
			},
			resolve:(parent, args)=>{
				return Product.findById(args.id)
			}
		}

	}
})