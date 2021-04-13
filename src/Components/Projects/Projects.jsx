import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import {Grid} from '@material-ui/core';
import data from '../../data/projectsData.json';

import chatbot from '../../Assets/chat.png';
import ecommerce from '../../Assets/ecommerce.png';
import tasks from '../../Assets/task-management.png';
import mail from '../../Assets/mail.png';
import me from '../../Assets/portfolio.png';
import expense from '../../Assets/expense.png';

import useStyles from './styles';

const background = [chatbot, ecommerce,tasks, me, expense, mail];

const Projects = () => {
    const classes = useStyles();
    

    return (
        <div className={classes.root} id="projects">
            <h2 className={classes.title}><u>CHECK OUT SOME OF MY PROJECTS</u></h2>
            <Grid container direction="row"  justify="space-evenly" align="center">
                {
                    
                    data.projects.map((data,i) => {
                        return (
                            <Grid key={data.sr} item xs={12} sm={6} lg={4}>
                                <ProjectCard 
                                title={data.title}
                                coverImage={background[i]}
                                date={data.date} 
                                summary={data.summary}
                                description={data.description}
                                features={data.features}
                                tags={data.tags}
                                github={data.github}
                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
           
                {/* <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard 
                        title="Crime Registering Chabot"
                        date="Augest 2020" 
                        summary="Provides the environment of chatting based Crime Registration for victims. Victim will be able to register his/her complaint by chatting with chatbot, which gives victim a real time crime registration experience just like in police station." 
                        description="kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
                        />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard 
                        title="Crime Registering Chabot" 
                        date="Augest 2020"
                        summary="Prototype of Efficient Chabot for Crime Registration Purpose. Provides the environment of chatting based Crime Registration for victims" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard 
                        title="Crime Registering Chabot" 
                        date="Augest 2020"
                        summary="Prototype of Efficient Chabot for Crime Registration Purpose. Provides the environment of chatting based Crime Registration for victims" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard 
                        title="Crime Registering Chabot" 
                        date="Augest 2020"
                        summary="Prototype of Efficient Chabot for Crime Registration Purpose. Provides the environment of chatting based Crime Registration for victims" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProjectCard 
                        title="Crime Registering Chabot" 
                        date="Augest 2020"
                        summary="Prototype of Efficient Chabot for Crime Registration Purpose. Provides the environment of chatting based Crime Registration for victims" />
                </Grid> */}
            
        </div>
    );
};

export default Projects;
