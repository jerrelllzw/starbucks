import '../../styles/Login.css';
import Captcha from './Captcha';
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
	let navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const register = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/register', {
			username: username,
			password: password,
		})
			.then(() => {
				alert('Registration successful!');
			})
			.catch((err) => {
				alert('Username empty or already taken!');
			});
	};

	const login = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/login', {
			username: username,
			password: password,
		})
			.then(() => {
				alert('Login successful!');
				navigate(`/user/${username}`);
			})
			.catch((err) => {
				alert('User not found!');
			});
	};

	return (
		<div className="login">
			<div className="wrapper">
				<img
					src="https://www.starbucks.com.sg/rewards/img/logo-l.svg"
					alt="Starbucks Rewards"
					className="starbucksRewardsIcon"
				/>
				<div className="loginHeader">
					<div className="loginHeaderText">
						Sign in or Join Now
					</div>
					<img
						src="https://www.starbucks.com.sg/rewards/img/stars.svg"
						alt=""
						className="starImage"
					/>
				</div>

				<form>
					<input
						type="email"
						placeholder="Email Address *"
						id="email"
						className="emailInput"
						value={username}
						onChange={(e) =>
							setUsername(
								e.target.value
							)
						}
					/>
					<input
						type="password"
						placeholder="Password *"
						id="password"
						className="passwordInput"
						value={password}
						onChange={(e) =>
							setPassword(
								e.target.value
							)
						}
					/>
				</form>
				<Captcha />
				<div className="loginOptions">
					<div className="rememberCheckbox">
						<input
							type="checkbox"
							id="remember"
						/>
						<label
							htmlFor="remember"
							className="rememberText"
						>
							Keep me logged in
						</label>
					</div>
					<button className="forgotButton">
						Forgot Password?
					</button>
				</div>
				<div className="formButtons">
					<button
						className="signInButton"
						onClick={login}
					>
						Sign in
					</button>
					<button
						className="joinNowButton"
						onClick={register}
					>
						Join Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
