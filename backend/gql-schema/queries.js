const {
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType
} = require('graphql')

const {
    ProductType,
	UserType,
} = require('./types')

// Mongoose models.
const Product = require('../models/product')
const User = require('../models/user')


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
	}
})