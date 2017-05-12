// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/App';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Footer />
        </div>
   </Router>,
  document.getElementById('root')
);
