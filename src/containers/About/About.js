import React, { Component } from 'react';

import classes from './About.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/AboutPage/Header/Header';
import Video from '../../components/Video/Video';
import TimImg from '../../assets/images/tim.png';

class About extends Component {

    render() {
        return (
            <div>
                <Header />
                <Video />
                <div className={classes.About}>
                    <h1>O nama </h1>
                    <p>Fabrika namjestaja "Partido" nalazi se na adresi Vojislavljevica broj 23 u Podgorici. Nas prodajni objekat specijalizovan je za prodaju namjestaja na osnovu porudzbine, u zeljenim dimenzijama, bojama i dezenima. Iza nas je dugogodisnje iskustvo u radu i veliki broj zadovoljnih kupaca cije smo zivotno okruzenje opremili vrhunskim namjestajem, prepoznatljivog kvaliteta.</p>
                    <p>Proizvodnja, projektovanje i prodaja namjestaja razlicitih stilova i namjene, omogucila nam je da stvorimo prepoznatljivo ime u oblasti naseg radai postanemo izbor broj jedan svih onih koji znaju da prepoznaju i cijene kvalitet.</p>
                </div>
               
                <div className={classes.Team}>
                    <h1>Tim</h1>
                    <div className={classes.Member1}>
                        
                        <img src={TimImg} alt='img' />
                        <h2> <strong>Miroslav</strong> Jeknic <br /> Direktor</h2>
                        
                        <p>+389 69 2330478</p>
                        <p>miroslav@t-com.me</p>
                    </div>
                    <div className={classes.Member2}>
                 
                        <img src={TimImg} alt='img' />
                        <h2> Miroslav Jeknic</h2>
                        <p>Direktor</p>
                        <p>+389 69 2330478</p>
                        <p>miroslav@t-com.me</p>
                    </div>
                    <div className={classes.Member3}>
                        
                        <img src={TimImg} alt='img' />
                        <h2> Miroslav Jeknic</h2>
                        <p>Direktor</p>
                        <p>+389 69 2330478</p>
                        <p>miroslav@t-com.me</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;