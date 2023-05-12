import React from "react";
import truckicon from "../ownassets/truck.png";
import { CustomHook } from "../CustomHook/CustomHook";
import extra1 from "../ownassets/extr1.jpg";
import extra2 from "../ownassets/ext2.png";
import extra3 from "../ownassets/extr3.jpg";
import extra4 from "../ownassets/extra4.png";
import extra5 from "../ownassets/extra5.jpg";

const ExtraServiceComp = ({ value, setvalue }) => {
	const { dbTranslator } = CustomHook();
	const imgearry = [
		{ imgSrc: extra1 },
		{ imgSrc: extra2 },
		{ imgSrc: extra3 },
		{ imgSrc: extra4 },
		{ imgSrc: extra5 },
	];
	const rawdata = [
		{
			title: "MATERIAL PREMIUM",
			subtitle:
				"We will manufacture your letters in 3mm thick methacrylate, with a premium finish.",
			price: "6.50",
		},

		{
			title: "CARDS PACK",
			subtitle: "We're sending you an extra random soccer card!",
			price: "5",
		},
		{
			title: "PROTECTION AGAINST DAMAGE",
			subtitle:
				"Protection against damage that the order may suffer during shipping. If your order arrives damaged, we will change it.",
			price: "3.99",
		},
		{
			title: "GREETINGS CARD",
			subtitle:
				"We'll include a premium card so you can write a congratulatory message.",
			price: "1.50",
		},
		{
			title: "WALL MOUNTING STICKER",
			subtitle:
				"We send you an adhesive with which you can stick your football card on the wall!",
			price: "0.99",
		},
		{
			title: "DO NOT ADD ANYTHING",
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
								src={`${imgearry[index] ? imgearry[index]?.imgSrc : truckicon}`}
								alt='truck'
								style={{
									width: "100%",
									objectFit: "cover",
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
