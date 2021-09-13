// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';
import NavContainer from './components/NavContainer/NavContainer';
// Pages
import Home from './pages/Home';
import Trending from './pages/Trending';
import GamePage from './pages/GamePage';
import Platforms from './pages/Platforms';
import PlatformPage from './pages/PlatformPage';



const useStyles = makeStyles(styles);

//API KEY
const apiKey = '57f00ef977554b86b26053099f4d7489';

function App() {
	const classes = useStyles();
	const [ isOpened, setIsOpened ] = useState(true);

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
							<h2 className="sidebar-item">Browse</h2>
							<a href="/platforms">
							<h4 className="sidebar-item">

							Platforms
							
							</h4>

							</a>
							<h4 className="sidebar-item">Genres</h4>
							<h4 className="sidebar-item">Tags</h4>
						</div>
					</Drawer>
					<main className={classes.main}>
						<Route exact path={[ '/', '/home' ]} component={Home} />
						<Route exact path={[ '/trending' ]} component={Trending} />
						<Route exact path={[ '/games/:id' ]}>
							<GamePage apiKey={apiKey} />
						</Route>
						<Route exact path={[ '/platforms' ]}>
							<Platforms apiKey={apiKey} />
						</Route>
						<Route exact path={ [ '/platforms/:id' ]}>
							<PlatformPage apiKey={apiKey} />
						</Route>
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
