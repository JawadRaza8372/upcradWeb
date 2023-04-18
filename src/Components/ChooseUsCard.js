import React from "react";

const ChooseUsCard = ({ imglink, title, subtitle }) => {
	return (
		<div
			style={{
				maxWidth: "380px",
				width: "90%",
				height: "230px",
				border: "1px solid #21325E",
				borderRadius: "10px",
			}}
			className='d-flex align-items-center justify-content-evenly flex-column'>
			<img
				style={{ width: "50px", height: "50px", objectFit: "contain" }}
				src={imglink}
				alt='title'
			/>
			<span
				style={{
					fontSize: "20px",
					fontWeight: "bold",
					textAlign: "center",
					width: "95%",
					height: "65px",
				}}
				className='mainColor'>
				{title}
			</span>
			<span
				style={{
					width: "90%",
					textAlign: "center",
					fontSize: "14px",
					color: "rgba(0,0,0,0.7)",
				}}>
				{subtitle}
			</span>
		</div>
	);
};

export default ChooseUsCard;
