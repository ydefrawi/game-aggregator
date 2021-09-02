import React, { useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import './NavBar.css'
function NavBar() {
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
							<a className="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">
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
						<input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-light" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
