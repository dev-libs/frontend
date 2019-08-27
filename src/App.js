import React from 'react';
import { Route } from "react-router-dom";

import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm";
import MadlibPage from './components/MadlibPage';
import PrivateRoute from './components/PrivateRoute';
import Loginvanilla from './components/Vanillalogin';
import VanillaRegister from './components/VanillaRegister';

import './App.css';

function App() {
  return (
    <div className="App">

     <h1>Dev-Libs</h1>

     <h1>Mad-Libs for Developers </h1>

    <PrivateRoute path="/protected" component={MadlibPage} />
     <Route  exact path="/" component={Loginvanilla}/>
     <Route path="/register" component={VanillaRegister}/>
    </div>
  );
}

export default App;