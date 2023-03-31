import React from "react";
import truckicon from "../ownassets/truck.png";
const ExtraServiceComp = () => {
	const rawdata = [
		{
			title: "Super fast track",
			subtitle: "Card designed, printed, shipped within 1-3 working days.",
			price: "Rs.1,600.00",
		},

		{
			title: "Super track",
			subtitle: "Card designed, printed, shipped within 1-3 working days.",
			price: "Rs.2,600.00",
		},
		{
			title: " fast track",
			subtitle: "Card designed, printed, shipped within 1-3 working days.",
			price: "Rs.3,600.00",
		},
	];
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>
				Extras to make your card perfect
			</span>
			<span className='CustSubHeadingRespComp'>
				Add these to make your card perfect
			</span>
			<div
				className='w-100 p-4 d-flex align-items-start justify-content-center mt-3 flex-column'
				style={{ background: "rgba(62,73,122,0.08)" }}>
				{rawdata.map((dat, index) => (
					<div
						key={index}
						className='row w-100 mb-3'
						style={{
							height: "fit-content",
							minHeight: "80px",
							border: "1px solid black",
						}}>
						<div
							className='col-3 col-md-2'
							style={{
								background: "white",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<img
								src={truckicon}
								alt='truck'
								style={{
									width: "100%",
									maxWidth: "120px",
									objectFit: "contain",
								}}
							/>
						</div>
						<div className='col-9 col-md-10 d-flex align-items-start justify-content-center flex-column'>
							<span
								className='mainColor'
								style={{ fontSize: "16px", fontWeight: "600" }}>
								{dat.title}
							</span>
							<span
								style={{
									fontSize: "12px",
									fontWeight: "600",
									color: "rgba(106, 106, 106, 1)",
								}}>
								{dat.subtitle}
							</span>
							<span
								className='mainColor'
								style={{ fontSize: "12px", fontWeight: "600" }}>
								{dat.price}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExtraServiceComp;
