import React from 'react';

import classes from './Footer.css';

const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.Divider}></div>
        <div className={classes.Pensil}></div>
        <div className={classes.Pin}></div>
        <div className={classes.Ruler01}></div>
        <div className={classes.Ruler02}></div>
        <div className={classes.Info} >
            <h1> Kontakt</h1>
            <h4>Vojislavljevica br.23</h4>
            <h4>81000 Podgorica, Crna gora</h4>
            <ul>
                <li>+382 69 478 445 </li>
                <li> 0382 69 673 074 </li>
                <li>partido@t-com.me</li>
                </ul>
        </div>
        <div className={classes.Form}>
            <h2>Posalji poruku</h2>
            <form>
                <input type="text" name="name" placeholder="Ime i Prezime" />
                <input type="email" neme="email" placeholder="Email adresa" /> <br />
                <textarea type="text" name="text"> Poruka  </textarea> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
);

export default footer;