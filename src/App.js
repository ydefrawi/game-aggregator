// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';
import NavContainer from './components/NavContainer/NavContainer'

const useStyles = makeStyles(styles);

function App() {
	const classes = useStyles();
	const [ isOpened, setIsOpened ] = useState(false);

	return (
		<Router>
			<div className={classes.root}>
			<NavContainer isOpened={isOpened} setIsOpened={setIsOpened} />
				<Toolbar />
				<div className={classes.container}>
					<Drawer
						variant="permanent"
						classes={{
							paper: clsx(classes.drawer, {
								[classes.closed]: !isOpened,
								[classes.opened]: isOpened
							})
						}}
					>
						<div className="sidebar-item-container">
							<h2>Browse</h2>

							<h4 className="sidebar-item">Platforms</h4>
							<h4 className="sidebar-item">Genres</h4>
							<h4 className="sidebar-item">Tags</h4>
						</div>
					</Drawer>
					<main className={classes.main}>
						<Switch>
							<Route exact path={[ '/', '/home' ]} component={Home} />
						</Switch>
					</main>
				</div>
				<div className={classes.footer}>
					<Typography variant="h6">Footer</Typography>
				</div>
			</div>
		</Router>
	);
}

export default App;
