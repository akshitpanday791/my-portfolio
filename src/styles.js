import { makeStyles } from '@material-ui/core/styles';
import background from './Assets/header-background.jpg';

export default makeStyles((theme) => ({
    container: {
        backgroundSize: 'cover',
        objectFit: 'contain center',
        backgroundImage : `url(${background})`,
        backgrundPosition: 'center center',
    }
}));