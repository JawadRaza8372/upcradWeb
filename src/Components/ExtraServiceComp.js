import React from "react";
import truckicon from "../ownassets/truck.png";
import { CustomHook } from "../CustomHook/CustomHook";
const ExtraServiceComp = ({ value, setvalue }) => {
	const { dbTranslator } = CustomHook();
	const rawdata = [
		{
			title: "Super fast track",
			subtitle: "Card designed, printed, shipped within 1-3 working days.",
			price: "7",
		},

		{
			title: "Super fast track with wall mounting kit",
			subtitle:
				"Card designed, printed, shipped within 1-3 working days.Will contain wall mounting Kit",
			price: "20",
		},
		{
			title: "Super fast track with premium acrylic stand",
			subtitle:
				"Card designed, printed, shipped within 1-3 working days.Will contain premium acrylic stand",
			price: "27",
		},
		{
			title: "Skip",
			subtitle: "---",
			price: "0",
		},
	];
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>
				{dbTranslator("lasthead")}
			</span>
			<span className='CustSubHeadingRespComp'>
				{dbTranslator("lastsdead")}
			</span>
			<div
				className='w-100 p-4 d-flex align-items-start justify-content-center mt-3 flex-column'
				style={{ background: "rgba(62,73,122,0.08)" }}>
				{rawdata.map((dat, index) => (
					<div
						key={index}
						onClick={() => setvalue(dat)}
						className='row w-100 mb-3'
						style={{
							height: "fit-content",
							minHeight: "80px",
							border: value?.title === dat?.title ? "1px solid black" : "0px",
							cursor: "pointer",
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
								${dat.price}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExtraServiceComp;
