import React from "react";

const ServiceMiniCard = ({ sorce, title, onClickFun }) => {
	return (
		<>
			<div
				onClick={onClickFun}
				style={{
					background: "white",
					width: "160px",
					minHeight: "200px",
					height: "100%",
					marginLeft: "auto",
					marginRight: "auto",
					overflow: "hidden",
					marginBottom: "15px",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					flexDirection: "column",
					cursor: "pointer",
				}}>
				<img
					style={{
						width: "160px",
						height: "160px",
						marginBottom: "7px",
						objectFit: "cover",
					}}
					src={sorce}
					alt={title}
				/>
				<p
					className='mainColor'
					style={{
						fontWeight: "bold",
						margin: "0px",
						marginBottom: "10px",
						width: "95%",
						textAlign: "center",
						height: "calc(100% - 150px)",
					}}>
					{title}
				</p>
			</div>
		</>
	);
};

export default ServiceMiniCard;
