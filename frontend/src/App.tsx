import React from 'react';
import ProductFormPage from './pages/ProductFormPage'
import ProductEditPage from './pages/ProductEditPage'
import ProductManagePage from './pages/ProductManagePage'
import ProductPage from './pages/ProductPage'
// Routers
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'


// Apollo Client Dependencies
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import AppNavBar from './components/AppNavBar';


// instantiate a new client and wrap the app
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
})


function App() {
  return (

    <React.Fragment>
      <ApolloProvider client={client}>
        <Router>
        <AppNavBar/>
        <div className="container-fluid pt-3">
        <Switch>
          <Route exact path="/products" component={ProductPage}/>
          <Route exact path="/products/manage" component={ProductManagePage}/>
          <Route path="/products/manage/new" component={ProductFormPage}/>
          <Route path="/products/manage/edit/:id" component={ProductEditPage}/>
          <Redirect from="/" to="/products"/>
        </Switch>
        </div>
        </Router>

      </ApolloProvider>
    </React.Fragment>
     
  );
}

export default App;
