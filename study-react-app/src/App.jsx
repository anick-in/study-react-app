import React, { Component } from 'react';


import Header from './header';
import Footer from './footer';
import List from './Complexes/List';
import Show from './Complexes/Show';

import './App.css';

import {
  BrowserRouter as Router, Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (

    <Router>  
      <div>

        <Header />
        <Route exact path="/" component = {List} />
        <Route path='/complex.html' component = {Show} />
        <Footer />

        </div>
    </Router>

    );
  };
};

export default App;
