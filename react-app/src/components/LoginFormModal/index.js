import React, { useState } from "react";
import { login } from "../../store/session";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };

  const handleDemoUser = async (e) => {
    e.preventDefault()
    let demoEmail = 'user@demo.io'
    let demoPassword = 'password'
    const data = await dispatch(login(demoEmail, demoPassword));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };



  return (
    <>
      <div id="logInModalDiv">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            {/* Email */}
            <input
              className="logInLabel"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>
          <label>
            {/* Password */}
            <input
              className="logInLabel"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <button id='loginFormLoginButton' type="submit">
            Log In
          </button>
        </form>
        <div id='demoUserButtonDiv'>
          <button id='demoUserButton' onClick={handleDemoUser}>
            Log In as Demo User
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginFormModal;
