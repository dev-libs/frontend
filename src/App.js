import React from 'react';
import { Route, Link, } from "react-router-dom";
import MadlibPage from './components/MadlibPage';
import PrivateRoute from './components/PrivateRoute';
import Loginvanilla from './components/Vanillalogin';
import Story from "./components/StoryPage";
import AllLibs from './components/AllLibs';
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
     <PrivateRoute path="/alllibs" component={AllLibs} />
     <PrivateRoute path="/story" component={Story} />     
     <Route  exact path="/" component={Loginvanilla}/>
     </switch>
    </div>
  );
}

export default App;