import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useAtom } from 'jotai';
import { dbUser } from '../../App';
import { authAtom } from '../../App';
import {getAuth, signOut} from 'firebase/auth';
import './NavBar.css';
import { onAuthStateChanged } from '@firebase/auth';
function NavBar() {
	const [userData, setUserData] = useAtom(dbUser)
	// const [authUser, setAuthUser] = useAtom(authAtom)
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')))

	
	const signUserOut = () =>{
		const auth = getAuth();
		signOut(auth).then(() => {
		// Sign-out successful.
		setUserData({firstName:"",lastName:"", username:"", firebaseId:""})
		setAuthUser(null)
		}).catch((error) => {
		// An error happened.
		});
	}

	console.log("authUser in nav", authUser)

	function signedInButtons() {
		if (!authUser){
			return (
			<>
			<Link to="/signup">
				<button type="button" className="btn btn-light">
					Sign Up
				</button>
			</Link>
			<Link to="/signin">
				<button type="button" className="btn btn-light">
					Sign In
				</button>
			</Link>
		</>)
		} else if (authUser && userData.username) {
			return(
			<div class="dropdown">
			<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
			  {userData.username}
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			  <li><Link to = "/profile"> <a class="dropdown-item" href="#">My Profile</a></Link></li>
			  <li><a class="dropdown-item" href="#">Another action</a></li>
			  <li><hr class="dropdown-divider"/></li>
			  <li><a onClick = {signUserOut} class="dropdown-item" href="#">Sign Out</a></li>
			</ul>
		  </div>
			)
		}
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarColor01"
					aria-controls="navbarColor01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/home">
								Home
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="/Trending">
								Trending
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-2 search-bar"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-light" type="submit">
							Search
						</button>
					</form>
					{signedInButtons()}
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
