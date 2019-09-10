import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import classes from './Partido.css';
import Main from './Main/Main';

import Contact from './Contact/Contact';
import Service from './Service/Service';
import Works from './Works/Works';
import About from './About/About';

class Partido extends Component {
    render() {
        return (
            <div className={classes.Partido}>
                <Route path='/' exact component={Main} />
                <Route path='/kontakt' exact component={Contact} />
                <Route path='/usluge' exact component={Service} />
                <Route path='/radovi' exact component={Works} />      
                <Route path='/o-nama' exact component={About} />      
            </div>
        );
    }
}

export default Partido;