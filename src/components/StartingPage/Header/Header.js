import React from 'react';

import Nav from '../../Nav/Nav';
import classes from './Header.css';

const header = () => (
    
    <div className={classes.Header}>
        <Nav />
        <h1> Enterijer i namjestaj po mjeri</h1>
    </div>
    );

export default header;