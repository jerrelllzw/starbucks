import "../styles/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footerBox">
				<img
					className="homeIcon"
					src="https://www.starbucks.com.sg/rewards/img/logo.svg"
					alt="Home"
				/>
				<div className="homeText">Home</div>
			</div>
			<div className="footerBox">
				<img
					className="cardsIcon"
					src="https://img.icons8.com/material-outlined/24/ffffff/bank-cards.png"
					alt="Cards"
				/>
				<div className="cardsText">Cards</div>
			</div>
			<div className="footerBox">
				<img
					className="rewardsIcon"
					src="https://img.icons8.com/ios/50/ffffff/star--v1.png"
					alt="Rewards"
				/>
				<div className="rewardsText">Rewards</div>
			</div>
			<div className="footerBox">
				<img
					className="historyIcon"
					src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/ffffff/external-history-essentials-tanah-basah-basic-outline-tanah-basah.png"
					alt="History"
				/>
				<div className="historyText">History</div>
			</div>
			<div className="footerBox">
				<img
					className="moreIcon"
					src="https://img.icons8.com/ios/50/ffffff/menu--v1.png"
					alt="More"
				/>
				<div className="moreText">More</div>
			</div>
		</div>
	);
}

export default Footer;
