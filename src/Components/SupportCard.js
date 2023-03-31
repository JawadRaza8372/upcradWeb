import React from "react";
import QuestionMini from "./QuestionMini";
const SupportCard = ({ symbol, title, questionsArray }) => {
	return (
		<div
			className='mx-auto'
			style={{
				background: "rgba(206,210,220,0.5)",
				borderRadius: "20px",
				width: "100%",
				padding: "20px 10px",
				height: "100%",
			}}>
			<div
				className='row gx-0 d-flex align-item-center justify-content-between flex-row'
				style={{
					padding: "14px 20px",
				}}>
				{symbol}
				<span
					className='responsiveQuestion mainColor allCenter justify-content-start'
					style={{
						width: "calc(100% - 90px)",
					}}>
					{title}
				</span>
			</div>
			{questionsArray.map((dat, index) => (
				<QuestionMini key={index} question={dat.question} answer={dat.answer} />
			))}
		</div>
	);
};

export default SupportCard;
