import React from 'react';

import classes from './Footer.css';

const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.Info}>
            <h1>Kontakt</h1>
            <div className={classes.Meta}>
                <p>Vojislavljevica br.23</p>
                <p>81000 Podgorica, Crna Gora</p>
                <ul>
                    <li>+382 69 478 445</li>
                    <li>+32 69 637 074</li>
                    <li>partido@t-com.me</li>
                </ul>
            </div>
        </div>
        <div className={classes.Form}>
            <h2>Posalji poruku</h2>
            <form>
                <input type="text" name="name" placeholder="Ime i Prezime" />
                <input type="email" neme="email" placeholder="Email adresa" /> <br />
                <textarea type="text" name="text"> Poruka  </textarea> <br />
                <button>Posalji</button>
            </form>
        </div>
    </div>
);

export default footer;