const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLBoolean,
    GraphQLObjectType
} = require('graphql')

const {
    UserType,
    ProductType
} = require('./types')

// Mongoose models.
const Product = require('../models/product')
const User = require('../models/user')


module.exports = new GraphQLObjectType({
	name:'Mutation',
	fields: {
		addProduct: {
			type: ProductType,
			args: {
				title: {type: new GraphQLNonNull(GraphQLString)},
				description: {type: new GraphQLNonNull(GraphQLString)},
				price: {type: new GraphQLNonNull(GraphQLFloat)},
			},
			resolve:(parents,args)=>{
				let newProduct = new Product({
					title: args.title,
					description: args.description,
					price: args.price,
				})
				return newProduct.save()
			}
		},
	}
})