import React, { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
// import Navigation from "./components/Navigation";
// import Movie from "./Movie";
// import axios from "axios";


class App extends Component {
  render() { 
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
