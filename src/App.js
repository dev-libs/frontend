import React from 'react';
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm";
import MadlibPage from './components/MadlibPage';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">

     <h1>Dev-Libs</h1>
     <MadlibPage/>

     <h1>Mad-Libs for Developers </h1>

     <Route exact path="/" component={LoginForm}/>
     <Route path="/register" component={RegisterForm}/>
     <PrivateRoute path="/MadlibPage" component={MadlibPage} />
    </div>
  );
}

export default App;