import "../../styles/Login.css";

function Captcha() {
	return (
		<div className="captcha">
			<input type="checkbox" name="" id="robot" />
			<label htmlFor="robot" className="robotText">
				I'm not a robot
			</label>
			<div className="captchaContainer">
				<img
					src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
					alt="Captcha Icon"
					className="captchaIcon"
				/>
				<div className="captchaText">reCAPTCHA</div>
				<div className="captchaOptions">
					<button className="privacyButton">
						Privacy
					</button>
					<div className="hyphen">-</div>
					<button className="termsButton">
						Terms
					</button>
				</div>
			</div>
		</div>
	);
}

export default Captcha;
