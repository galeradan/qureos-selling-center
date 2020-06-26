const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull
} = require('graphql')
const {GraphQLDateTime} = require('graphql-iso-date')

const Tour = require('../models/product')

const ProductType = new GraphQLObjectType({
	name: "Product",
	fields: () => ({
		id: {type: GraphQLID},
		title: {type: GraphQLString},
		price: {type: GraphQLFloat},
		description: {type: GraphQLString},
		createdAt: {type: GraphQLDateTime},
		updatedAt: {type: GraphQLDateTime},
	}) 
})


module.exports = {
    ProductType
}