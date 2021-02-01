import React from 'react';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Footer</h1>
        </div>
    );
};

export default Footer;
