import React from "react";

const QuestionLinee = ({ label, title, children }) => {
	return (
		<div
			className='w-100 p-4 d-flex align-items-start justify-content-center mt-3 flex-column'
			style={{ background: "rgba(62,73,122,0.08)" }}>
			{label && title && (
				<div className='row w-100 mx-auto gx-0 '>
					<div
						style={{
							fontSize: "20px",
							fontWeight: "bold",
							width: "40px",
							height: "40px",
							borderRadius: "30px",
						}}
						className='d-flex align-items-center justify-content-center mainColor secondarybg'>
						{label}
					</div>
					<div
						style={{ marginLeft: "10px" }}
						className='col-9 d-flex align-items-start justify-content-center flex-column'>
						<span
							className='mainColor'
							style={{ fontSize: "16px", fontWeight: "600" }}>
							{title}
						</span>
					</div>
				</div>
			)}
			{children}
		</div>
	);
};

export default QuestionLinee;
