import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Control from './components/control.jsx'
import Data from './components/data.jsx'
import Setting from './components/profile'


function App() {
    {
        return (
          <Router>
            <div className="App">
              <Navbar />
              <Route  path="/" exact component={Landing} />
              <div className="container">
                <Route  path="/register" component={Register} />
                <Route  path="/login" component={Login} />
                <Route  path="/profile" component={Profile} />
                

              </div>
               
            </div>
            <Route  path="/control" component={Control} />
            <Route  path="/data" component={Data} />
            <Route  path="/password_reset" component={Setting} />
          </Router>
        )
      }
    
}

export default App;
