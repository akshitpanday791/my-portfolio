import React from 'react';
import Window from './Window/Window';
import {Grid} from '@material-ui/core';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="about">
            <h1 className={classes.title}>ABOUT ME</h1>
            <Grid container alignItems="center" justify="center" spacing={0}>
                <Grid item xs={0} sm={2}>

                </Grid>

                <Grid item xs={12} sm={8} className={classes.window}>
                    <Window>
                        <h3 className={classes.intro}>Hi :)</h3>
                        <p className={classes.info}>👋I'm Akshit Panday from Nagpur, India. I am a Web Developer and Programmer currently pursing a Bachelors Degree in 
                        Computer Science. After my graduation I'm interested in working in some reputed IT-company for my
                        professional as well as personal growth. I love to build Web apps & Mobile apps and
                            to explore latest technologies and frameworks in field of Computer Science.<br /> <br /> My hobbies are to play 
                        cricket, playing online video games, watching movies/web-series, making memes & Travelling.</p>
                    </Window>
                </Grid>

                <Grid item xs={0} sm={2}>
            
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
