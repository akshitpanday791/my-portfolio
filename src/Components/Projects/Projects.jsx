import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import {Grid} from '@material-ui/core';

import useStyles from './styles';

const Projects = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="projects">
            <h2 className={classes.title}><u>CHECK OUT SOME OF MY PROJECTS</u></h2>
            <Grid container justify="center" align="center">
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard title="Crime Registering Chabot" summary="Provides the environment of chatting based Crime Registration for victims. Victim will be able to register his/her complaint by chatting with chatbot, which gives victim a real time crime registration experience just like in police station." />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard title="Crime Registering Chabot" summary="Prototype of Efficient Chabot for Crime Registration Purpose. Provides the environment of chatting based Crime Registration for victims" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard title="Crime Registering Chabot" summary="Prototype of Efficient Chabot for Crime Registration Purpose. Provides the environment of chatting based Crime Registration for victims" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard title="Crime Registering Chabot" summary="Prototype of Efficient Chabot for Crime Registration Purpose. Provides the environment of chatting based Crime Registration for victims" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard title="Crime Registering Chabot" summary="Prototype of Efficient Chabot for Crime Registration Purpose. Provides the environment of chatting based Crime Registration for victims" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Projects;
