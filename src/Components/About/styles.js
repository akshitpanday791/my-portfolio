import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        fontFamily: '"Segoe UI"',
        paddingBottom: '75px',
        paddingTop: '10vh',
        [theme.breakpoints.down('sm')]: {
           paddingTop: '10px',
           paddingBottom: '50px',
        },
    },
    title: {
        color:'#222831',
        marginTop: '15px',
        marginBottom: '50px',
        textAlign: 'Center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '70px',
            marginBottom: '20px',
            fontSize: '25px'
        },
    },
    info: {
        fontSize: '18px',
        color: '#222831',
        fontWeight: '500',
        paddingTop: '15px',
        paddingBottom: '50px',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '20px',
            fontSize: '17px'
        },
    },
    window: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%',
        },
    },

}));