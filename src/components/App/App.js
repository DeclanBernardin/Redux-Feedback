import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import FeelingToday from '../FeelingToday/FeelingToday';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import SubmitReturn from '../SubmitReturn/SubmitReturn';
import Admin from '../Admin/Admin'

class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/feeling' component={FeelingToday} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/supported' component={Supported} /> 
          <Route path='/comments' component={Comments} /> 
          <Route path='/review' component={ReviewFeedback} /> 
          <Route path='/return' component={SubmitReturn} /> 
          <Route path='/admin' component={Admin} /> 
        </div>

      </Router >
    );
  }
}

export default App;
