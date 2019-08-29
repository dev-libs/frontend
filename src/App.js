import React from 'react';
import { Route, Link, } from "react-router-dom";
import MadlibPage from './components/MadlibPage';
import PrivateRoute from './components/PrivateRoute';
import Loginvanilla from './components/Vanillalogin';
import VanillaRegister from './components/VanillaRegister';
import Story from "./components/StoryPage";
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm";
import MadlibPage from './components/MadlibPage';
import './App.css';


function App() {

  return (
    <div className="App">

     <h1>Dev-Libs</h1>
      <nav>
        <ul>
          <li><a href="https://awesome-rosalind-7d5640.netlify.com/index.html" target="_blank">About Us</a></li>
          <li><Link to="/story">Story Time!</Link></li>
          <li><Link to="/protected">Play Time!</Link></li>
        </ul>
      </nav>
     <h1>Mad-Libs for Developers </h1>
    <switch>
     <PrivateRoute path="/protected" component={MadlibPage} />
     <PrivateRoute path="/story" component={Story} />     
     <Route  exact path="/" component={Loginvanilla}/>
     <Route path="/register" component={VanillaRegister}/>
     </switch>

     <Route exact path="/" component={LoginForm}/>
     <Route path="/register" component={RegisterForm}/>
     <PrivateRoute path="/MadlibPage" component={MadlibPage} />
    </div>
  );
}

export default App;