import React from 'react';
import { Route } from "react-router-dom";

import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm";
import MadlibPage from './components/MadlibPage';

import './App.css';

function App() {
  return (
    <div className="App">

     <h1>Dev-Libs</h1>
     <MadlibPage/>

     <h1>Mad-Libs for Developers </h1>

     <Route path="/" component={LoginForm}/>
     <Route path="/register" component={RegisterForm}/>
    </div>
  );
}

export default App;