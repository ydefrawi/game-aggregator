import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import API from '../utils/API.js'

function Signup() {
	const [ userName, setUserName ] = useState({
		firstName: '',
		lastName: ''
	});

	const handleChange = (event) => {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setUserName((values) => ({ ...values, [name]: value }));
		console.log(userName);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		API.createUser(userName)
		.then(document.getElementById("username-form").append(`<h1>USERNAME SAVED</h1>`))
	};

	return (
		<div>
			<Header header={'Sign Up'} subHeader={'Enter First and Last Name'} />
			<form id= "username-form" onSubmit={submitHandler}>
				<input name="firstName" label="First Name" value={userName.firstName} onChange={handleChange} />
				<input name="lastName" label="Last Name" value={userName.lastName} onChange={handleChange} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Signup;
