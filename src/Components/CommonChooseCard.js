import React from "react";

const CommonChooseCard = ({ title, children }) => {
	return (
		<div
			style={{
				width: "95%",
				margin: "20px auto",
				height: "fit-content",
				minHeight: "350px",
				position: "relative",
				background: "rgba(33,50,94,0.08)",
				overflow: "visible",
				paddingBottom: "20px",
			}}>
			<div
				className='mainbg d-flex align-items-center justify-content-center'
				style={{
					width: "90%",
					position: "absolute",
					top: "-20px",
					height: "50px",
					right: "0px",
					left: "0px",
					margin: "0 auto",
					color: "white",
					fontSize: "26px",
					fontWeight: "bold",
					borderRadius: "10px",
				}}>
				{title}
			</div>
			<div
				style={{
					width: "95%",
					margin: "0px auto",
					height: "100%",
					paddingTop: "50px",
				}}>
				{children}
			</div>
		</div>
	);
};

export default CommonChooseCard;
