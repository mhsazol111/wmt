import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route ,browserHistory, Link, Switch, Redirect} from 'react-router-dom';
import HomePage from './Home';
import LoginPage from "./LoginPage";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/access' component={LoginPage}/>
            <Route exact path='/' component={HomePage}/>
        </Switch>
    </Router>
, document.getElementById(`amzApp`));