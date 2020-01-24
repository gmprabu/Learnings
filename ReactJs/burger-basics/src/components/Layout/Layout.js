import React from 'react';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <React.Fragment>
            <div>Tool bar, side bar, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default layout;