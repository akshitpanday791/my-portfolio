import React, {useState} from 'react';
import ModalDetails from './ModalDetails/ModalDetails';
import {Card, CardActionArea, CardContent, CardMedia, Grid} from '@material-ui/core';
import {Modal, Backdrop, Fade} from '@material-ui/core';
import Tag from './Tag';
import image from '../../../Assets/Profile.jpg';
import chatbot from '../../../Assets/chat.png';

import useStyles from './styles';

const ProjectCard = ({title, summary}) => {
    const classes = useStyles();
    const[open, setOpen] = useState(false);

    const modelOpenHandler = () => setOpen(true);
    const modelCloseHanlder = () => setOpen(false);

    return (
        <>
            <Card className={classes.root} onClick={modelOpenHandler}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={title}
                    height="200"
                    image={chatbot}
                    title={title}
                    />
                    <CardContent>
                    <h2 style={{fontWeight: 'bold', padding:'8px'}} >
                        {title}
                    </h2>
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


                </CardActionArea>
                
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={modelCloseHanlder}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <ModalDetails title={title} />
                </Fade>
            </Modal>
        </>
    );
};

export default ProjectCard;
