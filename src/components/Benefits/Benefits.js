import "../../styles/Benefits.css";
import Images from "./Images";

function Benefits() {
	return (
		<div className="benefits">
			<div className="benefitsWrapper">
				<div className="benefitsContent">
					<div className="benefitsHeader">
						Member Benefits
					</div>
					<div className="benefitsMessage">
						Join Starbucks® Rewards to enjoy
						free drinks, birthday treats,
						exclusive offers and many more.
					</div>
					<Images />
					<div className="downloadMessage">
						Download the Starbucks®
						Singapore App
					</div>
					<div className="storeButtons">
						<button className="appleButton"></button>
						<button className="googleButton"></button>
					</div>
				</div>
			</div>
			<img
				className="footerImage"
				src="https://www.starbucks.com.sg/rewards/img/member-benefits/member-benefits-bg.png"
				alt="Benefits Footer"
			/>
			<div className="secondFooterImage">
				<div>a</div>
				<div className="footerWrapper">
					<div className="downloadMessageMobile">
						Download the Starbucks Singapore
						App
					</div>
					<div className="storeButtonsMobile">
						<button className="appleButton"></button>
						<button className="googleButton"></button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Benefits;
