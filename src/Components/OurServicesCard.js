import React from "react";
import step1 from "../ownassets/ourservices1step.png";
import step2 from "../ownassets/ourservices2step.png";
import step3 from "../ownassets/ourservices3step.png";
import { BsArrowRight } from "react-icons/bs";
import { CustomHook } from "../CustomHook/CustomHook";
const OurServicesCard = () => {
	const { dbTranslator } = CustomHook();

	return (
		<div className='scrolledDivCards p-3 px-md-0 justify-content-lg-center'>
			<div
				style={{ width: "320px", overflow: "hidden" }}
				className='allCenter flex-row mx-auto'>
				<div
					style={{
						width: "240px",
						minHeight: "280px",
						background: "white",
						height: "100%",
					}}
					className='d-flex align-items-center justify-content-between flex-column p-3'>
					<div style={{ width: "100%", height: "210px" }}>
						<img
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
							src={step1}
							alt='ste1'
						/>
					</div>
					<div style={{ width: "100%", flex: "1" }}>
						<h5 className='mainColor' style={{ textAlign: "center" }}>
							{dbTranslator("step1head")}
						</h5>
						<p style={{ fontSize: "12px", textAlign: "center" }}>
							{dbTranslator("step1")}
						</p>
					</div>
				</div>
				<div
					className='allCenter'
					style={{ width: "50px", height: "100%", margin: "0px 10px" }}>
					<BsArrowRight
						className='secondaryColor'
						style={{ fontSize: "50px" }}
					/>
				</div>
			</div>
			<div
				style={{ width: "320px", overflow: "hidden", margin: "0px 20px" }}
				className='allCenter flex-row mx-auto'>
				<div
					style={{
						width: "240px",
						minHeight: "280px",
						background: "white",
						height: "100%",
					}}
					className='d-flex align-items-center justify-content-between flex-column p-3'>
					<div style={{ width: "100%", height: "210px" }}>
						<img
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
							src={step2}
							alt='ste1'
						/>
					</div>
					<div style={{ width: "100%", flex: "1" }}>
						<h5 className='mainColor' style={{ textAlign: "center" }}>
							{dbTranslator("step2head")}
						</h5>
						<p style={{ fontSize: "12px", textAlign: "center" }}>
							{dbTranslator("step2")}
						</p>
					</div>
				</div>
				<div
					className='allCenter'
					style={{ width: "50px", height: "100%", margin: "0px 10px" }}>
					<BsArrowRight
						className='secondaryColor'
						style={{ fontSize: "50px" }}
					/>
				</div>
			</div>

			<div
				style={{
					width: "240px",
					minHeight: "280px",
					background: "white",
					height: "100%",
					overflow: "hidden",
				}}
				className='d-flex align-items-center justify-content-between flex-column p-3 mx-auto'>
				<div style={{ width: "100%", height: "210px" }}>
					<img
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
						src={step3}
						alt='ste1'
					/>
				</div>
				<div style={{ width: "100%", flex: "1" }}>
					<h5 className='mainColor' style={{ textAlign: "center" }}>
						{dbTranslator("step3head")}
					</h5>
					<p style={{ fontSize: "12px", textAlign: "center" }}>
						{dbTranslator("step3")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OurServicesCard;
