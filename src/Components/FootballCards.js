import React from "react";

const FootballCards = ({
	isbestSeller,
	sorce,
	title,
	price,
	oldprice,
	onClickFun,
}) => {
	return (
		<div
			onClick={onClickFun}
			style={{
				border: "1.8px solid #21325E",
				background: "white",
				borderRadius: "28px",
				width: "220px",
				height: "230px",
				position: "relative",
				marginLeft: "auto",
				marginRight: "auto",
				overflow: "hidden",
				marginBottom: "15px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-evenly",
				flexDirection: "column",
				cursor: "pointer",
			}}>
			{isbestSeller && (
				<div
					style={{
						position: "absolute",
						top: "9px",
						right: "10px",
						background: "rgba(0,185,30,0.15)",
						color: "#00B91E",
						fontSize: "10px",
						fontWeight: "600px",
						padding: "3px 7px",
						borderRadius: "5px",
					}}>
					Best Seller
				</div>
			)}
			<img
				style={{ maxWidth: "210px", objectFit: "contain", height: "150px" }}
				src={sorce}
				alt={title}
			/>
			<h5 className='m-0 mainColor' style={{ fontWeight: "bold" }}>
				{title}
			</h5>
			<p className='m-0'>
				{price && (
					<span className='mainColor'>
						<b>From {price}</b>
					</span>
				)}{" "}
				{oldprice && (
					<span
						style={{
							textDecorationLine: "line-through",
							color: "red",
						}}>
						{oldprice}
					</span>
				)}
			</p>
		</div>
	);
};

export default FootballCards;
