import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import {Grid, Typography, Box, Button} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import myimage from '../../Assets/Profile.jpg';
import useStyles from './styles';
import './Home.css';

const Home = () => {
    const classes = useStyles();


    return (
        <div id="#">
        <Grid container className={classes.root} alignItems="center" spacing={0} >
            <Grid xs={12} sm={6} item className={classes.item}>
                <img className={classes.image} src={myimage} alt="" />
                <Box className={classes.iconsContainer} display="flex" flexDirection="row" justifyContent="center">
                    <Box> <a href="https://github.com/unscrewedakshit" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <GitHubIcon className={classes.icon} /> </a> </Box>
                    <Box> <a href="https://www.linkedin.com/in/akshitpanday/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <LinkedInIcon className={classes.icon} /> </a> </Box>
                    <Box> <a href="https://www.instagram.com/unscrewed_akshit/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <InstagramIcon className={classes.icon} /> </a></Box>
                    <Box> <a href="https://www.facebook.com/viper.akshit/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <FacebookIcon  className={classes.icon}/> </a> </Box>
                    <Box> <a href="https://twitter.com/unscrewedakshit" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <TwitterIcon className={classes.icon}/> </a> </Box>
                </Box>
            </Grid>
            <Grid xs={12} sm={6} item className={classes.item}>
                <Typography className={classes.name} variant="h2" component="h2">Akshit Panday</Typography>
                <Typography className={classes.caption} variant="h5" component="h5">
                    <TypistLoop interval={500}>
                        {[
                            'Web Developer',
                            'Computer Science Student',
                            'Programmer',
                        ].map(text => <Typist key={text} startDelay={500}>{text} <Typist.Backspace count={text.length + 1} delay={200} /> </Typist>)}
                    </TypistLoop>
                </Typography>
                <Button href="https://drive.google.com/file/d/1LuVx4T3uZrqZNYeybeLj-dG0HpuF9RM8/view?usp=sharing" target="__blank" className={classes.button}><GetAppIcon/>&nbsp; Download Resume</Button>
                
            </Grid>
            <Link className={classes.arrowLink} smooth to="#about"> <KeyboardArrowDownIcon className={classes.downArrow} /> </Link>
        </Grid>
        </div>
    );
};

export default Home;
