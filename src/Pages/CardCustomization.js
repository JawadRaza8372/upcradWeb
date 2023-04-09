import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import design1 from "../ownassets/design1.png";
import BasicInfoComp from "../Components/BasicInfoComp";
import ChooseClubComp from "../Components/ChooseClubComp";
import ChooseFlagComp from "../Components/ChooseFlagComp";
import ChooseAttributComp from "../Components/ChooseAttributComp";
import ExtraServiceComp from "../Components/ExtraServiceComp";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { BsStarFill, BsStar, BsStarHalf, BsFullscreen } from "react-icons/bs";
import { deltImage, uploadImage } from "../Database/Database";
import * as htmlToImage from "html-to-image";
import convertToImage from "react-convert-to-image";
import html2canvas from "html2canvas";
export const CardCustomization = () => {
	const [BasicInfo, setBasicInfo] = useState({
		image: "",
		imageRef: "",
		name: "",
		position: "",
	});
	const [subPositions, setsubPositions] = useState({
		fastValue: "",
		secValue: "",
		thrdValue: "",
		forValue: "",
		fifValue: "",
		sixValue: "",
	});
	const [subPositionsVal, setsubPositionsal] = useState({
		fastValue: "",
		secValue: "",
		thrdValue: "",
		forValue: "",
		fifValue: "",
		sixValue: "",
	});
	const [selectedCountry, setselectedCountry] = useState({
		flag: "",
		name: "",
	});
	const [clubFlag, setClubFlag] = useState({
		badge: "",
		name: "",
		id: "",
	});
	const [overAllRatting, setoverAllRatting] = useState(0);
	let rattingdata = 4.5;
	let ratting = Math.floor(rattingdata);
	let decimalpoint = rattingdata - ratting;
	const { id } = useParams();
	const navigate = useNavigate();
	const [compSeq, setcompSeq] = useState(0);
	const [fullScreeniew, setFullScreeniew] = useState(false);
	const chec = React.useRef();

	useEffect(() => {
		let result = Math.ceil(
			(parseInt(subPositionsVal?.fastValue) +
				parseInt(subPositionsVal?.secValue) +
				parseInt(subPositionsVal?.thrdValue) +
				parseInt(subPositionsVal?.forValue) +
				parseInt(subPositionsVal?.fifValue) +
				parseInt(subPositionsVal?.sixValue)) /
				6
		);
		setoverAllRatting(result);
	}, [subPositionsVal]);

	const handleUpload = async (e) => {
		const result = await uploadImage(e.target.files[0]);
		setBasicInfo({
			...BasicInfo,
			image: result?.imglink,
			imageRef: result?.imgref,
		});
	};

	useEffect(() => {
		let ctx = chec?.current?.getContext("2d");
		var img = document.getElementById("scream");
		ctx.drawImage(img, 0, 0, 377, 599);

		const ScoreDiv = (
			bg,
			color,
			text,
			xCod,
			yCod,
			width,
			height,
			fontSize,
			isBold
		) => {
			ctx.fillStyle = bg;
			ctx.fillRect(xCod, yCod, width, height);
			ctx.fillStyle = color;
			ctx.font = `${isBold ? "bold" : "normal"} ${fontSize} Arial`;
			ctx.textAlign = "center";
			ctx.fillText(text, xCod + width / 2, yCod + height / 2);
			ctx.textBaseline = "middle";
		};

		//ya scroes div 1 wali

		ScoreDiv(
			"transparent",
			"white",
			`${subPositionsVal.fastValue}   ${subPositions.fastValue}`,
			80,
			390,
			100,
			30,
			"12pt"
		);

		ScoreDiv(
			"transparent",
			"white",
			`${subPositionsVal.secValue}   ${subPositions.secValue}`,
			80,
			425,
			100,
			30,
			"12pt"
		);
		ScoreDiv(
			"transparent",
			"white",
			`${subPositionsVal.thrdValue}   ${subPositions.thrdValue}`,
			80,
			460,
			100,
			30,
			"12pt"
		);

		//ya scroes div 2 wali
		ScoreDiv(
			"transparent",
			"white",
			`${subPositionsVal.forValue}   ${subPositions.forValue}`,

			200,
			390,
			100,
			30,
			"12pt"
		);
		ScoreDiv(
			"transparent",
			"white",
			`${subPositionsVal.fifValue}   ${subPositions.fifValue}`,

			200,
			425,
			100,
			30,
			"12pt"
		);
		ScoreDiv(
			"transparent",
			"white",
			`${subPositionsVal.sixValue}   ${subPositions.sixValue}`,

			200,
			460,
			100,
			30,
			"12pt"
		);

		//small divs
		ScoreDiv(
			"transparent",
			"white",
			BasicInfo.position,
			80,
			140,
			50,
			40,
			"15pt"
		);
		ScoreDiv(
			"transparent",
			"white",
			`${overAllRatting > 0 ? overAllRatting : ""}`,
			80,
			90,
			60,
			50,
			"27pt",
			true
		);
		var img1 = new Image();
		img1.onload = function () {
			ctx.drawImage(img1, 80, 193, 50, 40); // Or at whatever offset you like
		};
		img1.src = `${
			selectedCountry?.flag
				? selectedCountry?.flag
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`;
		var img2 = new Image();
		img2.onload = function () {
			ctx.drawImage(img2, 80, 246, 50, 40); // Or at whatever offset you like
		};
		img2.src = `${
			clubFlag?.badge
				? clubFlag?.badge
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`;

		var img3 = new Image();
		img3.onload = function () {
			ctx.drawImage(img3, 155, 115, 140, 165); // Or at whatever offset you like
		};
		img3.src = `${
			BasicInfo?.image
				? BasicInfo?.image
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`;

		ScoreDiv("transparent", "white", BasicInfo?.name, 80, 320, 220, 40, "20pt");
		const downloadfunc = async () => {
			await html2canvas(document.getElementById("myCanvas"), {
				allowTaint: true,
				foreignObjectRendering: true,
			}).then((canvas) => {
				const image = canvas.toDataURL("image/png", 1.0);
				console.log(image);
			});
			// const canvas = await html2canvas(document.querySelector("#myCanvas"));
			//
			// console.log(result.toDataURL("image/png", 1.0));
		};
		if (compSeq >= 4) {
			downloadfunc();
		}
	}, [
		BasicInfo,
		selectedCountry,
		clubFlag,
		subPositionsVal,
		overAllRatting,
		compSeq,
	]);

	return (
		<>
			{fullScreeniew && (
				<div className='modalContainer d-flex d-md-none'>
					<button
						onClick={() => setFullScreeniew(false)}
						className='btn nillbtn closeBtnn'>
						<AiOutlineClose fontSize={"30px"} />
					</button>
					<img
						src={design1}
						className='my-2 showPreiewImage2'
						alt='previewimg'
					/>
				</div>
			)}
			<div
				className='col-10 mx-auto'
				style={{
					height: "fit-content",
					minHeight: "60vh",
					overflow: "visible",
					background: "white",
					padding: "15px 0px",
				}}>
				<div className='row gx-0 w-100 h-100'>
					<div className='col-12 order-2 order-md-1 col-md-6 h-100 mb-4'>
						{compSeq === 0 && (
							<BasicInfoComp
								nameValue={BasicInfo.name}
								onChangeName={(d) => {
									if (d.target.value.length > 12) {
										alert("Only 14 letters Allowed");
									} else {
										setBasicInfo({
											...BasicInfo,
											name: d.target.value?.toUpperCase(),
										});
									}
								}}
								onChangeImage={handleUpload}
								imglink={BasicInfo.image}
								setactivePosition={(d) =>
									setBasicInfo({ ...BasicInfo, position: d })
								}
								activePosition={BasicInfo.position}
								setActiveSubPosition={(dat) => setsubPositions(dat)}
							/>
						)}
						{compSeq === 1 && (
							<ChooseClubComp
								selectedFlag={clubFlag}
								setselectedFlag={(dat) => setClubFlag(dat)}
							/>
						)}
						{compSeq === 2 && (
							<ChooseFlagComp
								selectedFlag={selectedCountry}
								onSelectedFlag={(dat) => setselectedCountry(dat)}
							/>
						)}
						{compSeq === 3 && (
							<ChooseAttributComp
								selectedSubPositions={subPositions}
								positionValues={subPositionsVal}
								onSetSubPositionValues={setsubPositionsal}
								overAllRating={overAllRatting}
							/>
						)}
						{compSeq === 4 && <ExtraServiceComp />}
					</div>
					<div className='order-1 order-md-2 mb-4 col-12 col-md-6 allCenter flex-column'>
						<button className='btn mainColor secondarybg'>Preview Only</button>
						<div>
							<canvas
								ref={chec}
								id='myCanvas'
								style={{ border: "1px solid red" }}
								width='377'
								height='599'></canvas>
						</div>

						<img
							id='scream'
							hidden
							src={design1}
							// className='my-2 showPreiewImage'

							alt='previewimg'
						/>
						<button
							onClick={() => setFullScreeniew(true)}
							className='btn mainColor nillbtn d-block d-md-none'>
							<BsFullscreen />
						</button>
						<span
							style={{ fontSize: "28px", fontWeight: "bold" }}
							className=' d-none d-md-block text-center mainColor mb-2'>
							S23 football greatest
						</span>
						<div className=' d-none d-md-flex row w-100'>
							<div
								style={{ fontSize: "16px", fontWeight: "bold" }}
								className='col-4 d-flex align-items-center justify-content-center flex-row'>
								Excellent
							</div>
							<div className='col-4 d-flex align-items-center justify-content-center flex-row'>
								{ratting &&
									Array(ratting)
										.fill("a")
										.map((dat, index) => (
											<BsStarFill
												key={index}
												style={{ fontSize: "22px" }}
												className='secondaryColor'
											/>
										))}
								{Array(decimalpoint ? 1 : 0)
									.fill("a")
									.map((dat, index) => (
										<BsStarHalf
											key={index}
											style={{ fontSize: "22px" }}
											className='secondaryColor'
										/>
									))}
								{(ratting || ratting === 0) &&
									Array(5 - Math.ceil(rattingdata))
										.fill("a")
										.map((dat, index) => (
											<BsStar
												key={index}
												style={{ fontSize: "22px" }}
												className='mainColor'
											/>
										))}
							</div>
							<div
								style={{ fontSize: "14px", fontWeight: "500" }}
								className='col-4  d-flex align-items-center justify-content-center flex-row'>
								4.5 out of 5
							</div>
						</div>
					</div>
				</div>
				<div className='col-12 mb-4 w-100'>
					<div className='row'>
						<div className='order-1 col-6 col-md-2 d-flex align-items-center justify-content-center'>
							<button
								onClick={() => {
									compSeq > 0 ? setcompSeq(compSeq - 1) : navigate(`/products`);
								}}
								className='btn w-90 mb-4'
								style={{
									background: "rgba(33,50,94,0.25)",
									color: "rgba(33,50,94,1)",
								}}>
								{compSeq > 0 ? "Previous" : "Home"}
							</button>
						</div>
						<div className='order-3 order-md-2 col-12  mb-4 col-md-8 d-flex align-items-center justify-content-center'>
							<div
								style={{
									width: "100%",
									height: "10px",
									borderRadius: "10px",
									background: "#D9D9D9",
								}}>
								<div
									style={{ height: "100%", width: "30%", borderRadius: "10px" }}
									className='mainbg'
								/>
							</div>
						</div>
						<div className='order-2 order-md-3 col-6  mb-4 col-md-2 d-flex align-items-center justify-content-center'>
							{compSeq >= 4 ? (
								<button
									onClick={() => {
										// navigate(`/success/${id}`);
									}}
									data-desktop-atc=''
									className='btn w-90 mainColor secondarybg'>
									Submit
								</button>
							) : (
								<button
									onClick={() => setcompSeq(compSeq + 1)}
									className='btn w-90 mainColor secondarybg'>
									Next
									<AiOutlineRight
										className='mainColor'
										style={{ fontSize: "22px" }}
									/>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
