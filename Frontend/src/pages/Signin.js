import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import API from '../utils/API.js';
//imports from firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Signin() {
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
		const auth = getAuth();
		signInWithEmailAndPassword(auth, userCreds.email, userCreds.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	return (
		<div>
			<Header header={'Sign In'} subHeader={'Sign in with email and password'} />

			<form onSubmit={submitHandler}>
				<input
					name="email"
					label="email"
					placeholder="Enter Email"
					value={userCreds.firstName}
					onChange={handleChange}
				/>
				<input
					name="password"
					label="password"
					type="password"
					placeholder="Enter Password"
					value={userCreds.lastName}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Signin;
