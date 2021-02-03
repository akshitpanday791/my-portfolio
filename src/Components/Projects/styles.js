import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        fontFamily: '"Segoe UI"',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2%',
            marginRight: '2%',
        },
    },
    title: {
        textAlign: 'center',
        margin: '50px',
    }

}));