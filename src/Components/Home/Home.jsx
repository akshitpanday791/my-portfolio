import React, {useState, useEffect} from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import {Grid, Typography, Box, Button, Tooltip} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import myimage from '../../Assets/Profile.jpg';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();


    return (
        <React.Fragment id="#">
        <Grid container className={classes.root} alignItems="center" spacing={0} >
            <Grid xs={12} sm={6} item className={classes.item} alignItems="center">
                <img className={classes.image} src={myimage} alt="" />
                <Box className={classes.iconsContainer} display="flex" flexDirection="row" justifyContent="center">
                    <Box> <GitHubIcon className={classes.icon} />  </Box>
                    <Box> <LinkedInIcon className={classes.icon} /> </Box>
                    <Box> <InstagramIcon className={classes.icon} /> </Box>
                    <Box> <FacebookIcon  className={classes.icon}/> </Box>
                    <Box> <TwitterIcon className={classes.icon}/> </Box>
                </Box>
            </Grid>
            <Grid xs={12} sm={6} item className={classes.item}>
                <Typography className={classes.name} variant="h2" component="h2">Akshit Panday</Typography>
                <Typography className={classes.caption} variant="h5" component="h5">
                    <TypistLoop interval={500}>
                        {[
                            'Web Developer',
                            'Computer Science Engineer',
                            'Programmer',
                        ].map(text => <Typist key={text} startDelay={500}>{text} <Typist.Backspace count={text.length + 1} delay={200} /> </Typist>)}
                    </TypistLoop>
                </Typography>
                <Button className={classes.button}> Download Resume</Button>
            </Grid>
            <KeyboardArrowDownIcon className={classes.downArrow} />
        </Grid>
        </React.Fragment>
    );
};

export default Home;
