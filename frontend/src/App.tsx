import React from 'react';
import ProductFormPage from './pages/ProductFormPage'
import ProductPage from './pages/ProductPage'
// Routers
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'


// Apollo Client Dependencies
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'


// instantiate a new client and wrap the app
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
})


function App() {
  return (

    <React.Fragment>
      <ApolloProvider client={client}>
        <Router>
        <div className="container-fluid">
        <Switch>
          <Route exact path="/product/form" component={ProductFormPage}/>
          <Route exact path="/products" component={ProductPage}/>
        </Switch>
        </div>
        </Router>

      </ApolloProvider>
    </React.Fragment>
     
  );
}

export default App;
