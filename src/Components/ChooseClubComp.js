import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import { BiImageAdd } from "react-icons/bi";

const ChooseClubComp = () => {
	const rawdata = [
		{ title: "Football's Greatest" },
		{ title: "World's Greatest" },
		{ title: "Top best Football Club" },
	];
	const [activePosition, setactivePosition] = useState("");
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>Choose a club</span>
			<span className='CustSubHeadingRespComp'>
				Choose a club badge or upload a custom one.
			</span>
			<QuestionLinee label={"C"} title={"Search Club"}>
				<span className='inputLabelResp'>Search</span>
				<input className='inputCustmResp' placeholder='search' />
				<div
					className='row w-100 gx-0'
					style={{
						border: "0px",
						borderBottom: "2px solid rgba(0,0,0,0.5)",
						marginBottom: "30px",
					}}>
					<div className='col-2 customOptionSelector'>Other</div>
					<div className='col-6 customOptionSelector'>Premium League</div>
					<div className='col-4 customOptionSelector'>Championship</div>
				</div>
				<div
					className='row w-100 gx-0'
					style={{
						marginBottom: "30px",
					}}>
					{rawdata.map((dat, index) => (
						<div
							onClick={() => setactivePosition(dat.title)}
							className='customOptionSmal'
							style={{
								border:
									dat.title === activePosition
										? "1px solid rgba(0,0,0,1)"
										: "1px solid rgba(0,0,0,0.5)",
								color:
									dat.title === activePosition
										? "rgba(0,0,0,1)"
										: "rgba(0,0,0,0.5)",
							}}>
							<div
								className='customOptionCircle'
								style={{
									background:
										dat.title === activePosition ? "#21325E" : "white",
								}}
							/>
							{dat.title}
						</div>
					))}
				</div>
			</QuestionLinee>

			<QuestionLinee>
				<span className='inputLabelResp' style={{ marginBottom: "15px" }}>
					Upload Custom Club Flag
					<span style={{ color: "#A0A0A0" }}> (optional)</span>
				</span>
				<label className='w-100' htmlFor='file'>
					<input type='file' id='file' hidden />
					<div className='d-flex align-items-center justify-content-center imgInptCustmResp'>
						<span>Click to Upload</span>
						<BiImageAdd
							style={{ fontSize: "26px", marginLeft: "10px" }}
							className='mainColor'
						/>
					</div>
				</label>
			</QuestionLinee>
		</div>
	);
};

export default ChooseClubComp;
