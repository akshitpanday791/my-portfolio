import React from 'react';
import Window from './Window/Window';
import {Grid} from '@material-ui/core';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="about">
            <h2 className={classes.title}><u>ABOUT ME</u></h2>
            <Grid container alignItems="center" justify="center" spacing={0}>
                <Grid item xs={false} sm={2}>

                </Grid>

                <Grid item xs={12} sm={8} className={classes.window}>
                    <Window>
                        <h3 className={classes.intro}>Hi :)</h3>
                        <p className={classes.info}>👋I'm Akshit Panday from Nagpur, India. I am a Web Developer and Programmer currently pursing a Bachelors Degree in 
                        Computer Science. After my graduation I'm interested in working in some reputed IT-company for my
                        professional as well as personal growth. I'm a Tech enthusiast who loves to build full stack Web apps & Mobile apps, Open source contributions and to explore latest frameworks and technologies in field of Computer Science.  Apart from this I like to play online video games
                            and travelling.</p>
                    </Window>
                </Grid>

                <Grid item xs={false} sm={2}>
            
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
