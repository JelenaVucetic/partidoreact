import React, { Component } from 'react';

import classes from './Service.css';

import Footer from '../../components/ServicePage/Footer/Footer';
import Header from '../../components/ServicePage/Header/Header';
class Service extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className={classes.Service}>
                    <div className={classes.Left}>
                    <h1>Usluge</h1>
                    <h2>Nas program cine:</h2>
                    <ul>
                        <li>Kuhinje</li>
                        <li>Plakari</li>
                        <li>Spavace sobe</li>
                        <li>Kancelarijski namjestaj</li>
                        <li>Masiv</li>
                        <li>Lakiranje svih vrsta drveta i medijapana u visokom sjaju</li>
                    </ul>
                    <p>Pored nase osnovne djelatnosti, bavimo se jos i projektovanjem i <br /> opremanjem razlicitih tipova enerijera poput:</p>
                    <ul>
                        <li>Stanova</li>
                        <li>Kuca</li>
                        <li>Poslovnih prostora</li>
                        <li>Ugostiteljskih objekata - hotela i restorana</li>
                    </ul>
                    </div>
                    </div>
                <div className={classes.Right}>
                    <p> Imali smo tu cast i zadovoljstvo da do danas opremimo veliki broj najrazlicitijih objekata i steknemo bogato iskustvou u ovom poslu.</p>
                    <p> Nas profesionalni tim je tu da Vam pomogne da pronadjete najbolje funkcionalno i estetsko rjesenje za prostor kojim raspolazete, odnosno za opremanje istog  modernim elementima i namjestajem.</p>
                </div>
                <div className={classes.Projektovanje}>
                    <h1>1.Projektovanje</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={classes.Proizvodnja}>
                    <h1>1.Proizvodnja</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={classes.Prevoz}>
                    <h1>1.Prevoz i Montaza</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={classes.Lakiranje}>
                    <h1>1.Usluzno Lakiranje</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Service;