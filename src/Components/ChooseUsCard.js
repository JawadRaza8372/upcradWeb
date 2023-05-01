import React from "react";

const ChooseUsCard = ({ imglink, title, subtitle }) => {
	return (
		<div
			style={{
				maxWidth: "380px",
				width: "90%",
				minHeight: "230px",
				border: "1px solid #21325E",
				borderRadius: "10px",
				padding: "10px 0px",
				height: "max-content",
			}}
			className='d-flex align-items-center justify-content-evenly flex-column'>
			<div className='allCenter' style={{ width: "100%", height: "50px" }}>
				<img
					style={{ width: "50px", height: "50px", objectFit: "contain" }}
					src={imglink}
					alt='title'
				/>
			</div>
			<div
				className='allCenter'
				style={{ width: "95%", height: "65px", overflow: "hidden" }}>
				<span
					style={{
						fontSize: "16px",
						fontWeight: "bold",
						textAlign: "center",
					}}
					className='mainColor'>
					{title}
				</span>
			</div>
			<div
				className='allCenter'
				style={{ width: "92%", height: "72px", overflow: "hidden" }}>
				<span
					style={{
						textAlign: "center",
						fontSize: "12px",
						color: "rgba(0,0,0,0.7)",
					}}>
					{subtitle}
				</span>
			</div>
		</div>
	);
};

export default ChooseUsCard;
