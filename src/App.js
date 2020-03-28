import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route} from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Deatails from './components/Deatails';
import Default from './components/Default';
import Cart from './components/Cart';
import Modal from './components/Modal';

class App extends Component {
  render(){
    return (
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route path='/details' component={Deatails} />
            <Route path='/cart' component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </Fragment>
    );
  }
}

export default App;