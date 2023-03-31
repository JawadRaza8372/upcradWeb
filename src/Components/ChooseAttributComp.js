import React from "react";
import AttributesInput from "./AttributesInput";
import QuestionLinee from "./QuestionLinee";
const ChooseAttributComp = () => {
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>
				Attributes customization
			</span>
			<span className='CustSubHeadingRespComp'>
				Customize attributes and ratings or randomize them all.
			</span>
			<QuestionLinee label={"E"} title={"Choose attributes"}>
				<div className='row' style={{ marginTop: "20px" }}>
					<div className='col-12 col-md-6'>
						<AttributesInput title={"RIT"} />
						<AttributesInput title={"PAS"} />
						<AttributesInput title={"TIR"} />
					</div>
					<div className='col-12 col-md-6'>
						<AttributesInput title={"REG"} />
						<AttributesInput title={"DAV"} />
						<AttributesInput title={"FAS"} />
					</div>
				</div>
			</QuestionLinee>
			<QuestionLinee label={"F"} title={"Overall rating"}>
				<div className='row gx-0' style={{ marginTop: "20px" }}>
					<div className='col-12 mt-1 col-md-3'>
						<input
							placeholder='00'
							style={{
								width: "100%",
								height: "40px",
								background: "white",
								textAlign: "center",
								border: "none",
								outline: "none",
								fontSize: "16px",
								fontWeight: "600",
							}}
						/>
					</div>
					<div className='col-12 mt-1 col-md-9 d-flex align-items-center justify-content-evenly flex-row'>
						<span className='respQuestionHeading'>suggested rattings</span>
						<input
							placeholder='00'
							style={{
								width: "45px",
								height: "40px",
								background: "white",
								textAlign: "center",
								border: "none",
								outline: "none",
								fontSize: "16px",
								fontWeight: "600",
							}}
						/>
						<input
							placeholder='00'
							style={{
								width: "45px",
								height: "40px",
								background: "white",
								textAlign: "center",
								border: "none",
								outline: "none",
								fontSize: "16px",
								fontWeight: "600",
								margin: "0px 6px",
							}}
						/>
						<input
							placeholder='00'
							style={{
								width: "45px",
								height: "40px",
								background: "white",
								textAlign: "center",
								border: "none",
								outline: "none",
								fontSize: "16px",
								fontWeight: "600",
							}}
						/>
					</div>
				</div>
				<div className='row gx-0 mt-4 w-100'>
					<div className='col-12 d-flex align-items-center justify-content-center'>
						<button className='btn mainColor secondarybg'>Randomize</button>
					</div>
				</div>
			</QuestionLinee>
		</div>
	);
};

export default ChooseAttributComp;
