import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import { useEffect } from "react";
import "./SignupForm.css";

export default function SignupFormModal() {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [errors, setErrors] = useState({});
	const [submitErrors, setSubmitErrors] = useState([]);
	const [disabled, setDisabled] = useState(true)
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(firstName, lastName, streetAddress, email, username, password));
			if (data) {
				console.log(data)
				setSubmitErrors(data);
			} else {
				closeModal();
			}
		} else {
			setSubmitErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	useEffect(() => {
		if (password.length > 0 && password.length < 6) {
			setErrors({ "password": "Password must be a minimum of 6 characters" })
		} else {
			setErrors({})
		}
	}, [password])

	useEffect(() => {
		if (confirmPassword && (confirmPassword !== password) && confirmPassword.length < 8) {
			setErrors({ "confirmPassword": "Passwords do not match" })
		} else {
			setErrors({})
		}
	}, [confirmPassword])

	useEffect(() => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (email && email.length > 0) {
			const isValid = emailPattern.test(email);
			setIsValidEmail(isValid);
		}
	}, [email]);

	// useEffect(() => {
	// 	if (firstName && firstName.length < 2) {
	// 		setErrors({ 'firstName': 'Minimum 2 characters' })
	// 	} else {
	// 		setErrors({})
	// 	}
	// }, [firstName])

	useEffect(() => {
		if (lastName && lastName.length < 2) {
			setErrors({ 'lastName': 'Minimum 2 characters' })
		} else {
			setErrors({})
		}
	}, [lastName])

	useEffect(() => {
		if (username && username.length < 4) {
			setErrors({'username': 'Minimum 4 characters'})
		} else {
			setErrors({})
		}
	}, [username])

	useEffect(() => {
		if (errors.firstName || errors.lastName || !isValidEmail || errors.email || errors.password || errors.confirmPassword) {
		  setDisabled(true)
		} else {
		  setDisabled(false)
		}
	  }, [errors])

	// console.log("errors HERE", errors);

	return (
		<>
			<div id="signUpModalDiv">
				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit}>
					{/* <ul>
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul> */}
					<label>
						<span className='signup-label-text'>First Name</span>
						<input
							className="signUpLabel"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
							/>
							{/* {errors.firstName && (<p className="error-message">{errors.firstName}</p>)} */}
					</label>
					<label>
						<span className='signup-label-text'>Last Name</span>
						<input
							className="signUpLabel"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
							/>
							{errors.lastName && (<p className="error-message">{errors.lastName}</p>)}
					</label>
					<label>
						<span className='signup-label-text'>Street Address</span>
						<input
							className="signUpLabel"
							type="text"
							value={streetAddress}
							onChange={(e) => setStreetAddress(e.target.value)}
							required
						/>
						{errors.streetAddress && (<p className="error-message">{errors.streetAddress}</p>)}
					</label>
					<label>
						<span className='signup-label-text'>Email</span>
						<input
							className="signUpLabel"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						{errors.email && (<p className="error-message">{errors.email}</p>)}
						{!isValidEmail && <p className="error-message">Invalid email</p>}
						{submitErrors.email && (<p className="error-message">{submitErrors.email}</p>)}
					</label>
					<label>
						<span className='signup-label-text'>Username</span>
						<input
							className="signUpLabel"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
						{errors.username && (<p className="error-message">{errors.username}</p>)}
						{submitErrors.username && (<p className="error-message">{submitErrors.username}</p>)}
					</label>
					<label>
						<span className='signup-label-text'>Password</span>
						<input
							className="signUpLabel"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						{errors.password && (<p className="error-message">{errors.password}</p>)}
					</label>
					<label>
						<span className='signup-label-text'>Confirm Password</span>
						<input
							className="signUpLabel"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						{errors.confirmPassword && (<p className="error-message">{errors.confirmPassword}</p>)}
					</label>
					<button id='signupModalSignupButton' type="submit" disabled={disabled}>
						Sign Up
					</button>
				</form>
			</div>
		</>
	);
};
