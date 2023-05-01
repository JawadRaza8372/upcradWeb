import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import { BiImageAdd } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import CustomLoader from "./CustomLoader";
import { useTranslation } from "react-i18next";
import Cropper from "react-cropper";
import "../../node_modules/cropperjs/dist/cropper.css";
import {
	customData,
	attackdata,
	middata,
	defencedata,
	escustomData,
	esattackdata,
	esdefencedata,
	esmiddata,
	decustomData,
	deattackdata,
	dedefencedata,
	demiddata,
	itcustomData,
	itattackdata,
	itdefencedata,
	itmiddata,
	frcustomData,
	frattackdata,
	frdefencedata,
	frmiddata,
} from "../Harddata";
const BasicInfoComp = ({
	nameValue,
	onChangeName,
	imglink,
	onChangeImage,
	setactivePosition,
	activePosition,
	setActiveSubPosition,
	onCropComp,
	imgsrc,
	model,
}) => {
	const { t } = useTranslation();

	const [loading, setloading] = useState(false);
	const [selectData, setselectData] = useState(0);
	const [currentselct, setcurrentselct] = useState("en");
	const onChangeImagefun = async (e) => {
		setloading(true);
		await onChangeImage(e);

		setloading(false);
	};
	const fattackdaa =
		currentselct === "en"
			? attackdata
			: currentselct === "es"
			? esattackdata
			: currentselct === "de"
			? deattackdata
			: currentselct === "fr"
			? frattackdata
			: currentselct === "it"
			? itattackdata
			: [];
	const fdefdata =
		currentselct === "en"
			? defencedata
			: currentselct === "es"
			? esdefencedata
			: currentselct === "de"
			? dedefencedata
			: currentselct === "fr"
			? frdefencedata
			: currentselct === "it"
			? itdefencedata
			: [];
	const fmiddata =
		currentselct === "en"
			? middata
			: currentselct === "es"
			? esmiddata
			: currentselct === "de"
			? demiddata
			: currentselct === "fr"
			? frmiddata
			: currentselct === "it"
			? itmiddata
			: [];
	const fommondata =
		currentselct === "en"
			? customData
			: currentselct === "es"
			? escustomData
			: currentselct === "de"
			? decustomData
			: currentselct === "fr"
			? frcustomData
			: currentselct === "it"
			? itcustomData
			: {
					fastValue: "",
					secValue: "",
					thrdValue: "",
					forValue: "",
					fifValue: "",
					sixValue: "",
			  };
	const rawdata =
		selectData === 0
			? fdefdata
			: selectData === 1
			? fmiddata
			: selectData === 2
			? fattackdaa
			: null;
	const cropperRef = React.createRef(null);
	const oncrop = () => {
		onCropComp(
			cropperRef.current.cropper
				?.getCroppedCanvas()
				?.toDataURL({ pixelRatio: 3 })
		);
	};
	return (
		<div style={{ position: "relative" }}>
			{model && (
				<div
					style={{
						position: "absolute",

						width: "100%",
						height: "100vh",
						background: "rgba(255,255,255,0.9)",
						zIndex: "3000",
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
							initialAspectRatio={3 / 4}
							aspectRatio={3 / 4}
							viewMode={1}
							guides={false}
						/>
						<button
							className='btn mainColor secondarybg'
							style={{ margin: "20px auto" }}
							onClick={oncrop}>
							{t("save")}
						</button>
					</div>
				</div>
			)}
			<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
				<span className='mainColor CustHeadingRespComp'>{t("head1")}</span>
				<span className='CustSubHeadingRespComp'>{t("shead1")} </span>
				<QuestionLinee label={"A"} title={t("poptiona")}>
					<span className='inputLabelResp'>{t("name")}</span>
					<input
						value={nameValue?.toUpperCase()}
						onChange={onChangeName}
						className='inputCustmResp'
						placeholder={t("name")}
						maxLength={12}
					/>
					<label className='w-100' htmlFor='file'>
						{imglink?.length > 0 && loading === false ? (
							<>
								<div className='d-flex align-items-center justify-content-evenly imgInptCustmResp2'>
									<img src={`${imglink}`} alt='avtar' />
									<input
										onChange={onChangeImagefun}
										type='file'
										id='file'
										hidden
										accept='image/png,image/jpg,image/jpeg'
									/>
									<div className='d-flex mainColor align-items-center justify-content-center imgInptCustmResp'>
										<span>{t("uplodagn")}</span>
										<BiImageAdd className='mainColor' />
									</div>
								</div>
							</>
						) : imglink?.length <= 0 && loading === false ? (
							<>
								<input
									onChange={onChangeImagefun}
									type='file'
									id='file'
									hidden
									accept='image/png,image/jpg,image/jpeg'
								/>
								<div className='d-flex align-items-center justify-content-center imgInptCustmResp'>
									<span>{t("clikupld")}</span>
									<BiImageAdd
										style={{ fontSize: "26px", marginLeft: "10px" }}
										className='mainColor'
									/>
								</div>
							</>
						) : (
							<CustomLoader />
						)}
					</label>
					<span className='bellTextResp'>
						<BsBell
							style={{ fontSize: "20px", marginRight: "10px" }}
							className='mainColor'
						/>
						{t("imgbgtxt")}
					</span>
				</QuestionLinee>

				<QuestionLinee
					label={"B"}
					title={t("poptionb")}
					button={
						<div className='row'>
							<button
								className={`col btn nillbtn ${
									currentselct === "en" ? "mainColor" : "nonColor"
								}`}
								style={{
									fontWeight: currentselct === "en" ? "bold" : "400",
								}}
								onClick={() => setcurrentselct("en")}>
								En
							</button>
							<button
								className={`col btn nillbtn ${
									currentselct === "fr" ? "mainColor" : "nonColor"
								}`}
								style={{
									fontWeight: currentselct === "fr" ? "bold" : "400",
								}}
								onClick={() => setcurrentselct("fr")}>
								Fr
							</button>
							<button
								className={`col btn nillbtn ${
									currentselct === "de" ? "mainColor" : "nonColor"
								}`}
								style={{
									fontWeight: currentselct === "de" ? "bold" : "400",
								}}
								onClick={() => setcurrentselct("de")}>
								De
							</button>
							<button
								className={`col btn nillbtn ${
									currentselct === "es" ? "mainColor" : "nonColor"
								}`}
								style={{
									fontWeight: currentselct === "es" ? "bold" : "400",
								}}
								onClick={() => setcurrentselct("es")}>
								Es
							</button>
							<button
								className={`col btn nillbtn ${
									currentselct === "it" ? "mainColor" : "nonColor"
								}`}
								style={{
									fontWeight: currentselct === "it" ? "bold" : "400",
								}}
								onClick={() => setcurrentselct("it")}>
								It
							</button>
						</div>
					}>
					<div
						className='row w-100 gx-0'
						style={{
							border: "0px",
							borderBottom: "2px solid rgba(0,0,0,0.5)",
							margin: "30px 0px",
						}}>
						<div
							onClick={() => setselectData(0)}
							className={`col-3 customOptionSelector ${
								selectData === 0 ? "actieOption" : ""
							}`}>
							{t("defnce")}
						</div>
						<div
							onClick={() => setselectData(1)}
							className={`col-3 customOptionSelector ${
								selectData === 1 ? "actieOption" : ""
							}`}>
							{t("midfield")}
						</div>
						<div
							onClick={() => setselectData(2)}
							className={`col-3 customOptionSelector ${
								selectData === 2 ? "actieOption" : ""
							}`}>
							{t("attack")}
						</div>
						<div
							onClick={() => setselectData(3)}
							className={`col-3 customOptionSelector ${
								selectData === 3 ? "actieOption" : ""
							}`}>
							{t("custom")}
						</div>
					</div>
					<div
						className='row w-100 gx-0'
						style={{
							marginBottom: "30px",
						}}>
						{selectData < 3 &&
							rawdata.map((dat, index) => (
								<div
									onClick={() => {
										setactivePosition(dat.title);
										setActiveSubPosition(dat.positions);
									}}
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
						{selectData === 3 && (
							<input
								type='text'
								placeholder='Custom Position'
								className='inputCustmResp'
								maxLength={3}
								value={activePosition}
								onChange={(e) => {
									setactivePosition(e.target.value.toUpperCase());
									setActiveSubPosition(fommondata);
								}}
							/>
						)}
					</div>
				</QuestionLinee>
			</div>
		</div>
	);
};

export default BasicInfoComp;
