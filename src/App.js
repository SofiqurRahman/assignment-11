import React, { createContext, useState } from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login> 
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
        </Switch>
      </Router>
      <Home/> 
       
    </div>
  );
}

export default App;
