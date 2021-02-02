import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        fontFamily: '"Segoe UI"',
        height: '75vh',
        paddingTop: '10vh',
        [theme.breakpoints.down('sm')]: {
           paddingTop: '10px',
           height: '100vh',
        },
    },
    title: {
        marginTop: '15px',
        marginBottom: '50px',
        textAlign: 'Center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '60px',
            marginBottom: '10px',
            fontSize: '20px'
        },
    },
    info: {
        fontSize: '20px',
        fontWeight: '450',
        paddingTop: '15px',
        paddingBottom: '75px',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '20px',
            fontSize: '16px'
        },
    },
    window: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%',
        },
    },

}));