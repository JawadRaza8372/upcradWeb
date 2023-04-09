import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import demoflag from "../ownassets/demoflag.png";
import { countries } from "../Database/Database";
const ChooseFlagComp = ({ selectedFlag, onSelectedFlag }) => {
	const [inputValue, setInputValue] = useState("");
	const filteredData = () => {
		if (inputValue.length > 0) {
			return countries.filter((dat) =>
				dat.name.toLowerCase().includes(inputValue.toLowerCase())
			);
		} else {
			return countries.slice(0, 9);
		}
	};
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
				<input
					className='inputCustmResp'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='search'
				/>
				{/* <div
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
				</div> */}
				<div
					className='row w-100 gx-0'
					style={{
						marginBottom: "30px",
					}}>
					{filteredData().map((dat, index) => (
						<div
							onClick={() =>
								onSelectedFlag({ flag: dat?.flag, name: dat?.name })
							}
							className='customOptionSmal'
							style={{
								border:
									dat.name === selectedFlag?.name
										? "1px solid rgba(0,0,0,1)"
										: "1px solid rgba(0,0,0,0.5)",
								color:
									dat.name === selectedFlag?.name ? "white" : "rgba(0,0,0,0.5)",
								background:
									dat.name === selectedFlag?.name
										? "rgba(0,0,0,0.5)"
										: "transparent",
							}}>
							<div
								className='customOptionCircle overflow-hidden'
								style={{ border: "0px" }}>
								<img src={dat.flag} alt='demoflag' />
							</div>
							{dat.name}
						</div>
					))}
				</div>
			</QuestionLinee>
		</div>
	);
};

export default ChooseFlagComp;
