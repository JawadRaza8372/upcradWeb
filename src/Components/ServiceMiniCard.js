import React from "react";

const ServiceMiniCard = ({ sorce, title, onClickFun }) => {
	return (
		<>
			<div
				onClick={onClickFun}
				style={{
					background: "white",
					width: "160px",
					height: "200px",
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
					style={{ width: "160px", height: "160px" }}
					src={sorce}
					alt={title}
				/>
				<p
					className='mainColor'
					style={{
						fontWeight: "bold",
						marginTop: "7px",
						marginBottom: "10px",
					}}>
					{title}
				</p>
			</div>
		</>
	);
};

export default ServiceMiniCard;
