import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import StartPage from '../StartPage/'
import Post from '../Post/'
import ArrDisplay from '../ArrDisplay/'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={StartPage}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/display" component={ArrDisplay}/>
                </Switch>
            </Router>
        );
    }
}