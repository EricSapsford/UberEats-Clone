import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
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
					<label >
						{/* First Name */}
						<input
							className="signUpLabel"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="First name"
							required
						/>
					</label>
					<label>
						{/* Last Name */}
						<input
							className="signUpLabel"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Last name"
							required
						/>
					</label>
					<label>
						{/* Street Address */}
						<input
							className="signUpLabel"
							type="text"
							value={streetAddress}
							onChange={(e) => setStreetAddress(e.target.value)}
							placeholder="Street address"
							required
						/>
					</label>
					<label>
						{/* Email */}
						<input
							className="signUpLabel"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							required
						/>
					</label>
					<label>
						{/* Username */}
						<input
							className="signUpLabel"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
							required
						/>
					</label>
					<label>
						{/* Password */}
						<input
							className="signUpLabel"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							required
						/>
					</label>
					<label>
						{/* Confirm Password */}
						<input
							className="signUpLabel"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Confirm password"
							required
						/>
					</label>
					<button type="submit">Sign Up</button>
				</form>
			</div>
		</>
	);
}

export default SignupFormModal;
