import React, { Component } from 'react';

import classes from './Partido.css';
import Video from '../../assets/videos/video.mp4'
class Partido extends Component {
    render() {
        return (
            <div>
                <div className={classes.Video}>
                    <video id="background-video" >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>o nama</div>
                <div>radovi</div>
                <div>kontakt</div>
            </div>

        );
    }
}

export default Partido;