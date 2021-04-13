import React, {useState,useEffect, useRef} from 'react';
import Window from './Window/Window';
import {Card, CardActionArea, CardContent, CardMedia, Button, Typography, List, ListItem} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {Dialog, DialogContent} from '@material-ui/core';
import Tag from './Tag';
import LanguageIcon from '@material-ui/icons/Language';

import useStyles from './styles';

const ProjectCard = ({title, date, coverImage ,summary, description,features, tags, github}) => {
    console.log(github);
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
                    <CardMedia component="img" alt={title} height="175" image={coverImage} title={title} />
                    <CardContent>
                    <h2 style={{fontWeight: 'bold', padding:'2px', paddingBottom:'5px'}} >{title} </h2>
                    <p style={{fontWeight: 'bold', fontSize:'14px', color:'lightGray'}}> {date} </p>
                    <p style={{ fontSize:'13px', padding: '1px', textAlign: 'left', fontWeight: '550', lineHeight:'1.5'}}>{summary}</p>
                    </CardContent>
                    
                    <h4>Technologies Used</h4>
                    <div className={classes.tagContainer}>
                        {
                            tags.map((tag) => <Tag key={tag} name={tag} /> )
                        }
                        
                    </div>
                </CardActionArea>
                <Button style={{ color:'white', marginBottom: '5px'}}>Click for more info</Button>
            </Card>
            <Dialog classes={{ paper: classes.dialogPaper }} open={open} onClose={handleClose} scroll={'paper'} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">

                <DialogContent className={classes.content}>
                        <div style={{width:'100%', display:'flex'}}> <div style={{marginLeft:'auto'}}><CloseIcon onClick={handleClose} /></div> </div>
                        <Window className={classes.window}>
                            <h2 className={classes.windowTitle}>{title}</h2>
                            <p className={classes.windowText}>
                                <Typography component="p">{summary}</Typography>
                                <Typography component="p">
                                    {description}
                                </Typography>
                            </p>
                            <Typography style={{marginLeft: '8px'}} variant="h6">Key Features</Typography>
                            <ul style={{marginLeft: '15px'}} className={classes.windowText}>
                                {features.map((feature,i) => <li key={i}>{feature}</li>)}
                            </ul>
                        </Window>
                        <div style={{marginTop:'10px',display:'flex',justifyContent:'center',}}> <a href={github? github : '/'} target="_blank"> <i style={{marginRight:'8px'}} className="fab fa-github fa-2x" /> </a></div> 
                </DialogContent>
            </Dialog>
            
        </div>
    );
};

export default ProjectCard;

