import React from 'react';
import Window from './Window/Window';
import {Grid} from '@material-ui/core';
import data from '../../data/about.json';

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
                        <h3 className={classes.intro}>{data.headline}</h3>
                        <p className={classes.info}>{data.info}</p>
                    </Window>
                </Grid>

                <Grid item xs={false} sm={2}>
            
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
