import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import API from '../utils/API.js';
//imports from firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


function Signup() {
	const [ userName, setUserName ] = useState({
		email: '',
		password: ''
	});

//!firebase config

const firebaseConfig = {
	apiKey: 'AIzaSyDFrBi5Mn0nEJWLDylwApjFKBnJ6nMm7Cg',
	authDomain: 'game-hub-47948.firebaseapp.com',
	projectId: 'game-hub-47948',
	storageBucket: 'game-hub-47948.appspot.com',
	messagingSenderId: '826278036918',
	appId: '1:826278036918:web:86566c3073520152c26d17',
	measurementId: 'G-X9G0JR7JV9'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//!------------

	const handleChange = (event) => {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setUserName((values) => ({ ...values, [name]: value }));
		console.log(userName);
	};

	const submitHandler = (event) => {
		event.preventDefault();
//! firebase auth
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, userName.email, userName.password)
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
		API.createUser(userName);
	};

	return (
		<div>
			<Header header={'Sign Up'} subHeader={'Enter First and Last Name'} />

			<form onSubmit={submitHandler}>
				<input
					name="email"
					label="email"
					placeholder="Enter Email"
					value={userName.firstName}
					onChange={handleChange}
				/>
				<input
					name="password"
					label="password"
                    type="password"
					placeholder="Enter Password"
					value={userName.lastName}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Signup;
