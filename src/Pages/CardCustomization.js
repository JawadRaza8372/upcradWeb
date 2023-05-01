import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BasicInfoComp from "../Components/BasicInfoComp";
import ChooseClubComp from "../Components/ChooseClubComp";
import ChooseFlagComp from "../Components/ChooseFlagComp";
import ChooseAttributComp from "../Components/ChooseAttributComp";
import ExtraServiceComp from "../Components/ExtraServiceComp";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { Stage, Layer, Image, Text, Line } from "react-konva";
import useImage from "use-image";
import { toast } from "react-toastify";
import { setCartItems } from "../store/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setClubs } from "../store/projectSlice";
import { getDatabase, ref, child, get } from "firebase/database";

export const CardCustomization = () => {
	const { t } = useTranslation();

	const { footballCards, cartItems, clubs } = useSelector(
		(state) => state.project
	);
	const dispatch = useDispatch();

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
		code: "",
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
	const getData = footballCards?.filter((dat) => dat.id === id);
	const currentData = getData?.length > 0 ? getData[0] : {};
	const navigate = useNavigate();
	const [compSeq, setcompSeq] = useState(0);
	//const [fullScreeniew, setFullScreeniew] = useState(false);
	const [extraService, setextraService] = useState({
		title: "",
		subtitle: "",
		prie: "",
	});
	const [openCropper, setopenCropper] = useState(false);
	const stageRef = React.useRef();
	const newref = React.useRef();
	const [image] = useImage(`${currentData?.imgSrc}`, "Anonimus");
	const [useravtar] = useImage(
		`${
			BasicInfo?.image
				? BasicInfo?.image
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`,
		"Anonimus"
	);
	const [clubFlagavtar] = useImage(
		`${
			clubFlag?.badge
				? clubFlag?.badge
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`,
		"Anonimus"
	);
	const [countryflagavtar] = useImage(
		`${
			selectedCountry?.flag
				? `https://cdn.shopify.com/s/files/1/2412/8291/files/${selectedCountry?.code}_120x.png`
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`,
		"anonymous"
	);

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

	useEffect(() => {
		const getclubs = () => {
			if (clubs && clubs?.length > 0) {
				console.log("data available");
			} else {
				get(child(ref(getDatabase()), "/FootballClubs")).then((snapshot) => {
					let result = snapshot.val();
					let resultarry = Object.keys(result).map((dat, index) => {
						return { id: dat, ...Object.values(result)[index] };
					});
					dispatch(
						setClubs({
							clubs: resultarry,
						})
					);
				});
			}
		};
		getclubs();
	});
	const [templinkImg, settemplinkImg] = useState("");
	const uploadImageFun = async (image) => {
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "jhcjvtsx");
		data.append("cloud_name", "dxb services");
		const result = await fetch(
			"  https://api.cloudinary.com/v1_1/dpjk8xcld/image/upload",
			{
				method: "post",
				body: data,
			}
		);
		return result?.json();
	};
	const uploadClubFlag = async (e) => {
		const result = await uploadImageFun(e.target.files[0]);
		if (result?.secure_url?.length > 0) {
			setClubFlag({
				badge: result?.secure_url,
				name: "customFlag",
				id: "customFlag",
			});
		}
	};
	// const removebgFunction = (secure_url) => {
	// 	const formData = new FormData();
	// 	formData.append("image_file", secure_url);
	// 	fetch("https://clipdrop-api.co/remove-background/v1", {
	// 		method: "POST",
	// 		headers: {
	// 			"x-api-key":
	// 				"ffa8a9ee07e33dc9bde7a1530a6b62f92de4933117ce447f5a0ef8453db9b8120187c34a5c61173507da98d46806b40d",
	// 		},
	// 		body: formData,
	// 	})
	// 		.then((response) => response.arrayBuffer())
	// 		.then((buffer) => {
	// 			console.log(buffer);
	// 			setBasicInfo({
	// 				...BasicInfo,
	// 				image: buffer,
	// 				imageRef: buffer,
	// 			});
	// 			// buffer here is a binary representation of the returned image
	// 		});
	// };
	const handleUpload = async (e) => {
		const result = await uploadImageFun(e.target.files[0]);
		setopenCropper(true);
		settemplinkImg(result?.secure_url);
	};
	const onCropomplete = (link) => {
		setBasicInfo({
			...BasicInfo,
			image: link,
			imageRef: link,
		});
		setopenCropper(false);
	};
	const addToCartFunction = (imglink) => {
		let newdata = [
			...cartItems,
			{ pid: id, imgSrc: imglink, extra: extraService },
		];
		dispatch(
			setCartItems({
				cartItems: newdata,
			})
		);
		window.localStorage.setItem("upCradCartArry", JSON.stringify(newdata));

		toast.success(t("paddcrt"), {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		navigate("/cart");
	};
	const nextBtnFunc = () => {
		if (compSeq === 0) {
			if (
				BasicInfo?.name !== "" &&
				BasicInfo?.position !== "" &&
				BasicInfo?.image !== ""
			) {
				setcompSeq(1);
			} else {
				toast.error(t("fillfields"), {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} else if (compSeq === 1) {
			if (
				clubFlag?.badge !== "" &&
				clubFlag?.id !== "" &&
				clubFlag?.name !== ""
			) {
				setcompSeq(2);
			} else {
				toast.error(t("choosebadg"), {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} else if (compSeq === 2) {
			if (selectedCountry?.name !== "" && selectedCountry?.code !== "") {
				setcompSeq(3);
			} else {
				toast.error(t("choosecountry"), {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} else if (compSeq === 3) {
			if (
				subPositionsVal?.fastValue !== "" &&
				subPositionsVal?.secValue !== "" &&
				subPositionsVal?.thrdValue !== "" &&
				subPositionsVal?.forValue !== "" &&
				subPositionsVal?.fifValue !== "" &&
				subPositionsVal?.sixValue !== ""
			) {
				setcompSeq(4);
			} else {
				toast.error(t("porrand"), {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} else if (compSeq === 4) {
			if (extraService?.title !== "") {
				const downloadfunc = () => {
					const uri = stageRef.current.toDataURL({ pixelRatio: 3 });
					return uri;
				};
				const result = downloadfunc();
				addToCartFunction(result);
			} else {
				toast.error(t("porrand"), {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		}
	};

	return (
		<>
			{/* {fullScreeniew && (
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
			)} */}
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
									setBasicInfo({
										...BasicInfo,
										name: d.target.value?.toUpperCase(),
									});
								}}
								onChangeImage={handleUpload}
								imglink={BasicInfo.image}
								setactivePosition={(d) =>
									setBasicInfo({ ...BasicInfo, position: d })
								}
								activePosition={BasicInfo.position}
								imgsrc={templinkImg}
								model={openCropper}
								onCropComp={onCropomplete}
								setActiveSubPosition={(dat) => setsubPositions(dat)}
							/>
						)}
						{compSeq === 1 && (
							<ChooseClubComp
								selectedFlag={clubFlag}
								setselectedFlag={(dat) => setClubFlag(dat)}
								handleFlagUpload={uploadClubFlag}
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
						{compSeq === 4 && (
							<ExtraServiceComp
								value={extraService}
								setvalue={(dat) => setextraService(dat)}
							/>
						)}
					</div>
					<div className='order-1 order-md-2 mb-4 col-12 col-md-6 allCenter flex-column'>
						<button className='btn mainColor secondarybg'>
							{t("pvwonly")}
						</button>
						<div ref={newref}>
							<div className='d-none d-sm-block'>
								<Stage ref={stageRef} width={377} height={599}>
									<Layer>
										<Image x={0} y={0} height={599} width={377} image={image} />
										<Line
											x={74}
											y={196}
											points={[0, 0, 40, 0]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Line
											x={74}
											y={250}
											points={[0, 0, 40, 0]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Line
											x={162}
											y={523}
											points={[0, 0, 47, 0]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Line
											x={72}
											y={380}
											points={[0, 0, 230, 0]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Line
											x={186}
											y={398}
											points={[0, 0, 0, 107]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Text
											width={50}
											height={30}
											x={70}
											y={395}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.fastValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={120}
											y={395}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.fastValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={70}
											y={435}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.secValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={120}
											y={435}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.secValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={70}
											y={475}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.thrdValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={120}
											y={475}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.thrdValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={190}
											y={395}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.forValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={240}
											y={395}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.forValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={190}
											y={435}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.fifValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={240}
											y={435}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.fifValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={190}
											y={475}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.sixValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={240}
											y={475}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.sixValue}`}
											fontSize={26}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Text
											width={220}
											height={40}
											x={80}
											y={337}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${BasicInfo?.name}`}
											fontSize={40}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={"bold"}
											fontFamily='MYbold'
										/>
										<Text
											width={60}
											height={50}
											x={65}
											y={110}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${overAllRatting > 0 ? overAllRatting : ""}`}
											fontSize={56}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={"bold"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={40}
											x={70}
											y={155}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${BasicInfo?.position}`}
											fontSize={28}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
										/>
										<Image
											x={71.5}
											y={210}
											height={35}
											width={45}
											image={countryflagavtar}
											scale={{ x: 1, y: 0.8 }}
										/>
										<Image
											x={73}
											y={260}
											height={35}
											width={45}
											image={clubFlagavtar}
											scale={{ x: 0.9, y: 0.96 }}
										/>
										<Image
											x={140}
											y={115}
											height={185}
											width={220}
											image={useravtar}
											scale={{ x: 0.8, y: 1.1 }}
										/>
									</Layer>
								</Stage>
							</div>
							<div className='d-block d-sm-none'>
								<Stage ref={stageRef} width={270} height={400}>
									<Layer>
										<Image x={0} y={0} height={400} width={270} image={image} />
										<Line
											x={54}
											y={130}
											points={[0, 0, 27, 0]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Line
											x={54}
											y={168}
											points={[0, 0, 27, 0]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Line
											x={115}
											y={349}
											points={[0, 0, 36, 0]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Line
											x={50}
											y={254}
											points={[0, 0, 166, 0]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Line
											x={133.3}
											y={266}
											points={[0, 0, 0, 71]}
											stroke={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
										/>
										<Text
											width={50}
											height={30}
											x={30}
											y={260}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.fastValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={80}
											y={260}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.fastValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={30}
											y={287}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.secValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={80}
											y={287}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.secValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={30}
											y={312}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.thrdValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={80}
											y={312}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.thrdValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>

										<Text
											width={50}
											height={30}
											x={135}
											y={260}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.forValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={185}
											y={260}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.forValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={135}
											y={287}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.fifValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={185}
											y={287}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.fifValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={135}
											y={312}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.sixValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={30}
											x={185}
											y={312}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.sixValue}`}
											fontSize={19}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
											fontFamily='MYbold'
										/>

										<Text
											width={220}
											height={40}
											x={23}
											y={218}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${BasicInfo?.name}`}
											fontSize={28}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={"bold"}
											fontFamily='MYbold'
										/>
										<Text
											width={60}
											height={50}
											x={40}
											y={64}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${overAllRatting > 0 ? overAllRatting : ""}`}
											fontSize={38}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={"bold"}
											fontFamily='MYbold'
										/>
										<Text
											width={50}
											height={40}
											x={43}
											y={97}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${BasicInfo?.position}`}
											fontSize={22}
											verticalAlign={"middle"}
											align={"center"}
											fontFamily='MYbold'
											fontStyle={""}
										/>
										<Image
											x={52}
											y={138}
											height={23}
											width={30}
											image={countryflagavtar}
											scale={{ x: 1, y: 0.9 }}
										/>
										<Image
											x={54}
											y={172}
											height={23}
											width={30}
											image={clubFlagavtar}
											scale={{ x: 0.9, y: 0.98 }}
										/>
										<Image
											x={105}
											y={80}
											height={120}
											width={150}
											image={useravtar}
											scale={{ x: 0.8, y: 1.1 }}
										/>
									</Layer>
								</Stage>
							</div>
						</div>
						{/* <div className='d-block' ref={newref}>
						
						</div> */}
						{/* <button
							onClick={() => setFullScreeniew(true)}
							className='btn mainColor nillbtn d-block d-md-none'>
							<BsFullscreen />
						</button> */}
						<span
							style={{
								fontSize: "28px",
								fontWeight: "bold",
								textTransform: "capitalize",
							}}
							className=' d-none d-md-block text-center mainColor mb-2'>
							{currentData?.title}
						</span>
						<div className=' d-none d-md-flex row w-100'>
							<div
								style={{ fontSize: "16px", fontWeight: "bold" }}
								className='col-4 d-flex align-items-center justify-content-center flex-row'>
								{t("Excellent")}
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
						<div className='order-1 col-6 col-md-3 d-flex align-items-center justify-content-center'>
							<button
								onClick={() => {
									compSeq > 0 ? setcompSeq(compSeq - 1) : navigate(`/products`);
								}}
								className='btn w-90 mb-4'
								style={{
									background: "rgba(33,50,94,0.25)",
									color: "rgba(33,50,94,1)",
								}}>
								{compSeq > 0 ? t("prevos") : t("home")}
							</button>
						</div>
						<div className='order-3 order-md-2 col-12  mb-4 col-md-6 d-flex align-items-center justify-content-center'>
							<div
								style={{
									width: "100%",
									height: "10px",
									borderRadius: "10px",
									background: "#D9D9D9",
								}}>
								<div
									style={{
										height: "100%",
										width: `${(compSeq + 1) * 20}%`,
										borderRadius: "10px",
									}}
									className='mainbg'
								/>
							</div>
						</div>
						<div className='order-2 order-md-3 col-6  mb-4 col-md-3 d-flex align-items-center justify-content-center'>
							{/* {compSeq >= 4 ? (
								<button
									onClick={() => {
										// navigate(`/success/${id}`);
									}}
									data-desktop-atc=''
									className='btn w-90 mainColor secondarybg'>
									Submit
								</button>
							) : ( */}
							<button
								onClick={nextBtnFunc}
								className='btn w-90 mainColor secondarybg'>
								{/* <AiOutlineRight
										className='mainColor'
										style={{ fontSize: "22px" }}
									/> */}
								{compSeq < 4 ? t("next") : t("save")}
							</button>
							{/* )} */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
