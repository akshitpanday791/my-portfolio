import React from 'react';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="about">
            <h1>About Me</h1>
        </div>
    );
};

export default About;
