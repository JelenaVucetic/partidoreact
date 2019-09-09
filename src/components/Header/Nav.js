import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Nav.css';
import Logo from '../../assets/images/logo.png';
const nav = () => (

<div className={classes.Nav}>
    <img src={Logo} alt='img' />
        <div className={classes.NavItems}>
            <Link to='/'> Pocetna </Link>
       
        <a href='#'>O nama </a>
        <a href='#'>Usluge </a>
            <a href='#'>Radovi </a>
            <Link to='contact'> Kontakt </Link>


    </div>
</div>
);

export default nav;