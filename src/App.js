import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './pages/home/home';
import Universities from './pages/universities/universities';
import PostalLookup from './pages/postalLookup/postalLookup';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/universities" exact component={Universities} />
          <Route path="/postal" exact component={PostalLookup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
