import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    input: {
        width: '60%',
    },
    button: {
        width: '60%',
        borderRadius:'5px',
        backgroundColor: '#222831',
        color: 'white',
        marginTop: '15px',
        marginBottom: '15px',
        border: '1px solid white',
        "&:hover": {
            backgroundColor: 'white',
            color: '#111010',
        }
    }
}));