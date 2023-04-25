import React from "react";

const FootballCards = ({
	isbestSeller,
	sorce,
	title,
	price,
	oldprice,
	onClickFun,
	isLargeImg,
}) => {
	return (
		<div
			onClick={onClickFun}
			style={{
				background: "white",
				borderRadius: "15px",
				width: "90%",
				height: "300px",
				marginLeft: "auto",
				marginRight: "auto",
				overflow: "hidden",
				marginBottom: "15px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexDirection: "column",
				cursor: "pointer",
				maxWidth: "268px",
				backgroundColor: "white",
			}}>
			{isbestSeller && (
				<div
					style={{
						height: "20px",
						width: "85%",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						flexDirection: "row",
						margin: "10px auto",
					}}>
					<div
						style={{
							float: "right",
							background: "rgba(0,185,30,0.15)",
							color: "#00B91E",
							fontSize: "10px",
							fontWeight: "600px",
							padding: "3px 7px",
							borderRadius: "5px",
						}}>
						Best Seller
					</div>
				</div>
			)}
			<img
				style={
					isLargeImg
						? { width: "100%", height: "190px", objectFit: "cover" }
						: { width: "100%", objectFit: "contain", height: "150px" }
				}
				src={sorce}
				alt={title}
			/>
			<div
				style={{
					width: "90%",
					height: "100px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					flexDirection: "column",
					marginBottom: "10px",
				}}>
				<div
					style={{ height: "50px", width: "100%", overflow: "hidden" }}
					className='allCenter'>
					<h5
						className='m-0 mainColor'
						style={{
							fontWeight: "bold",
							fontSize: "14px",
							textTransform: "capitalize",
						}}>
						{title?.length > 33 ? title?.substring(0, 33) + " ..." : title}
					</h5>
				</div>
				<div
					style={{ height: "20px", width: "100%", overflow: "hidden" }}
					className='allCenter'>
					<p
						style={{
							textTransform: "capitalize",
							fontSize: "13px",
						}}
						className='m-0'>
						{price && (
							<span style={{ color: "rgba(0, 0, 0, 0.5)" }}>
								<b>From ${price}</b>
							</span>
						)}{" "}
						{oldprice && (
							<span
								style={{
									textDecorationLine: "line-through",
									color: "red",
								}}>
								${oldprice}
							</span>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FootballCards;
