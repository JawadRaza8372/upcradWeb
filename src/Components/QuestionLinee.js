import React from "react";
import "./QuestionLinee.css";
const QuestionLinee = ({ label, title, children, button }) => {
	return (
		<div
			className='w-100 p-4 allCenter align-items-start  mt-3 flex-column'
			style={{ background: "rgba(62,73,122,0.08)" }}>
			{label && title && (
				<div className='row w-100 mx-auto gx-0 '>
					{button ? (
						<>
							<div className='col-12 col-lg-7 mt-2'>
								<div className='row w-100 mx-auto gx-0 '>
									<div className='allCenter mainColor secondarybg respiveLabel'>
										{label}
									</div>
									<div
										style={{ marginLeft: "10px" }}
										className='col-9 d-flex align-items-start justify-content-center flex-column'>
										<span className='mainColor respQuestionHeading'>
											{title}
										</span>
									</div>
								</div>
							</div>
							<div className='col-12 col-lg-5 mt-2 smallBtnsContShow'>
								{button}
							</div>
						</>
					) : (
						<>
							<div className='col-12 col-lg-12 mt-2'>
								<div className='row w-100 mx-auto gx-0 '>
									<div className='allCenter mainColor secondarybg respiveLabel'>
										{label}
									</div>
									<div
										style={{ marginLeft: "10px" }}
										className='col-9 d-flex align-items-start justify-content-center flex-column'>
										<span className='mainColor respQuestionHeading'>
											{title}
										</span>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			)}
			{children}
		</div>
	);
};

export default QuestionLinee;
