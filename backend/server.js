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

// temporary placement of credentials
const dbname = "qureos-db"
const uname = "admin"
const password = "qureosAdmin123"

app.use(cors());
app.use('/graphql', graphqlHTTP({schema: graphQLSchema, graphiql: true}));

// Local connection
// mongoose.connect('mongodb://localhost:27017/merng_qureos');

// MongoDB Atlas connection
mongoose.connect(`mongodb+srv://admin:${password}@qureos-seller-center-txpot.mongodb.net/${dbname}?retryWrites=true&w=majority`)


mongoose.connection.once('open', ()=>{
	console.log("Now connected to MongoDB");
}).then(()=>{
		app.listen(port,function(){
		console.log(`Now listening for requests on ${port}`);
		})
	}).catch(err =>{
		console.log(err)
	})





