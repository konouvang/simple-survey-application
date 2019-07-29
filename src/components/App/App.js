import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Question1 from '../Question1/Question1';



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
         {/* <Route exact path="/" component={Feeling} /> */}
         <Route exact path="/" component={Question1} />

        </div> 
     </Router>
      
    );
  }
}

export default App;
