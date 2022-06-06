import "../styles/Header.css";

function Header() {
	return (
		<div className="header">
			<img
				src="https://www.starbucks.com.sg/rewards/img/logo.svg"
				alt="Starbucks Icon"
				className="starbucksIcon"
			/>
			<button className="headerButtons">STORES</button>
			<button className="headerButtons">MENU</button>
			<button className="headerButtons">REWARDS</button>
			<button className="headerButtons">CAREERS</button>
			<button className="headerButtons">SHOP</button>
			<button className="optionsButton"></button>
		</div>
	);
}
export default Header;
