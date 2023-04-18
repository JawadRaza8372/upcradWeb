import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import { BiImageAdd } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import CustomLoader from "./CustomLoader";
import { useTranslation } from "react-i18next";
const BasicInfoComp = ({
	nameValue,
	onChangeName,
	imglink,
	onChangeImage,
	setactivePosition,
	activePosition,
	setActiveSubPosition,
}) => {
	const { t } = useTranslation();

	const [loading, setloading] = useState(false);
	const [selectData, setselectData] = useState(0);
	const onChangeImagefun = async (e) => {
		setloading(true);
		await onChangeImage(e);
		setloading(false);
	};

	let defencedata = [
		{
			title: "Gk",
			positions: {
				fastValue: "DIV",
				secValue: "REF",
				thrdValue: "HAN",
				forValue: "SPE",
				fifValue: "KIC",
				sixValue: "POS",
			},
		},
		{
			title: "RB",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "LB",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "RWB",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "LWB",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "CB",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
	];
	let attackdata = [
		{
			title: "ST",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "CF",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "RF",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "LF",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
	];
	let middata = [
		{
			title: "CDM",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "CM",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "CAM",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "LM",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "RM",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "LW",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
		{
			title: "RW",
			positions: {
				fastValue: "PAC",
				secValue: "DRI",
				thrdValue: "SHO",
				forValue: "DEF",
				fifValue: "PAS",
				sixValue: "PHY",
			},
		},
	];
	const customData = {
		fastValue: "PAC",
		secValue: "DRI",
		thrdValue: "SHO",
		forValue: "DEF",
		fifValue: "PAS",
		sixValue: "PHY",
	};

	const rawdata =
		selectData === 0
			? defencedata
			: selectData === 1
			? middata
			: selectData === 2
			? attackdata
			: null;
	return (
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

			<QuestionLinee label={"B"} title={t("poptionb")}>
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
								setActiveSubPosition(customData);
							}}
						/>
					)}
				</div>
			</QuestionLinee>
		</div>
	);
};

export default BasicInfoComp;
