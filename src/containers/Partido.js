import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import classes from './Partido.css';
import Main from './Main/Main';

import Contact from './Contact/Contact';
import Service from './Service/Service';
class Partido extends Component {
    render() {
        return (
            <div className={classes.Partido}>
                <Route path='/' exact component={Main} />
                <Route path='/kontakt' exact component={Contact} />
                <Route path='/usluge' exact component={Service} />
                
            </div>
           

        );
    }
}

export default Partido;