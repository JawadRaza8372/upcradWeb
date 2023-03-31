import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import demoflag from "../ownassets/demoflag.png";

const ChooseFlagComp = () => {
	const rawdata = [
		{ title: "England0" },
		{ title: "England1" },
		{ title: "England2" },
		{ title: "England3" },
	];
	const [activePosition, setactivePosition] = useState("");

	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>
				Country flag customization
			</span>
			<span className='CustSubHeadingRespComp'>
				Choose a country or upload a custom one.
			</span>
			<QuestionLinee label={"D"} title={"Choose a country flag"}>
				<span className='inputLabelResp'>Search</span>
				<input className='inputCustmResp' placeholder='search' />
				<div
					className='row w-100 gx-0'
					style={{
						border: "0px",
						borderBottom: "2px solid rgba(0,0,0,0.5)",
						marginBottom: "30px",
					}}>
					<div className='col-3 customOptionSelector'>Popular</div>
					<div className='col-3 customOptionSelector'>Asia</div>
					<div className='col-3 customOptionSelector'>Affrica</div>
					<div className='col-3 customOptionSelector'>Europe</div>
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
								}}>
								<img
									src={demoflag}
									alt='demoflag'
									style={{
										width: "100%",
										height: "100%",
										verticalAlign: "unset",
										objectFit: "fill",
									}}
								/>
							</div>
							{dat.title}
						</div>
					))}
				</div>
			</QuestionLinee>
		</div>
	);
};

export default ChooseFlagComp;
