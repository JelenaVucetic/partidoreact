import React from 'react';

import classes from './Works.css';
import Image1 from '../../../assets/images/radovi1.png';
import Image2 from '../../../assets/images/radovi2.png';
import Image3 from '../../../assets/images/radovi3.png';
import Image4 from '../../../assets/images/radovi4.png';

const works = () => (
    <div className={classes.Radovi}>
        <h1>Radovi</h1>
        <div className={classes.Images}>
            <div > <img src={Image1} alt='img' /> </div>
            <div> <img src={Image3} alt='img' /> </div>
            <div> <img src={Image2} alt='img' /> </div>
            <div> <img src={Image4} alt='img' /> </div>

        </div>
    </div>
);

export default works;