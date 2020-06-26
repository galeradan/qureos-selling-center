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
    ProductType
} = require('./types')

// Mongoose models.
const Product = require('../models/product')


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
			resolve:(parent,args)=>{
				let newProduct = new Product({
					title: args.title,
					description: args.description,
					price: args.price,
				})
				return newProduct.save()
			}
		},
		updateProduct: {
			type: ProductType,
			args: {
				id: {type: new GraphQLNonNull(GraphQLID)},
				title: {type: new GraphQLNonNull(GraphQLString)},
				description: {type: new GraphQLNonNull(GraphQLString)},
				price: {type: new GraphQLNonNull(GraphQLFloat)}
			},
			resolve:(parent,args)=>{
				let productId = {_id: args.id}
				let updateProduct = {
										title: args.title,
										description: args.description,
										price: args.price
									}
				return Product.findOneAndUpdate(productId, {$set: updateProduct}, function(product){return product})
			}
		},
		deleteProduct:{
			type: ProductType,
			args: {
				id: {type: new GraphQLNonNull(GraphQLID)},
			},
			resolve:(parent, args)=>{
				let productId = {_id: args.id}
				return Product.findOneAndDelete(productId)
			}
		}
	}
})