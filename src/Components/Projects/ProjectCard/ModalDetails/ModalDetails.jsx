import React from 'react';
import Window from '../../../About/Window/Window';

import useStyles from './styles';

const ModalDetails = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <Window>
                
            </Window>
            <h2 id="transition-modal-title">{title}</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
        </div>
    );
};

export default ModalDetails;
