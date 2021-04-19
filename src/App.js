import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreFront from './containers/StoreFront'
import {Switch, Route} from 'react-router-dom'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductList from './components/ProductList'
class App extends React.Component{

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
            <Route exact path="/" component={StoreFront} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  };
 
}

export default App;
