import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExtraServiceComp from "../Components/ExtraServiceComp";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import defaultImg from "../ownassets/firstsesion.png";
import { Stage, Layer, Image, Text, Line } from "react-konva";
import useImage from "use-image";
import { toast } from "react-toastify";
import { setCartItems } from "../store/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { CustomHook } from "../CustomHook/CustomHook";
import { uploadImage } from "../Database/Database";
import CustomLargeLoader from "../Components/CustomLargeLoader";
export const CardCustomization1 = () => {
	const { dbTranslator } = CustomHook();
	const [isbigloading, setisbigloading] = useState(false);
	const { footballCards, cartItems, clubs, cardinfo, cardInfoImages } =
		useSelector((state) => state.project);
	const { id } = useParams();
	const selectedCard = footballCards?.find((dat) => dat.id === id);
	const dispatch = useDispatch();
	const [carddataImages, setcarddataImages] = useState({
		imglink: defaultImg,
		country: "https://cdn.shopify.com/s/files/1/2412/8291/files/es_120x.png",
		team: "https://cdn.shopify.com/s/files/1/2412/8291/files/FootballGreatest_120x.png?v=11203880791753341527",
	});

	const [carddata, setcarddata] = useState({
		overallRatting: "98",
		mainPosition: "POR",
		name: "Up Card",
		subpValue1: "67",
		subpValue2: "87",
		subpValue3: "99",
		subpValue4: "44",
		subpValue5: "98",
		subpValue6: "65",
		subp1: "SAL",
		subp2: "PAR",
		subp3: "SAQ",
		subp4: "REF",
		subp5: "VEL",
		subp6: "POS",
	});
	const fetchData = () => {
		setcarddata(cardinfo);
		setcarddataImages(cardInfoImages);
	};
	useEffect(() => {
		fetchData();
	});

	const [image] = useImage(`${selectedCard?.imgSrc}`, "Anonimus");
	const [useravtar] = useImage(
		`${
			carddataImages?.imglink
				? carddataImages?.imglink
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`,
		"Anonimus"
	);
	const [clubFlagavtar] = useImage(
		`${
			carddataImages?.team
				? carddataImages?.team
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`,
		"Anonimus"
	);
	const [countryflagavtar] = useImage(
		`${
			carddataImages?.country
				? carddataImages?.country
				: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
		}`,
		"anonymous"
	);

	let rattingdata = 4.5;
	let ratting = Math.floor(rattingdata);
	let decimalpoint = rattingdata - ratting;
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
	const stageRef = React.useRef();
	const newref = React.useRef();

	const addToCartFunction = (imglink) => {
		let newdata = [
			...cartItems,
			{
				id: new Date().getTime(),
				pid: id,
				imgSrc: imglink,
				extra: extraService,
			},
		];
		dispatch(
			setCartItems({
				cartItems: newdata,
			})
		);
		window.localStorage.setItem("upcardcartArry", JSON.stringify(newdata));

		toast.success(dbTranslator("paddcrt"), {
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
	const nextBtnFunc = async () => {
		if (compSeq === 0) {
			if (extraService?.title !== "") {
				const downloadfunc = () => {
					const uri = stageRef.current.toDataURL({ pixelRatio: 3 });
					return uri;
				};
				const result = downloadfunc();
				setisbigloading(true);
				const rest = await uploadImage(result);
				if (rest?.data) {
					addToCartFunction(rest?.data);
				} else {
					console.log(rest?.error);
				}
				setisbigloading(false);
			} else {
				toast.error(dbTranslator("porrand"), {
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
		} else {
			console.log("done");
		}
	};
	if (isbigloading) {
		return <CustomLargeLoader />;
	} else {
		return (
			<>
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
								<ExtraServiceComp
									value={extraService}
									setvalue={(dat) => setextraService(dat)}
								/>
							)}
						</div>
						<div className='order-1 order-md-2 mb-4 col-12 col-md-6 allCenter flex-column'>
							<div className='btn nillbtn mainColor'>
								{dbTranslator("pvwonly")}
							</div>
							<div ref={newref}>
								<div className='d-none d-sm-block allCenter'>
									<Stage
										ref={stageRef}
										width={377}
										height={599}
										className='mx-auto'>
										<Layer>
											<Image
												x={0}
												y={0}
												height={599}
												width={377}
												image={image}
											/>
											<Line
												x={74}
												y={196}
												points={[0, 0, 40, 0]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Line
												x={74}
												y={250}
												points={[0, 0, 40, 0]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Line
												x={165}
												y={515}
												points={[0, 0, 47, 0]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Line
												x={72}
												y={380}
												points={[0, 0, 230, 0]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Line
												x={186}
												y={398}
												points={[0, 0, 0, 107]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Text
												width={50}
												height={30}
												x={70}
												y={395}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue1}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp1}`}
												fontSize={26}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={70}
												y={435}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue2}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp2}`}
												fontSize={26}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={70}
												y={475}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue3}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp3}`}
												fontSize={26}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={190}
												y={395}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue4}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp4}`}
												fontSize={26}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={190}
												y={435}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue5}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp5}`}
												fontSize={26}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={190}
												y={475}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue6}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp6}`}
												fontSize={26}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
											/>
											<Text
												width={220}
												height={40}
												x={80}
												y={337}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.name}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${
													carddata?.overallRatting
														? carddata?.overallRatting
														: ""
												}`}
												fontSize={56}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={40}
												x={70}
												y={155}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.mainPosition}`}
												fontSize={28}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
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
												height={45}
												width={45}
												image={clubFlagavtar}
												scale={{ x: 1, y: 1 }}
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
								<div className='d-block d-sm-none allCenter'>
									<Stage
										ref={stageRef}
										width={270}
										height={400}
										className='mx-auto'>
										<Layer>
											<Image
												x={0}
												y={0}
												height={400}
												width={270}
												image={image}
											/>
											<Line
												x={54}
												y={130}
												points={[0, 0, 27, 0]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Line
												x={54}
												y={168}
												points={[0, 0, 27, 0]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Line
												x={117}
												y={343}
												points={[0, 0, 36, 0]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Line
												x={50}
												y={254}
												points={[0, 0, 166, 0]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Line
												x={133.3}
												y={266}
												points={[0, 0, 0, 71]}
												stroke={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
											/>
											<Text
												width={50}
												height={30}
												x={30}
												y={260}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue1}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp1}`}
												fontSize={19}
												verticalAlign={"middle"}
												align={"center"}
												fontStyle={""}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={30}
												y={287}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue2}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp2}`}
												fontSize={19}
												verticalAlign={"middle"}
												align={"center"}
												fontStyle={""}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={30}
												y={312}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue3}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp3}`}
												fontSize={19}
												verticalAlign={"middle"}
												align={"center"}
												fontStyle={""}
												fontFamily='NormalFont'
											/>

											<Text
												width={50}
												height={30}
												x={135}
												y={260}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue4}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp4}`}
												fontSize={19}
												verticalAlign={"middle"}
												align={"center"}
												fontStyle={""}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={135}
												y={287}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue5}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp5}`}
												fontSize={19}
												verticalAlign={"middle"}
												align={"center"}
												fontStyle={""}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={30}
												x={135}
												y={312}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subpValue6}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.subp6}`}
												fontSize={19}
												verticalAlign={"middle"}
												align={"center"}
												fontStyle={""}
												fontFamily='NormalFont'
											/>

											<Text
												width={220}
												height={40}
												x={23}
												y={218}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.name}`}
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
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${
													carddata?.overallRatting
														? carddata?.overallRatting
														: ""
												}`}
												fontSize={38}
												verticalAlign={"middle"}
												align={"center"}
												fontStyle={""}
												fontFamily='NormalFont'
											/>
											<Text
												width={50}
												height={40}
												x={43}
												y={97}
												fill={
													selectedCard?.textColor
														? selectedCard?.textColor
														: "white"
												}
												text={`${carddata?.mainPosition}`}
												fontSize={22}
												verticalAlign={"middle"}
												align={"center"}
												fontFamily='NormalFont'
												fontStyle={"normal"}
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
												x={53}
												y={172}
												height={30}
												width={30}
												image={clubFlagavtar}
												scale={{ x: 1, y: 1 }}
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
									{dbTranslator("Excellent")}
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
										compSeq > 0
											? setcompSeq(compSeq - 1)
											: navigate(`/products`);
									}}
									className='btn w-90 mb-4'
									style={{
										background: "rgba(33,50,94,0.25)",
										color: "rgba(33,50,94,1)",
									}}>
									{compSeq > 0 ? dbTranslator("prevos") : dbTranslator("home")}
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
											width: `99%`,
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
									{compSeq < 4 ? dbTranslator("next") : dbTranslator("save")}
								</button>
								{/* )} */}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
};
