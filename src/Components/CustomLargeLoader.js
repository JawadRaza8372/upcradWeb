import React from "react";
import smalllogo from "../ownassets/smalllog.png";
const CustomLargeLoader = () => {
	return (
		<div
			className='allCenter'
			style={{
				width: "100vw",
				height: "98vh",
				background: "white",
			}}>
			<div style={{ position: "relative", width: "150px", height: "150px" }}>
				<div className='lggloader' />
				<div
					style={{
						width: "150px",
						height: "150px",
						position: "absolute",
						top: "0px",
						left: "0px",
					}}
					className='allCenter'>
					<img
						src={smalllogo}
						alt='upcard'
						style={{ width: "120px", height: "120px", objectFit: "contain" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default CustomLargeLoader;
