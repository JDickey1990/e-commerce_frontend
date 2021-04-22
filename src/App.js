import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreFront from './containers/StoreFront'
import {Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Modal from './components/Modal'

class App extends React.Component{

  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={StoreFront} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
        </Switch>
        <Modal />
      </Router>
    );
  };
 
}

export default App;
