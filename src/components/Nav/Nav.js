import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Nav.css';
import Logo from '../../assets/images/logo.png';
const nav = () => (

<div className={classes.Nav}>
    <img src={Logo} alt='img' />
        <div className={classes.NavItems}>
            <Link to='/'> Pocetna </Link>
            <Link to='/o-nama'>O nama </Link>
            <Link to='/usluge'>Usluge </Link>
            <Link to='/radovi'>Radovi </Link>
            <Link to='/kontakt'>Kontakt </Link>
    </div>
</div>
);

export default nav;