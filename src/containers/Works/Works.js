import React, { Component } from 'react';

import classes from './Works.css';

import Footer from '../../components/WorksPage/Footer/Footer';
import Header from '../../components/WorksPage/Header/Header';

import Image1 from '../../assets/images/radovi1.png';
import Image2 from '../../assets/images/radovi2.png';
import Image3 from '../../assets/images/radovi3.png';
import Image4 from '../../assets/images/radovi4.png';

import Kitchen1 from '../../assets/images/kuhinja1.png';
import Kitchen2 from '../../assets/images/kuhinja2.png';
import Kitchen3 from '../../assets/images/kuhinja3.png';
import Kitchen4 from '../../assets/images/kuhinja4.png';

class Works extends Component {


    showImageHeandler = () => {

    }

    render() {
        return (
            <div>
                <Header />
                <h1>Radovi</h1>
                <div className={classes.Works}>
                        <div>
                            <img src={Image1} alt='img' />
                            <p>Poslovni prostor</p>
                        </div>
                        <div>
                            <img src={Image2} alt='img' />
                            <p>Kuhinje</p>
                        </div>
                        <div>
                            <img src={Image3} alt='img' />
                            <p>Plakari</p>
                        </div>
                        <div>
                            <img src={Image4} alt='img' />
                            <p>Spavace sobe</p>
                        </div>
                </div>
                <div className={classes.Shape}></div>
               
                <div className={classes.Kitchen}>
                    <h1>Kuhinje </h1>

                    <img src={Kitchen1} alt='img' />
                    <img src={Kitchen2} alt='img' />
                    <img src={Kitchen3} alt='img' />
                    <img src={Kitchen4} alt='img' />
                    <img src={Kitchen1} alt='img' />
                    <img src={Kitchen2} alt='img' />
                    <img src={Kitchen3} alt='img' />
                    <img src={Kitchen4} alt='img' />
                    <img src={Kitchen1} alt='img' />
                    <img src={Kitchen2} alt='img' />
                    <img src={Kitchen3} alt='img' />
                    <img src={Kitchen4} alt='img' />
                    <img src={Kitchen1} alt='img' />
                    <img src={Kitchen2} alt='img' />
                    <img src={Kitchen3} alt='img' />
                    <img src={Kitchen4} alt='img' />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Works;