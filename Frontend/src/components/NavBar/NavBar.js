import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchResult from '../SearchResult/SearchResult'
import { atom, useAtom } from 'jotai';
// import { dbUser } from '../../App';
import { authAtom, dbUser } from '../../App';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './NavBar.css';
import { map } from '@firebase/util';

export const searchAtom=atom([])




function NavBar({ apiKey }) {
	const [userData, setUserData] = useAtom(dbUser)
	// const [authUser, setAuthUser] = useAtom(authAtom)
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')))
	const [searchTerm, setSearchTerm] = useState("")
	const [searchResults, setSearchResults] = useAtom(searchAtom)	
	const auth = getAuth();
	onAuthStateChanged(auth, async (user)=>{
		if(user){
			console.log("User is signed in with email:",user.email)
			console.log("userName after signing in (nav bar)",userData.username)
		} else {
			console.log("User is not signed in!")
		}
	})
	
	const signUserOut = () => {
		const auth = getAuth();
		signOut(auth).then(() => {
			// Sign-out successful.
			setUserData({ firstName: "", lastName: "", username: "", firebaseId: "" })
			setAuthUser(null)
		}).catch((error) => {
			// An error happened.
		});
	}

	const searchInput = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value)
	}
	const searchSubmit = async (e) => {
		e.preventDefault();
		//using await instead of .thens for this. First await (results) returns a promise. second await (data) returns the search data
		const result = await fetch(`https://api.rawg.io/api/games?search=${searchTerm}&key=${apiKey}`)
		const data = await result.json();
		console.log("search data", data)
		setSearchResults(data.results)
	}

	console.log("authUser in nav", authUser)

	useEffect(() => {

	}, [userData])

	function signedInButtons() {
		if (!localStorage.getItem('authUser')) {
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
		} else {
			return (
				<div class="dropdown">
							{console.log("userData in nav", typeof userData.username)}
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						{userData.username && typeof userData.username!==undefined ? userData.username : "Loading"}
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><Link to="/profile"> <a class="dropdown-item" href="#">My Profile</a></Link></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li><button onClick={signUserOut} class="dropdown-item">Sign Out</button></li>
					</ul>
				</div>
			)
		}
	}

	return (
		<>
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
						<form className="d-flex" onSubmit={searchSubmit}>
							<input
								className="form-control me-2 search-bar"
								type="search"
								placeholder="Search"
								aria-label="Search"
								onChange={searchInput}
							/>


						{/* Button that submits and Collapses/Uncollapses Div */}
							<button className="btn btn-outline-light" type="submit" data-bs-toggle="collapse" data-bs-target="#searchResults" aria-expanded="false" aria-controls="searchResults">
								Search
							</button>
						</form>


						{signedInButtons()}
					</div>
				</div>
			</nav>
			
			{/* Collapsable Div */}
			<div class="container collapse" id="searchResults">
				<div>
					{/* {console.log(searchResults)}
					{searchResults?.map((item) => (
						<div><SearchResult rawgData={item} /></div>
					))} */}
				</div>
			</div>
		</>
	);
}

export default NavBar;
