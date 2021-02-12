import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        backgroundColor: '#222831',
        fontFamily: '"Segoe UI"',
        color: 'white',
        overflowX: 'hidden'
    },
    title: {
        textAlign: 'Center',
        marginTop: '50px',
        marginBottom: '50px',
    },
    icon: {
        height: '40px',
    },
    name: {
        textAlign: 'Center',
    },
    container: {
        marginBottom: '100px',
        paddingLeft: '15%',
        paddingRight: '15%',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '75px',
        },
    }

}));