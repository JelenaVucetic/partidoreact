import React from 'react';

import classes from './Video.css';
import Video from '../../assets/videos/video.mp4';

const video = () => (

    <div className={classes.Video}>
        <video>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
    </div>
);

export default video;