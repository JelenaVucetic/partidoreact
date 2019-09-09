import React from 'react';
import classes from './Nav.css';
import Logo from '../../assets/images/logo.png';
const nav = () => (

<div className={classes.Nav}>
    <img src={Logo} alt='img' />
    <div className={classes.NavItems}>
        <a href='#'>Pocetna </a>
        <a href='#'>O nama </a>
        <a href='#'>Usluge </a>
        <a href='#'>Radovi </a>
        <a href='#'>Kontakt </a>

    </div>
</div>
);

export default nav;