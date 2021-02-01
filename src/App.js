import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
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
                <Projects />
                <Contact />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
