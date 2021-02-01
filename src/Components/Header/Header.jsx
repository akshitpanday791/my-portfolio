import React, {useState, useEffect} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import {AppBar, Toolbar, Typography, Button, IconButton, Drawer, MenuItem, Container, List, ListItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    const[state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const{mobileView, drawerOpen} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
              ? setState((prevState) => ({ ...prevState, mobileView: true }))
              : setState((prevState) => ({ ...prevState, mobileView: false }));
        }

        setResponsiveness();
        window.addEventListener("resize", () =>  setResponsiveness());
    },[]);

    const displayDesktop = () => {
        return(
            <Toolbar>
                <Container className={classes.navbarDisplayFlex}>
                    <Typography variant="h4" className={classes.title}>Portfolio</Typography>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        <Link smooth to="#" className={classes.listItem}> <ListItem button>HOME</ListItem> </Link>
                        <Link smooth to="#about" className={classes.listItem}> <ListItem button>ABOUT</ListItem> </Link>
                        <Link smooth to="#projects" className={classes.listItem}> <ListItem button>PROJECTS</ListItem> </Link>
                        <Link smooth to="#blog" className={classes.listItem}> <ListItem button>BLOG</ListItem> </Link>
                        <Link smooth to="#contact" className={classes.listItem}> <ListItem button>CONTACT</ListItem> </Link>
                    </List>
                </Container>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () => setState((prevState) => ({...prevState, drawerOpen: false}));

        return(
            <Toolbar>
                <IconButton color="inherit" edge="start" onClick={handleDrawerOpen} aria-haspopup="true"> <MenuIcon /> </IconButton>
                <Typography variant="h5" className={classes.title}>Portfolio</Typography>
                <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                    <div className={classes.drawerContainer}>
                        <MenuItem> HOME </MenuItem>
                        <MenuItem> ABOUT </MenuItem>
                        <MenuItem> PROJECTS </MenuItem>
                        <MenuItem> BLOG </MenuItem>
                        <MenuItem> CONTACT </MenuItem>
                    </div>
                </Drawer>  
            </Toolbar>
        )
    
    }

    return (
        <header>
            <AppBar className={classes.root} position="static">
                {mobileView? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
};

export default Header;
