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
                        <Box> <GitHubIcon className={classes.icon} />  </Box>
                        <Box> <LinkedInIcon className={classes.icon} /> </Box>
                        <Box> <InstagramIcon className={classes.icon} /> </Box>
                        <Box> <FacebookIcon  className={classes.icon}/> </Box>
                        <Box> <TwitterIcon className={classes.icon}/> </Box>
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
