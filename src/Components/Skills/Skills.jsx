import React from 'react';
import {Box, Grid} from '@material-ui/core';

import mongodb from '../../Assets/MongoDB.png';
import mui from '../../Assets/mui.png';
import firebase from '../../Assets/firebase.png';
import java from '../../Assets/java.png'

import useStyles from './styles';
const Skills = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}><h2 className={classes.title}><u>My Skills</u></h2></Grid>
            </Grid>

            <Grid className={classes.container} container justify="center" spacing={4}>
        
                <Grid  item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i className="fab fa-html5 fa-3x red_html"></i>
                        <p className={classes.name}>HTML 5</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i className="fab fa-css3-alt fa-3x blue_css"></i>
                        <p className={classes.name}>CSS 3</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i  className="fab fa-bootstrap fa-3x blue_bootstrap"></i>
                        <p className={classes.name}>Bootstrap</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i  className="fab fa-js fa-3x yellow_javascript"></i>
                        <p className={classes.name}>JavaScript</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i style={{backgroundColor: '#1F1F1F'}} className="fab fa-react fa-3x blue_react "></i>
                        <p className={classes.name}>React</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i className="fab fa-java fa-3x"></i>
                        <p className={classes.name}>Java</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i className="fab fa-android fa-3x green_android"></i>
                        <p className={classes.name}>Android</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i className="fab fa-node fa-3x"></i>
                        <p className={classes.name}>Node.js</p>
                    </Box>
                </Grid>
                
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <i className="fab fa-github fa-3x"></i>
                        <p className={classes.name}>Git/Github</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <img className={classes.icon} src={mui} alt="" />
                        <p className={classes.name}>Material-UI</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <img className={classes.icon} src={firebase} alt="" />
                        <p className={classes.name}>Firebase</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <img className={classes.icon} src={mongodb} alt="" />
                        <p className={classes.name}>mongoDB</p>
                    </Box>
                </Grid>

            </Grid>
        </div>
    );
};

export default Skills;
