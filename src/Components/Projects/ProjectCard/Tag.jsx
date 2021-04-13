import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '3px',
        padding: '6px',
        fontWeight: 'bold',
        borderRadius: '20px',
        backgroundColor:'#0066CC',
    }
  }));

const Tag = ({name}) => {
    const classes = useStyles();
    return (
        <span className={classes.root}>
            {name}
        </span>
    );
};

export default Tag;
