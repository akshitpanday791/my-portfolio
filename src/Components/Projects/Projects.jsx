import React from 'react';

import useStyles from './styles';

const Projects = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="projects">
            <h1>Projects</h1>
        </div>
    );
};

export default Projects;
