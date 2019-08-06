import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Sform from './components/Sform'
import Audiorecord from './components/Audiorecord'
import Default from './components/Default'
import Profile from './components/Profile'
import Expert from './components/Expert'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sform" component={Sform} />
          <Route exact path="/audiorecord" component={Audiorecord} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/expert" component={Expert} />
          <Route component={Default} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
