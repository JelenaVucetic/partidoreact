import React, { Component } from 'react';

import classes from './Partido.css';
import Video from '../../assets/videos/video.mp4'
class Partido extends Component {
    render() {
        return (
            <div className={classes.Main}>
                <div>
                    <video>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={classes.Content}>
                    <h1> O nama</h1>
                    <p>Fabrika namještaja „Partido“ nalazi se na adresi Vojislavljevića broj 23 u Podgorici. Nas prodajni objekat specijalizovan je za prodaju namjestaja na osnovu porudzbine, u zeljenim dimenzijama, bojama i dezenima. Iza nas je dugogodisnje iskustvo u radu i veliki broj zadovoljnih kupaca cije smo zivotno okruzenje opremili vrhunskim namjestajem, prepoznatljivog kvaliteta.</p>
                    <button> Detaljnije </button>
                </div>
                <div>
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
                </div>
                <div className={classes.Radovi}>
                    <h1>Radovi</h1>
                    <div>
                        <div className={classes.Centar}> </div>
                        <div className={classes.Img2}> </div>
                        <div className={classes.Img3}> </div>
                        <div className={classes.Img4}> </div>
                       
                </div>
                </div>
            </div>

        );
    }
}

export default Partido;