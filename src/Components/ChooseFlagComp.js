import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import { countries, recomadCuntries } from "../Database/Database";
import { CustomHook } from "../CustomHook/CustomHook";

const ChooseFlagComp = ({ selectedFlag, onSelectedFlag }) => {
	const { dbTranslator } = CustomHook();

	const [inputValue, setInputValue] = useState("");
	const filteredData = () => {
		if (inputValue.length > 0) {
			return countries.filter((dat) =>
				dat.name.toLowerCase().includes(inputValue.toLowerCase())
			);
		} else {
			return recomadCuntries;
		}
	};
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>
				{dbTranslator("head2")}
			</span>
			<span className='CustSubHeadingRespComp'>{dbTranslator("shead2")}</span>
			<QuestionLinee label={"D"} title={dbTranslator("poptiond")}>
				<span className='inputLabelResp'>{dbTranslator("search")}</span>
				<input
					className='inputCustmResp'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder={dbTranslator("search")}
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
					style={{
						height: "180px",
						overflowX: "hidden",
						overflowY: "auto",
						width: "100%",
						marginBottom: "10px",
						padding: "10px 0px",
					}}>
					<div className='row w-100 gx-0'>
						{filteredData().map((dat, index) => (
							<div
								key={index}
								onClick={() =>
									onSelectedFlag({
										flag: dat?.flag,
										name: dat?.name,
										code: dat?.code,
									})
								}
								className='customOptionSmal'
								style={{
									border:
										dat.name === selectedFlag?.name
											? "1px solid rgba(0,0,0,1)"
											: "1px solid rgba(0,0,0,0.5)",
									color:
										dat.name === selectedFlag?.name
											? "white"
											: "rgba(0,0,0,0.5)",
									background:
										dat.name === selectedFlag?.name
											? "rgba(0,0,0,0.5)"
											: "transparent",
								}}>
								<div
									className='customOptionCircle overflow-hidden'
									style={{ border: "0px" }}>
									<img
										src={`https://cdn.shopify.com/s/files/1/2412/8291/files/${dat?.code}_120x.png`}
										alt='demoflag'
									/>
								</div>
								{dat.name}
							</div>
						))}
					</div>
				</div>
			</QuestionLinee>
		</div>
	);
};

export default ChooseFlagComp;
