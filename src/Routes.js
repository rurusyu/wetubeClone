import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import watch from './pages/Watch';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component = {watch}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;