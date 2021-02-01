import React from 'react';

import useStyles from './styles';

const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="contact">
            <h1>Contact</h1>
        </div>
    );
};

export default Contact;
