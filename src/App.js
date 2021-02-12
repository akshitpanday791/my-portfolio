import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';



import useStyles from './styles';


const App = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <Header />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
