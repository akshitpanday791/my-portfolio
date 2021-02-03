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
        flexGrow:'1',
        marginBottom: '50px',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    tagContainer: {
      display:'flex',
      flexDirection: 'row',
      marginTop:'10px',
      marginBottom:'10px',
      flexFlow: 'wrap',
    }
}));