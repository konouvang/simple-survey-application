import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';



class App extends Component {



  componentDidMount() {
    // this.getFeedback();
    // this.postFeedback();
  }



  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback Form</h1>
         </header> 
         <br/>
         <Route exact path="/" component={Feeling} />

        </div> 
     </Router>
      
    );
  }
}

export default App;
