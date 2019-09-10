import React from 'react';
import classes from './Layout.css';

import Nav from '../../components/Nav/Nav';

const layout = (props) => (

    <div>    
        <Nav />
        <main>
            {props.children}
        </main>      
    </div>

);

export default layout;