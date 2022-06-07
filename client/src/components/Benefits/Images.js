import "../../styles/Benefits.css";

function Images() {
	return (
		<div className="items">
			<div className="itemWrapper">
				<img
					src="https://www.starbucks.com.sg/rewards/img/member-benefits/favorites-free.png"
					alt=""
					className="image"
				/>
				<div className="text">
					Get your favorites free
				</div>
			</div>
			<div className="itemWrapper">
				<img
					src="https://www.starbucks.com.sg/rewards/img/member-benefits/birthday.png"
					alt=""
					className="image"
				/>
				<div className="text">
					Birthday treats on the house
				</div>
			</div>
			<div className="itemWrapper">
				<img
					src="https://www.starbucks.com.sg/rewards/img/member-benefits/first-dibs.png"
					alt=""
					className="image"
				/>
				<div className="text">
					First dibs & exclusive offers
				</div>
			</div>
		</div>
	);
}

export default Images;
