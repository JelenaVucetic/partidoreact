import React from 'react';
import classes from './Layout.css';

const layout = (props) => (

    <div>
        <div className={classes.Header}> Header, navigation</div>
        <main>
            {props.children}
        </main>
        <div>
            footer
        </div>
    </div>

);

export default layout;