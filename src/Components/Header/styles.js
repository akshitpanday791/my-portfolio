import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        backgroundColor: '#0E0F13',
        color: '#f6f5f5',
        paddingBottom:'5px',
        fontFamily: '"Segoe UI"',
        height: '8vh',
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
        fontSize:'25px',
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
        fontSize: '16px',
        fontWeight:'bold',
        marginRight: '20px',
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