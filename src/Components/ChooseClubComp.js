import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import { BiImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";
import CustomSmallLoader from "./CustomSmallLoader";

const ChooseClubComp = ({
	selectedFlag,
	setselectedFlag,
	handleFlagUpload,
}) => {
	const { clubs } = useSelector((state) => state.project);
	const [loading, setloading] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [selectData, setselectData] = useState(0);
	const filteredData = () => {
		if (inputValue?.length > 0) {
			return clubs?.filter((dat) =>
				dat?.name?.toLowerCase()?.includes(inputValue?.toLowerCase())
			);
		} else {
			if (selectData === 0) {
				return clubs?.filter((dat) => dat?.category === "others");
			} else if (selectData === 1) {
				return clubs?.filter((dat) => dat?.category === "premium");
			} else if (selectData === 2) {
				return clubs?.filter((dat) => dat?.category === "champion");
			} else {
				return clubs?.slice(0, 4);
			}
		}
	};
	const clubFlagUploader = async (e) => {
		setloading(true);
		await handleFlagUpload(e);
		setloading(false);
	};
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>Choose a club</span>
			<span className='CustSubHeadingRespComp'>
				Choose a club badge or upload a custom one.
			</span>
			<QuestionLinee
				label={"C"}
				title={"Search Club"}
				button={
					<label className='w-100' htmlFor='file'>
						{loading ? (
							<>
								<CustomSmallLoader />
							</>
						) : (
							<>
								<input
									type='file'
									id='file'
									hidden
									onChange={(e) => clubFlagUploader(e)}
								/>
								<div className='d-flex align-items-center justify-content-center smallBtnsSettings'>
									<span>Add Custom badge</span>
									<BiImageAdd className='mainColor' />
								</div>
							</>
						)}
					</label>
				}>
				<span className='inputLabelResp'>Search</span>
				<input
					className='inputCustmResp'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='search'
				/>
				<div
					className='row w-100 gx-0'
					style={{
						border: "0px",
						borderBottom: "2px solid rgba(0,0,0,0.5)",
						marginBottom: "30px",
					}}>
					<div
						onClick={() => setselectData(0)}
						className={`col-2 customOptionSelector ${
							selectData === 0 ? "actieOption" : ""
						}`}>
						Other
					</div>
					<div
						onClick={() => setselectData(1)}
						className={`col-6 customOptionSelector ${
							selectData === 1 ? "actieOption" : ""
						}`}>
						Premium League
					</div>
					<div
						onClick={() => setselectData(2)}
						className={`col-4 customOptionSelector ${
							selectData === 2 ? "actieOption" : ""
						}`}>
						Championship
					</div>
				</div>
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
						{filteredData().length > 0 ? (
							filteredData().map((dat) => (
								<div
									key={dat.id}
									onClick={() => setselectedFlag(dat)}
									className='customOptionSmal'
									style={{
										border:
											dat.id === selectedFlag?.id
												? "1px solid rgba(0,0,0,1)"
												: "1px solid rgba(0,0,0,0.5)",
										color:
											dat.id === selectedFlag?.id ? "white" : "rgba(0,0,0,0.5)",
										background:
											dat.id === selectedFlag?.id
												? "rgba(0,0,0,0.5)"
												: "transparent",
									}}>
									<div
										className='customOptionCircle overflow-hidden'
										style={{ border: "0px" }}>
										<img src={dat.badge} alt='demoflag' />
									</div>
									{dat?.name}
								</div>
							))
						) : (
							<p>No data found</p>
						)}
					</div>
				</div>
			</QuestionLinee>
			{/* 
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
			</QuestionLinee> */}
		</div>
	);
};

export default ChooseClubComp;
