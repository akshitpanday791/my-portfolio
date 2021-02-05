import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        fontFamily: '"Segoe UI"',
        width: '375px',
        "&:hover": {
            transition: 'transform .2s',
            transform: 'scale(1.01);',
        },
        [theme.breakpoints.down('sm')]: {
          width: '95%'
        },
        backgroundColor:'#2C3E50',
        color:'white',
        borderRadius: '20px',
        marginBottom: '50px',
    },
    tagContainer: {
      display:'flex',
      flexDirection: 'row',
      pading:'10px',
      marginTop: '5px',
      flexFlow: 'wrap',
    },
    dialogPaper: {
      minHeight: '80vh',
      maxHeight: '80vh',
      minWidth: '70%',
      maxWidth: '70%',
    },
    window: {
      margin: '50px',
    }

}));