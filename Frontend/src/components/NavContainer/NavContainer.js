import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar/NavBar';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { styles } from '../../styles';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(styles);


export const NavContainer = ({isOpened,setIsOpened, apiKey}) => {
	const classes = useStyles();


	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<IconButton color="inherit" onClick={() => setIsOpened(!isOpened)} className={classes.icon}>
					{isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					<NavBar apiKey={apiKey} />
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavContainer;
