import React from "react";

const AttributesInput = ({ title }) => {
	return (
		<div className='row gx-0 w-100 mb-2 d-flex align-items-center justify-content-evenly flex-row'>
			<input
				placeholder='00'
				style={{
					width: "45%",
					height: "40px",
					background: "white",
					textAlign: "center",
					border: "none",
					outline: "none",
					fontSize: "16px",
					fontWeight: "600",
				}}
			/>
			<div
				style={{
					width: "45%",
					height: "40px",
					background: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "16px",
					fontWeight: "600",
				}}>
				{title}
			</div>
		</div>
	);
};

export default AttributesInput;
