import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import classes from './Partido.css';
import Main from './Main/Main';

import Contact from './Contact/Contact';

class Partido extends Component {
    render() {
        return (
            <div className={classes.Partido}>
                <Route path='/' exact component={Main} />
                <Route path='/contact' exact component={Contact} />
            </div>
           

        );
    }
}

export default Partido;