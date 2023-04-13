import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import design1 from "../ownassets/design1.png";
import BasicInfoComp from "../Components/BasicInfoComp";
import ChooseClubComp from "../Components/ChooseClubComp";
import ChooseFlagComp from "../Components/ChooseFlagComp";
import ChooseAttributComp from "../Components/ChooseAttributComp";
import ExtraServiceComp from "../Components/ExtraServiceComp";
import { AiOutlineClose } from "react-icons/ai";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { Stage, Layer, Image, Text } from "react-konva";
import useImage from "use-image";
import { toast } from "react-toastify";
import { setCartItems } from "../store/projectSlice";
import { useDispatch, useSelector } from "react-redux";
export const CardCustomization = () => {
	const { footballCards, cartItems } = useSelector((state) => state.project);
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
	const [fullScreeniew, setFullScreeniew] = useState(false);
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
	const handleUpload = async (e) => {
		const result = await uploadImageFun(e.target.files[0]);
		if (result?.secure_url?.length > 0) {
			setBasicInfo({
				...BasicInfo,
				image: result?.secure_url,
				imageRef: result?.secure_url,
			});
		}
	};
	const addToCartFunction = (imglink) => {
		let newdata = [...cartItems, { pid: id, imgSrc: imglink }];
		dispatch(
			setCartItems({
				cartItems: newdata,
			})
		);
		window.localStorage.setItem("upCradCartArry", JSON.stringify(newdata));

		toast.success("Product added to cart", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		navigate("/products");
	};
	const nextBtnFunc = () => {
		if (compSeq === 0) {
			if (
				BasicInfo?.name?.length > 0 &&
				BasicInfo?.position?.length > 0 &&
				BasicInfo?.image?.length > 0
			) {
				setcompSeq(1);
			} else {
				toast.error("Please fill all fields", {
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
				clubFlag?.badge?.length > 0 &&
				clubFlag?.id?.length > 0 &&
				clubFlag?.name?.length > 0
			) {
				setcompSeq(2);
			} else {
				toast.error("Please choose a club badge", {
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
			if (
				selectedCountry?.name?.length > 0 &&
				selectedCountry?.code?.length > 0
			) {
				setcompSeq(3);
			} else {
				toast.error("Please choose a country", {
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
				subPositionsVal?.fastValue &&
				subPositionsVal?.secValue &&
				subPositionsVal?.thrdValue &&
				subPositionsVal?.forValue &&
				subPositionsVal?.fifValue &&
				subPositionsVal?.sixValue
			) {
				setcompSeq(4);
			} else {
				toast.error("Please fill all fields or press Randomize", {
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
			const downloadfunc = () => {
				const uri = stageRef.current.toDataURL();
				return uri;
			};
			const result = downloadfunc();
			addToCartFunction(result);
		}
	};
	useEffect(() => {
		if (compSeq >= 4) {
		}
	}, [compSeq]);
	console.log(subPositionsVal);
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
						{compSeq === 4 && <ExtraServiceComp />}
					</div>
					<div className='order-1 order-md-2 mb-4 col-12 col-md-6 allCenter flex-column'>
						<button className='btn mainColor secondarybg'>Preview Only</button>
						<div ref={newref}>
							<div className='d-none d-sm-block'>
								<Stage ref={stageRef} width={377} height={599}>
									<Layer>
										<Image x={0} y={0} height={599} width={377} image={image} />
										<Text
											width={50}
											height={30}
											x={80}
											y={390}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.fastValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={130}
											y={390}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.fastValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={80}
											y={425}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.secValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={130}
											y={425}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.secValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={80}
											y={460}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.thrdValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={130}
											y={460}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.thrdValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>

										<Text
											width={50}
											height={30}
											x={200}
											y={390}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.forValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={250}
											y={390}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.forValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={200}
											y={425}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.fifValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={250}
											y={425}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.fifValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={200}
											y={460}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.sixValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={250}
											y={460}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.sixValue}`}
											fontSize={16}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>

										<Text
											width={220}
											height={40}
											x={80}
											y={320}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${BasicInfo?.name}`}
											fontSize={25}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={"bold"}
										/>
										<Text
											width={60}
											height={50}
											x={80}
											y={90}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${overAllRatting > 0 ? overAllRatting : ""}`}
											fontSize={30}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={"bold"}
										/>
										<Text
											width={50}
											height={40}
											x={80}
											y={140}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${BasicInfo?.position}`}
											fontSize={18}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Image
											x={80}
											y={193}
											height={40}
											width={50}
											image={countryflagavtar}
										/>
										<Image
											x={80}
											y={246}
											height={40}
											width={50}
											image={clubFlagavtar}
										/>
										<Image
											x={155}
											y={115}
											height={165}
											width={140}
											image={useravtar}
										/>
									</Layer>
								</Stage>
							</div>
							<div className='d-block d-sm-none'>
								<Stage ref={stageRef} width={270} height={400}>
									<Layer>
										<Image x={0} y={0} height={400} width={270} image={image} />
										<Text
											width={50}
											height={30}
											x={30}
											y={255}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.fastValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={80}
											y={255}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.fastValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={30}
											y={283}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.secValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={80}
											y={283}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.secValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={30}
											y={310}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.thrdValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={80}
											y={310}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.thrdValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>

										<Text
											width={50}
											height={30}
											x={135}
											y={255}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.forValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={185}
											y={255}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.forValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={135}
											y={283}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.fifValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={185}
											y={283}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.fifValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={135}
											y={310}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositionsVal.sixValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Text
											width={50}
											height={30}
											x={185}
											y={310}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${subPositions.sixValue}`}
											fontSize={14}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>

										<Text
											width={220}
											height={40}
											x={30}
											y={210}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${BasicInfo?.name}`}
											fontSize={20}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={"bold"}
										/>
										<Text
											width={60}
											height={50}
											x={52}
											y={45}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${overAllRatting > 0 ? overAllRatting : ""}`}
											fontSize={25}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={"bold"}
										/>
										<Text
											width={50}
											height={40}
											x={52}
											y={85}
											fill={
												currentData?.textColor
													? currentData?.textColor
													: "white"
											}
											text={`${BasicInfo?.position}`}
											fontSize={18}
											verticalAlign={"middle"}
											align={"center"}
											fontStyle={""}
										/>
										<Image
											x={56}
											y={127}
											height={28}
											width={35}
											image={countryflagavtar}
										/>
										<Image
											x={56}
											y={164}
											height={28}
											width={35}
											image={clubFlagavtar}
										/>
										<Image
											x={115}
											y={80}
											height={120}
											width={100}
											image={useravtar}
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
								{compSeq > 0 ? "Previous" : "Home"}
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
								{compSeq < 4 ? "Next" : "Done"}
							</button>
							{/* )} */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
