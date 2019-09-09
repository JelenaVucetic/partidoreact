import React, { Component } from 'react';

import classes from './Partido.css';
import Video from '../../assets/videos/video.mp4'
import Works from '../../components/Works/Works';
import Services from '../../components/Services/Services';
import AboutUs from '../../components/AboutUs/AboutUs';

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
                    <AboutUs />
                <div>
                    <Services />
                </div>
                <div>
                    <Works />
                </div>
            </div>
        

        );
    }
}

export default Partido;