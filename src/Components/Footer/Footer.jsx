import React from 'react';
import Form from './Form/Form';
import {Grid, Box} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="footer">
            <Grid container >

                <Grid item sm={1}></Grid>
                <Grid item xs={12} sm={5}>
                    <h2 style={{color:'white', textAlign: 'center',padding:'20px'}}>Contact Me</h2>
                    <Form />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <h2 style={{color:'white', textAlign: 'center',padding:'25px'}}>Around the Web</h2>
                    <Box className={classes.iconsContainer} display="flex" flexDirection="row" justifyContent="center">
                        <Box> <a href="https://github.com/unscrewedakshit" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <GitHubIcon className={classes.icon} /> </a> </Box>
                        <Box> <a href="https://www.linkedin.com/in/akshitpanday/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <LinkedInIcon className={classes.icon} /> </a> </Box>
                        <Box> <a href="https://www.instagram.com/unscrewed_akshit/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <InstagramIcon className={classes.icon} /> </a></Box>
                        <Box> <a href="https://www.facebook.com/viper.akshit/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <FacebookIcon  className={classes.icon}/> </a> </Box>
                        <Box> <a href="https://twitter.com/unscrewedakshit" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <TwitterIcon className={classes.icon}/> </a> </Box>
                    </Box>
                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>

            <Grid container justify="center">
                <Grid item xs={12}>
                    <p className={classes.footer__copyRight}>Copyright © <b>Akshit Panday</b> </p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
