import React from 'react';
import { Route } from "react-router-dom";


import MadlibPage from './components/MadlibPage';
import PrivateRoute from './components/PrivateRoute';
import Loginvanilla from './components/Vanillalogin';
import VanillaRegister from './components/VanillaRegister';
// import Story from "./components/StoryPage";

import './App.css';

function App() {
  return (
    <div className="App">

     <h1>Dev-Libs</h1>

     <h1>Mad-Libs for Developers </h1>
    <switch>
    <PrivateRoute path="/protected" component={MadlibPage} />
     <Route  exact path="/" component={Loginvanilla}/>
     <Route path="/register" component={VanillaRegister}/>
     </switch>
    </div>
  );
}

export default App;