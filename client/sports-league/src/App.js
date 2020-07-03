import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import TableContainer from './containers/TableContainer.js';
import MatchContainer from './containers/MatchContainer.js';
import HomePage from './components/HomePage.js';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/table" exact component={TableContainer}/>
          <Route path="/fixtures" exact component={MatchContainer}/>
        </Switch>
    </Router>

  );
}

export default App;
