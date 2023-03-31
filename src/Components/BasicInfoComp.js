import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import { BiImageAdd } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
const BasicInfoComp = () => {
	const rawdata = [
		{ title: "GE" },
		{ title: "DK" },
		{ title: "LM" },
		{ title: "TW" },
		{ title: "CDC" },
		{ title: "KLM" },
	];
	const [activePosition, setactivePosition] = useState("");
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>Basic Information</span>
			<span className='CustSubHeadingRespComp'>
				Enter name, upload image and choose a position
			</span>
			<QuestionLinee label={"A"} title={"Name and image upload"}>
				<span className='inputLabelResp'>Name</span>
				<input className='inputCustmResp' placeholder='name' />
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
				<span className='bellTextResp'>
					<BsBell
						style={{ fontSize: "20px", marginRight: "10px" }}
						className='mainColor'
					/>
					If necessary background of the image will be removed by our design
					team
				</span>
			</QuestionLinee>

			<QuestionLinee label={"B"} title={"Choose a position"}>
				<div
					className='row w-100 gx-0'
					style={{
						border: "0px",
						borderBottom: "2px solid rgba(0,0,0,0.5)",
						margin: "30px 0px",
					}}>
					<div className='col-3 customOptionSelector'>Defense</div>
					<div className='col-3 customOptionSelector'>Midfield</div>
					<div className='col-3 customOptionSelector'>Attack</div>
					<div className='col-3 customOptionSelector'>Custom</div>
				</div>
				<div
					className='row w-100 gx-0'
					style={{
						marginBottom: "30px",
					}}>
					{rawdata.map((dat, index) => (
						<div
							onClick={() => setactivePosition(dat.title)}
							key={index}
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
		</div>
	);
};

export default BasicInfoComp;
