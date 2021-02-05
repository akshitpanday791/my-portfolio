import React, {useState,useEffect, useRef} from 'react';
import Window from './Window/Window';
import {Card, CardActionArea, CardContent, CardMedia, Button} from '@material-ui/core';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import Tag from './Tag';
import image from '../../../Assets/Profile.jpg';
import chatbot from '../../../Assets/chat.png';

import useStyles from './styles';

const ProjectCard = ({title, summary}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    return (
        <div>
            <Card className={classes.root} onClick={handleClickOpen()}>
                <CardActionArea>
                    <CardMedia component="img" alt={title} height="200" image={chatbot} title={title} />
                    <CardContent>
                    <h2 style={{fontWeight: 'bold', padding:'8px'}} >{title} </h2>
                    <p style={{fontWeight: 'bold', fontSize:'16px', color:'#f5f4f4'}}>Augest 2020</p>
                    <p style={{ fontSize:'15px', padding: '5px', textAlign: 'left', fontWeight: '550', lineHeight:'1.6'}}>{summary}</p>
                    </CardContent>
                    
                    <h2>Technologies Used</h2>
                    <div className={classes.tagContainer}>
                        <Tag name="Javascript" />
                        <Tag name="Parcel Bundler" />
                        <Tag name="NLP" />
                        <Tag name="Firebase" />
                        <Tag name="Bootstrap" />
                    </div>
                    <Button style={{ color:'white', marginBottom: '5px'}}>More info</Button>
                </CardActionArea>
            </Card>
            <Dialog classes={{ paper: classes.dialogPaper }} open={open} onClose={handleClose} scroll={'paper'} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">

                <DialogContent className={classes.content}>
                        <Window className={classes.window}>
                            <img src={chatbot} style={{width:'50%',objectFit:'contain'}} alt="" />
                        </Window> 
                        <h2>{title}</h2>
                        <p>
                        Prototype of Efficient Chabot for Crime Registration Purpose

Provides the environment of chatting based Crime Registration for victims. Victim will be able to register his/her complaint by chatting with chatbot, which gives victim a real time crime registration experience just like in police station.Prototype of Efficient Chabot for Crime Registration Purpose

Provides the environment of chatting based Crime Registration for victims. Victim will be able to register his/her complaint by chatting with chatbot, which gives victim a real time crime registration experience just like in police station.Prototype of Efficient Chabot for Crime Registration Purpose

Provides the environment of chatting based Crime Registration for victims. Victim will be able to register his/her complaint by chatting with chatbot, which gives victim a real time crime registration experience just like in police station.Prototype of Efficient Chabot for Crime Registration Purpose

Provides the environment of chatting based Crime Registration for victims. Victim will be able to register his/her complaint by chatting with chatbot, which gives victim a real time crime registration experience just like in police station.
                        </p>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions> */}
            </Dialog>
            
        </div>
    );
};

export default ProjectCard;

