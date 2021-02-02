import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        background: '#111010',
        fontFamily: '"Segoe UI"',
        height: '90vh',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            height: '90vh',
        },
    },
    name: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
    },
    image: {
        objectFit: 'contain',
        marginTop: '30px',
        width: '360px',
        borderRadius: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '210px',
        },
    },
    item: {
        textAlign: 'Center',
        marginTop: '0'
    },
    caption: {
        color: '#f6f5f5',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
    },
    iconsContainer: {
        marginTop: '25px',
        marginBottom: '10px'
    },
    icon: {
        fontSize: '36px',
        marginLeft: '15px',
        "&:hover": {
            color: '#bbbfca',
            transform: 'translateY(-2px)',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
        },
    },
    button: {
        color: '#ffff',
        fontWeight: 'bold',
        border: '1px solid #707070',
        marginTop: '30px',
        marginBottom: '20px',
        padding: '12px',
        "&:hover": {
            backgroundColor: 'white',
            color: '#111010',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '8px',
            marginTop: '20px'
        },
    },
    downArrow: {
        color: '#111010',
        backgroundColor: '#ffff',
        fontSize: '46px',
        borderRadius: '50%',
        marginLeft: '48%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '45%',
            fontSize: '30px'
        },
        "&:hover": {
            backgroundColor: '#707070',
        },
    }
}));