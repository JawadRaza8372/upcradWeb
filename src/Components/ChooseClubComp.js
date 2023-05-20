import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import { BiImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";
import CustomSmallLoader from "./CustomSmallLoader";
import { CustomHook } from "../CustomHook/CustomHook";
import Cropper from "react-cropper";
import "../../node_modules/cropperjs/dist/cropper.css";
const ChooseClubComp = ({
	selectedFlag,
	setselectedFlag,
	handleFlagUpload,
	imgsrc,
	model,
	onCropComp,
}) => {
	const { dbTranslator } = CustomHook();

	const { clubs } = useSelector((state) => state.project);
	const [loading, setloading] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const filteredData = () => {
		if (inputValue !== "") {
			return clubs?.filter((dat) =>
				dat?.name?.toLowerCase()?.includes(inputValue?.toLowerCase())
			);
		} else {
			return clubs?.slice(0, 6);
		}
	};
	const clubFlagUploader = async (e) => {
		setloading(true);
		await handleFlagUpload(e);
		setloading(false);
	};
	const cropperRef = React.createRef(null);
	const oncrop = () => {
		onCropComp(
			cropperRef.current.cropper
				?.getCroppedCanvas()
				?.toDataURL({ pixelRatio: 3 })
		);
	};
	return (
		<div
			style={{ position: "relative" }}
			className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			{model && (
				<div
					style={{
						position: "absolute",

						width: "100%",
						height: "100vh",
						background: "rgba(255,255,255,0.9)",
						zIndex: "1000",
						left: "0px",
						top: "0px",
						transform: "translate(-50% , -50%),",
					}}
					className='allCenter flex-row'>
					<div className='col-11 col-lg-6 allCenter flex-column'>
						<Cropper
							style={{ height: 400, width: "100%" }}
							preview='.img-preview'
							src={`${imgsrc}`}
							ref={cropperRef}
							initialAspectRatio={1}
							aspectRatio={1}
							viewMode={2}
							guides={false}
						/>
						<button
							className='btn mainColor secondarybg'
							style={{ margin: "20px auto" }}
							onClick={oncrop}>
							{dbTranslator("save")}
						</button>
					</div>
				</div>
			)}
			<span className='mainColor CustHeadingRespComp'>
				{dbTranslator("head3")}
			</span>
			<span className='CustSubHeadingRespComp'>{dbTranslator("shead3")}</span>
			<QuestionLinee
				label={"C"}
				title={dbTranslator("poptionc")}
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
									accept='image/png,image/jpg,image/jpeg'
									onChange={(e) => clubFlagUploader(e)}
								/>
								<div className='d-flex align-items-center justify-content-center smallBtnsSettings'>
									<span>{dbTranslator("addustbadge")}</span>
									<BiImageAdd className='mainColor' />
								</div>
							</>
						)}
					</label>
				}>
				<span className='inputLabelResp'>{dbTranslator("search")}</span>
				<input
					className='inputCustmResp'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder={dbTranslator("search")}
				/>

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
						{filteredData() ? (
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
							<p>{dbTranslator("Nothingness")}</p>
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
