import React from 'react';
import classes from './Layout.css';

import Logo from '../../assets/images/logo.png';

const layout = (props) => (

    <div>
        <div className={classes.Header}>
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
            <h1> Enterijer i namjestaj po mjeri</h1>
        </div>
        <div className={classes.Ruler1} ></div>
        <div className={classes.Ruler2} ></div>
        <main>
            {props.children}
        </main>
        <div className={classes.Footer}>
            <div className={classes.Divider}></div>
            <div className={classes.Pensil}></div>
            <div className={classes.Pin}></div>
            <div className={classes.Ruler01}></div>
            <div className={classes.Ruler02}></div>
        </div>
    </div>

);

export default layout;