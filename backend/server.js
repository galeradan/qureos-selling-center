const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');
const graphQLSchema = require('./gql-schema/index')
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);



const app = express() 
// let port = process.env.PORT || 4000
let port = 4000


app.use(cors());
app.use('/graphql', graphqlHTTP({schema: graphQLSchema, graphiql: true}));

mongoose.connect('mongodb://localhost:27017/merng_qureos');

mongoose.connection.once('open', ()=>{
	console.log("Now connected to Robo3t!");
}).then(()=>{
		app.listen(port,function(){
		console.log(`Now listening for requests on ${port}`);
		})
	}).catch(err =>{
		console.log(err)
	})





