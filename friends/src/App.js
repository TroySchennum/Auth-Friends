import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Login'
import { Switch, Route, Link, Router } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute"
import FriendsList from "./components/FriendsList"
import Login from "./components/Login"

function App() {
  return (
    <div className="App-header" >
      <header >
        {/* <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="App-logo" alt="logo" /> */}
        <h1>Auth Friends</h1>

        

      </header>

      <Switch>

        <PrivateRoute exact path='/protected' component={FriendsList} />
          

        <Route path='/login' component={Login}/>
          
      </Switch>
    </div>
  );
}

export default App;
