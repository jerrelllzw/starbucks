import "../../styles/Login.css";
import Captcha from "./Captcha";

function Login() {
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

				<form action="" className="form">
					<input
						type="email"
						placeholder="Email Address *"
						id="email"
						className="emailInput"
					/>
					<input
						type="password"
						placeholder="Password *"
						id="password"
						className="passwordInput"
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
					<button className="signInButton">
						Sign in
					</button>
					<button className="joinNowButton">
						Join Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
