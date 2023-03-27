import React from "react";
import questionpic from "../ownassets/questions.png";
const QuestionCard = ({ question, answer }) => {
	return (
		<div
			className='row gx-0 d-flex align-item-center justify-content-evenly'
			style={{
				background: "rgba(206,210,220,0.5)",
				marginBottom: "20px",
				padding: "14px 20px",
				borderRadius: "10px",
			}}>
			<div
				className='d-flex align-items-center justify-content-center'
				style={{ width: "50px", height: "50px" }}>
				<img
					src={questionpic}
					style={{ width: "50px", height: "50px" }}
					alt='question mark'
				/>
			</div>

			<div className='col-10 col-md-11'>
				<span
					style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "50px" }}>
					{question}
				</span>
				{answer && (
					<>
						<br />
						<span style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "18px" }}>
							{answer}
						</span>
					</>
				)}
			</div>
		</div>
	);
};

export default QuestionCard;
