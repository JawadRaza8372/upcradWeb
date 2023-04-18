import React, { useState } from "react";
import questionpic from "../ownassets/questions.png";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const QuestionMini = ({ question, answer }) => {
	const [showAnswer, setshowAnswer] = useState(false);
	return (
		<>
			<div
				className='row gx-0 d-flex align-item-center justify-content-between flex-row'
				style={{
					padding: "10px 13px",
				}}>
				<div
					className='d-flex align-items-center justify-content-center'
					style={{ width: "30px", height: "30px" }}>
					<img
						src={questionpic}
						style={{ width: "30px", height: "30px" }}
						alt='question mark'
					/>
				</div>

				<div style={{ width: "calc(100% - 35px )" }}>
					<div className='allCenter justify-content-between flex-row'>
						<span className='responsiveQuestion2'>{question}</span>
						{answer && (
							<button
								style={{
									height: "30px",
								}}
								onClick={() => setshowAnswer(!showAnswer)}
								className='btn nillbtn'>
								{showAnswer ? (
									<AiOutlineUp style={{ marginBottom: "10px" }} />
								) : (
									<AiOutlineDown style={{ marginBottom: "10px" }} />
								)}
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
		</>
	);
};

export default QuestionMini;
