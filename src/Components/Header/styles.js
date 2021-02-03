import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        backgroundColor: '#0E0F13',
        color: '#f6f5f5',
        paddingTop: '7px',
        fontFamily: '"Segoe UI"',
        height: '10vh',
        width: '100%',
        boxShadow: 'none',
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: 'right',
        alignItems: 'center',
    },    
    title: {
        flexGrow: 1,
        fontWeight:'bold',
        marginLeft: '5px',
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-around`,
        textDecoration: 'none'
    },
    navLink: {
        fontWeight: 'bold'
    },
    listItem: {
        color: '#f6f5f5',
        textDecoration: 'none',
        fontSize: '17px',
        fontWeight:'bold',
        marginRight: '25px',
        "&:hover": {
            color: '#bbbfca',
            transform: 'translateY(-2px)',
        }
    }, 
    drawerContainer: {
        padding: "20px 30px",
        marginTop: '25px'
    },
    drawerItem: {
        fontSize: '21px',
        color: '#111010',
        textDecoration: 'none',
        fontWeight: 'bold',
    }, 
    button: {
        color: '#ffff',
        fontWeight: 'bold',
        border: '1px solid #707070',
        padding: '10px',
        "&:hover": {
            backgroundColor: 'white',
            color: '#111010',
        }
    },
}));