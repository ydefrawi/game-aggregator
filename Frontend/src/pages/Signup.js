import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import API from '../utils/API.js';
//imports from firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


function Signup() {
	const [ userCreds, setUserCreds ] = useState({
		email: '',
		password: ''
	});

	const handleChange = (event) => {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setUserCreds((values) => ({ ...values, [name]: value }));
		console.log(userCreds);
	};

	const submitHandler = (event) => {
		event.preventDefault();
//! firebase create user
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, userCreds.email, userCreds.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
                console.log("firebase user", user)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
				// ..
			});
//!----------------------------------------------------------------
		API.createUser(userCreds);
	};

	return (
		<div>
			<Header header={'Sign Up'} subHeader={'Enter Email and Password'} />

			<form onSubmit={submitHandler}>
				<input
					name="email"
					label="email"
					placeholder="Enter Email"
					value={userCreds.email}
					onChange={handleChange}
				/>
				<input
					name="password"
					label="password"
                    type="password"
					placeholder="Enter Password"
					value={userCreds.password}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Signup;
