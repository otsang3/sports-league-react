import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
    </Router>

  );
}

export default App;
