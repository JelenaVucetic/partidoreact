import React from 'react';
import classes from './Services.css';

const services = () => (
    <div className={classes.Services}>
        <div className={classes.Left}>
            <h1> Usluge </h1>
            <h2>Nas program cine: </h2>
            <ul>
                <li>Kuhinje</li>
                <li>Plakari</li>
                <li>Spavace sobe</li>
                <li>Kancelarijski namjestaj</li>
                <li>Masiv</li>
                <li>Lakiranje svih vrta drveta i medijapana u visokom sjaju</li>
            </ul>
            <p> Pored nase osnovne djelatnosti, bavimo se jos i projektovanjem i opremanjem razlicitih tipova enterijera poput:</p>
            <ul>
                <li>Stanova</li>
                <li>Kuca</li>
                <li>Poslovnih prostora</li>
                <li>Ugostiteljskih objekata-hotela i restorana</li>
                <li>Masiv</li>
                <li>Lakiranje svih vrta drveta i medijapana u visokom sjaju</li>
            </ul>
            <p>Imali smo tu cast i zadovoljstvo da do danas opremimo veliki broj najrazlicitijih objekata i steknemo bogato iskustvo u ovome poslu. Nas profesionalni tim je tu da Vam pomogneda pronadjete najbolje fnkcionalno i estetsko rjesenje za prostor kojim raspolazete, odnosno za opremanje istog modernim elementima i namjestajem.</p>
        </div>
        <div className={classes.Right}>
            <ul>
                <li>Projektovanje</li>
                <li>Proizvodnja</li>
                <li>Usluzno lakiranje</li>
                <li>Montaza</li>
            </ul>
        </div>


    </div>
);

export default services;