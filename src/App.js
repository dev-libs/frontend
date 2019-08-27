import React from 'react';
import { Route } from "react-router-dom";

import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Dev-Libs</h1>
     {/* <Route exact path="/" component={DevLib}/> */}
     <Route path="/login" component={LoginForm}/>
     <Route path="/register" component={RegisterForm}/>
    </div>
  );
}

export default App;