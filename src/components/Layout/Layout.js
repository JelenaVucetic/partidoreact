import React from 'react';
import classes from './Layout.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const layout = (props) => (

    <div>
        <Header />
        <div className={classes.Ruler1} ></div>
        <div className={classes.Ruler2} ></div>
        <main>
            {props.children}
        </main>
        <Footer />
        
    </div>

);

export default layout;