import React from 'react';
import { Route } from "react-router-dom";
<<<<<<< HEAD

import MadlibPage from './components/MadlibPage';
import PrivateRoute from './components/PrivateRoute';
import Loginvanilla from './components/Vanillalogin';
import VanillaRegister from './components/VanillaRegister';
// import Story from "./components/StoryPage";

=======
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm";
import MadlibPage from './components/MadlibPage';
import PrivateRoute from './components/PrivateRoute';
>>>>>>> Carla-Marvin
import './App.css';

function App() {
  return (
    <div className="App">

     <h1>Dev-Libs</h1>

     <h1>Mad-Libs for Developers </h1>
<<<<<<< HEAD
    <switch>
    <PrivateRoute path="/protected" component={MadlibPage} />
     <Route  exact path="/" component={Loginvanilla}/>
     <Route path="/register" component={VanillaRegister}/>
     </switch>
=======

     <Route exact path="/" component={LoginForm}/>
     <Route path="/register" component={RegisterForm}/>
     <PrivateRoute path="/MadlibPage" component={MadlibPage} />
>>>>>>> Carla-Marvin
    </div>
  );
}

export default App;