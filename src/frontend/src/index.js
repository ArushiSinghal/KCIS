import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
// import Home from './components/home'
import Control from './components/control'
import Data from './components/data'
import Profile from './components/profile'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const Routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            {/* <Route path="/home" component={Home}/> */}
            <Route path="/control" component={Control}/>
            <Route path="/data" component={Data}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </Router>
)

ReactDOM.render(Routing, document.getElementById("root"));