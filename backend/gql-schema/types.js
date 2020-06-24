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
const User = require('../models/user')

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

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: {type: GraphQLID},
		name: {type: GraphQLString},
		email: {type: GraphQLString},
		password: {type: GraphQLString},
		role: {type: GraphQLInt},
		token: { type: GraphQLString },
		createdAt: {type: GraphQLDateTime},
		updatedAt: {type: GraphQLDateTime},
	}) 
})

module.exports = {
    ProductType,
    UserType
}