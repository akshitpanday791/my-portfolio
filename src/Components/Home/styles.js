import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../Assets/header-background.jpg';

export default makeStyles((theme) => ({
    root: {
        backgroundSize: 'cover',
        objectFit: 'contain center',
        backgroundImage : `url(${backgroundImage})`,
        backgrundPosition: 'center center',
        fontFamily: '"Segoe UI"',
        height: '92vh',
        color: 'white',
    },
    name: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
        },
    },
    image: {
        objectFit: 'contain',
        marginTop: '50px',
        height: '375px',
        borderRadius: '50%',
        [theme.breakpoints.down('sm')]: {
            height: '250px',
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
    },
    icon: {
        fontSize: '36px',
        marginLeft: '10px',
        padding: '6px',
        borderRadius: '50%',
        "&:hover": {
            color: '#111010',
            backgroundColor: 'white'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
        },
    },
    button: {
        color: '#ffff',
        fontWeight: 'bold',
        border: '2px solid #707070',
        marginTop: '30px',
        marginBottom: '20px',
        padding: '12px',
        "&:hover": {
            backgroundColor: 'white',
            color: '#111010',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
            marginTop: '20px'
        },
    },
    downArrow: {
        color: '#111010',
        backgroundColor: '#ffff',
        fontSize: '46px',
        borderRadius: '50%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px'
        },
        "&:hover": {
            backgroundColor: '#707070',
        },
    },
    arrowLink: {
        marginLeft: '50%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '45%'
        },
    }
}));