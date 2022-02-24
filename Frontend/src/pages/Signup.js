import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import API from '../utils/API.js';
//imports from firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import './Signup.css';
import { atom, useAtom } from 'jotai';
import { dbUser } from '../App.js';

function Signup() {
	const [ userData, setUserData ] = useAtom(dbUser);
	// console.log('Jotai User', user);

	// useEffect(() => {
	// 	setUser({ firstName: 'Bob', lastName: 'Saget' });
	// 	console.log('Changed Jotai User', user);
	// }, []);

	const [ userCreds, setUserCreds ] = useState({
		email: '',
		password: '',
		username: '',
		firstName: '',
		lastName: ''
	});

	const handleChange = (event) => {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setUserCreds((values) => ({ ...values, [name]: value }));
		console.log(userCreds);
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		// creates user in Firebase, awaits response then adds the other profile fields to our DB
		const auth = getAuth();
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, userCreds.email, userCreds.password);
			// Signed in
			const user = userCredential.user;
			console.log('firebase user', user);
			await API.createUser({
				firebaseId: user.uid,
				username: userCreds.username,
				firstName: userCreds.firstName,
				lastName: userCreds.lastName
			})
			//!trying to write to jotai atom here
				.then((response) => {
					setUserData(response.data);
				})
			// ...
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		}

	};

	return (
		<div>
		{console.log("atom in return",userData)}
			<Header header={'Sign Up'} subHeader={'Enter Credentials'} />
			<div className="container d-flex " id="signup-container">
				<div className="col-6 justify-content-start" id="signup-field-col">
					<form onSubmit={submitHandler} id="signup-form">
						<label for="email">Email: </label>
						<input
							className="signup-fields"
							name="email"
							label="email"
							placeholder="Enter Email"
							value={userCreds.email}
							onChange={handleChange}
						/>
						<br />
						<label for="username">Username: </label>
						<input
							className="signup-fields"
							name="username"
							label="username"
							type="text"
							placeholder="Enter User Name"
							value={userCreds.username}
							onChange={handleChange}
						/>
						<br />
						<label for="firstName">First Name: </label>
						<input
							className="signup-fields"
							name="firstName"
							label="firstName"
							type="text"
							placeholder="Enter First Name"
							value={userCreds.firstName}
							onChange={handleChange}
						/>
						<br />
						<label for="lastName">Last Name: </label>
						<input
							className="signup-fields"
							name="lastName"
							label="lastName"
							type="text"
							placeholder="Enter Last Name"
							value={userCreds.lastName}
							onChange={handleChange}
						/>
						<br />
						<label for="password">Create Password: </label>
						<input
							className="signup-fields"
							name="password"
							label="password"
							type="password"
							placeholder="Create Password"
							value={userCreds.password}
							onChange={handleChange}
						/>
						<br />
						<button className="btn btn-light" type="submit">
							Submit
						</button>
					</form>
				</div>

				<div className="col-6">Other signup options</div>
			</div>
		</div>
	);
}

export default Signup;
