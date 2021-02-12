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
      marginLeft:'10px',
      marginTop: '5px',
      flexFlow: 'wrap',
    },
    dialogPaper: {
      minWidth:'60%',
      maxWidth:'60%',
      [theme.breakpoints.down('sm')]: {
        minWidth: '95%',
        maxWidth: '95%',
        height: '75%',  
      },
    },
    window: {
      margin: '50px',
      width: '100%',
    },
    windowText: {
      fontFamily: '"Segoe UI"',
      fontWeight:'600',
      fontSize: '16px',
      padding: '15px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    windowTitle: {
      paddingTop: '10px',
      paddingLeft: '15px',
      fontFamily: '"Segoe UI"',
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize:'20px',  
      },
    }

}));