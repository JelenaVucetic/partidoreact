import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import classes from './Main.css';
import Video from '../../assets/videos/video.mp4'
import Works from '../../components/StartingPage/Works/Works';
import Services from '../../components/StartingPage/Services/Services';
import AboutUs from '../../components/StartingPage/AboutUs/AboutUs';

import Header from '../../components/StartingPage/Header/Header';
import Footer from '../../components/StartingPage/Footer/Footer';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
            <div className={classes.Main}>
              
                <div>
                    <video>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <AboutUs />
                <div>
                    <Services />
                </div>
                <div>
                    <Works />
                </div>
        
            </div>
                <Footer />
                </div>
        );
    }
}

export default Main;