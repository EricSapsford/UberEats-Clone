import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
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
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(firstName, lastName, streetAddress, email, username, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>
			<div id="signUpModalDiv">
				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<ul>
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
					<label>
						<span className='signup-label-text'>First Name</span>
						<input
							className="signUpLabel"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
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
					</label>
					<button id='signupModalSignupButton' type="submit">
						Sign Up
					</button>
				</form>
			</div>
		</>
	);
};
