import React, { useState } from "react";
import questionpic from "../ownassets/questions.png";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const QuestionCard = ({ question, answer }) => {
	const [showAnswer, setshowAnswer] = useState(false);
	return (
		<div
			className='row gx-0 d-flex align-item-center justify-content-between'
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

			<div style={{ width: "calc(100% - 70px )" }}>
				<div className='allCenter justify-content-between flex-row'>
					<span className='responsiveQuestion'>{question}</span>
					{answer && (
						<button onClick={() => setshowAnswer(!showAnswer)} className='btn'>
							{showAnswer ? <AiOutlineUp /> : <AiOutlineDown />}
						</button>
					)}
				</div>

				{showAnswer && answer && (
					<>
						<span style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "15px" }}>
							{answer}
						</span>
					</>
				)}
			</div>
		</div>
	);
};

export default QuestionCard;
