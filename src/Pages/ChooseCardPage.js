import React, { useState, useEffect } from "react";
import CommonChooseCard from "../Components/CommonChooseCard";
import { useNavigate } from "react-router-dom";
import { Stage, Layer, Image, Text, Line } from "react-konva";
import { getDatabase, ref, child, get } from "firebase/database";
import useImage from "use-image";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../ownassets/firstsesion.png";
import Cropper from "react-cropper";
import "../Components/OnClickCard/OnClickCard.css";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CustomHook } from "../CustomHook/CustomHook";
import { saveAs } from "file-saver";
import AdsComp from "../Components/AdsComp";
import { Modal } from "react-bootstrap";
import CustomLargeLoader from "../Components/CustomLargeLoader";
import { countries, recomadCuntries } from "../Database/Database";
import {
	setCardInfo,
	setCardInfoImages,
	setClubs,
} from "../store/projectSlice";

const ChooseCardPage = () => {
	const { dbTranslator } = CustomHook();
	const navigate = useNavigate();
	const { footballCards, clubs } = useSelector((state) => state.project);
	const [selectedCard, setselectedCard] = useState(
		footballCards?.length > 0 ? footballCards[0] : {}
	);
	const stageRef = React.useRef();
	const [showClubs, setshowClubs] = useState(false);
	const [showCountry, setshowCountry] = useState(false);
	const [carddataImages, setcarddataImages] = useState({
		imglink: defaultImg,
		country: "https://cdn.shopify.com/s/files/1/2412/8291/files/es_120x.png",
		team: "https://cdn.shopify.com/s/files/1/2412/8291/files/FootballGreatest_120x.png?v=11203880791753341527",
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
	const getBase64 = (file) => {
		return new Promise((resolve) => {
			let baseURL = "";
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				baseURL = reader.result;
				resolve(baseURL);
			};
		});
	};

	const uploadImageFunNew = async (image) => {
		const results = await getBase64(image);
		const rest = await fetch(
			"https://upcradstripepayment-production.up.railway.app/imgeUpload",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					imglink: results?.split("base64,")[1],
					starter: `${results?.split("base64,")[0]}base64,`,
				}),
			}
		);
		return rest.json();
	};
	const [openCropper, setopenCropper] = useState(false);
	const [templinkImg, settemplinkImg] = useState("");
	const [isLargeLoading, setisLargeLoading] = useState(false);
	const handleUpload = async (e) => {
		setisLargeLoading(true);
		const result = await uploadImageFunNew(e.target.files[0]);
		if (result?.imglink) {
			settemplinkImg(result?.imglink);
			setopenCropper(true);
			setisLargeLoading(false);
		} else {
			console.log(result?.error);
		}
	};
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
	const [showAds, setshowAds] = useState(false);
	useEffect(() => {
		setselectedCard(footballCards?.length > 0 ? footballCards[0] : {});
	}, [footballCards]);

	const CustomLeftArrow = (props) => {
		const { className, onClick } = props;

		return (
			<button className={className} onClick={() => onClick()}>
				<AiOutlineLeft className='mainColor' style={{ fontSize: "20px" }} />
			</button>
		);
	};

	const CustomRightArrow = (props) => {
		const { className, onClick } = props;

		return (
			<button className={className} onClick={() => onClick()}>
				<AiOutlineRight className='mainColor' style={{ fontSize: "20px" }} />
			</button>
		);
	};
	const download = (link) => {
		setshowAds(true);
		setTimeout(() => {
			setshowAds(false);
			saveAs(`${link}`, "upCardSoccerLetter.jpg");
		}, 7000);
	};
	const settings2 = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		nextArrow: <CustomRightArrow />,
		prevArrow: <CustomLeftArrow />,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const [inputValue, setInputValue] = useState("");
	const [inputValueClub, setinputValueClub] = useState("");
	const dispatch = useDispatch();

	const filteredData = () => {
		if (inputValue.length > 0) {
			return countries.filter((dat) =>
				dat.name.toLowerCase().includes(inputValue.toLowerCase())
			);
		} else {
			return recomadCuntries;
		}
	};
	const filteredClubs = () => {
		if (inputValueClub !== "") {
			return clubs?.filter((dat) =>
				dat?.name?.toLowerCase()?.includes(inputValueClub?.toLowerCase())
			);
		} else {
			return clubs;
		}
	};
	const [previewOn, setpreviewOn] = useState(false);
	const newDownloadBrandNewFunction = () => {
		const uri = stageRef.current.toDataURL({ pixelRatio: 3 });
		setshowAds(true);
		setTimeout(() => {
			setshowAds(false);
			saveAs(`${uri}`, "upCardSoccerLetter.jpg");
		}, 7000);
	};
	const cropperRef = React.createRef(null);
	const oncrop = () => {
		setcarddataImages({
			...carddataImages,
			imglink: cropperRef.current.cropper
				?.getCroppedCanvas()
				?.toDataURL({ pixelRatio: 3 }),
		});
		setopenCropper(false);
	};
	if (isLargeLoading) {
		return <CustomLargeLoader />;
	}
	return (
		<div style={{ overflowX: "hidden" }}>
			<Modal fullscreen show={openCropper}>
				<div
					style={{
						height: "100vh",
						background: "rgba(255,255,255,0.9)",
					}}
					className='allCenter flex-row'>
					<div className='col-11 col-lg-6 allCenter flex-column'>
						<Cropper
							style={{ height: 400, width: "100%" }}
							preview='.img-preview'
							src={`${templinkImg}`}
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
							{dbTranslator("save")}
						</button>
					</div>
				</div>
			</Modal>

			<Modal fullscreen show={showClubs}>
				<div className='h-100 allCenter flex-column' style={{ width: "97.2%" }}>
					<div className='w-100 h-100'>
						<div
							className='w-100 secondaryColor'
							style={{
								fontSize: "25px",
								marginTop: "5px",
								fontWeight: "bold",
								textAlign: "center",
							}}>
							{dbTranslator("poptionc")}
						</div>
						<div className='row'>
							<input
								value={inputValueClub}
								onChange={(e) => setinputValueClub(e.target.value)}
								placeholder={dbTranslator("search")}
								style={{ height: "40px", margin: "5px auto" }}
							/>
						</div>
						<div
							style={{
								height: "calc(100% - 80px)",
								overflowX: "hidden",
								overflowY: "auto",
								width: "100%",
								marginBottom: "10px",
								padding: "10px 0px",
							}}>
							<div className='row w-100 gx-0'>
								{filteredClubs() &&
									filteredClubs()?.map((dat, index) => (
										<div
											key={index}
											onClick={() => {
												setcarddataImages({
													...carddataImages,
													team: dat?.badge,
												});
												setshowClubs(false);
											}}
											className='customOptionSmal'
											style={{
												border: "1px solid rgba(0,0,0,1)",
												color: "white",
												background: "transparent",
											}}>
											<div
												className='customOptionCircle overflow-hidden'
												style={{ border: "0px" }}>
												<img src={dat?.badge} alt='demoflag' />
											</div>
											{dat?.name}
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</Modal>

			<Modal fullscreen show={showCountry}>
				<div className='h-100 allCenter flex-column' style={{ width: "97.2%" }}>
					<div className='w-100 h-100'>
						<div
							className='w-100 secondaryColor'
							style={{
								fontSize: "25px",
								marginTop: "5px",
								fontWeight: "bold",
								textAlign: "center",
							}}>
							{dbTranslator("poptiond")}
						</div>
						<div className='row'>
							<input
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								placeholder={dbTranslator("search")}
								style={{ height: "40px", margin: "5px auto" }}
							/>
						</div>
						<div
							style={{
								height: "calc(100% - 80px)",
								overflowX: "hidden",
								overflowY: "auto",
								width: "100%",
								marginBottom: "10px",
								padding: "10px 0px",
							}}>
							<div className='row w-100 gx-0'>
								{filteredData() &&
									filteredData()?.map((dat, index) => (
										<div
											key={index}
											onClick={() => {
												setcarddataImages({
													...carddataImages,
													country: `https://cdn.shopify.com/s/files/1/2412/8291/files/${dat?.code}_120x.png`,
												});
												setshowCountry(false);
											}}
											className='customOptionSmal'
											style={{
												border: "1px solid rgba(0,0,0,1)",
												color: "white",
												background: "transparent",
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
					</div>
				</div>
			</Modal>

			<div
				className='col-10 mx-auto'
				style={{
					height: "fit-content",
					minHeight: "60vh",
					overflow: "visible",
					background: "white",
				}}>
				<div
					style={{ margin: "50px auto" }}
					className='row d-none h-100 w-100 gx-0'>
					<Slider {...settings2}>
						{footballCards &&
							footballCards?.map((dat) => (
								<div
									key={dat?.id}
									className='col-12 h-100 d-flex align-items-center flex-column justify-content-center'>
									<img
										style={{
											objectFit: "contain",
											width: "100%",
											maxWidth: "350px",
										}}
										src={dat?.imgSrc}
										alt='teams'
									/>

									<div
										className='row w-100 mx-auto'
										style={{ marginTop: "30px" }}>
										<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
											<button
												style={{
													width: "100%",
													maxWidth: "180px",
													textDecoration: "none !important",
													marginBottom: "20px",
													textTransform: "initial",
												}}
												onClick={() => download(`${dat?.imgSrc}`)}
												className='btn mainColor secondarybg'>
												{dbTranslator("downpng")}
											</button>
										</div>
										<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
											<button
												style={{
													width: "100%",
													maxWidth: "180px",
													marginBottom: "20px",
												}}
												onClick={() =>
													navigate(`/cardCustomization1/${dat?.id}`)
												}
												className='btn mainColor thirdbg'>
												{dbTranslator("buyphy")}
											</button>
										</div>
									</div>
								</div>
							))}
					</Slider>
				</div>
				<div
					style={{ margin: "50px auto" }}
					className='row d-flex h-100 w-100 gx-0'>
					<div className='col-12 col-md-8  h-100 d-flex align-items-center flex-column justify-content-center'>
						<p
							className='respiveLabel mainColor w-100'
							style={{ textAlign: "center" }}>
							{dbTranslator("appPagetxt")}
						</p>

						{/*Editor start */}

						{previewOn ? (
							<>
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
								<div
									className='row w-100 mx-auto'
									style={{ marginTop: "30px" }}>
									<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
										<button
											style={{
												width: "100%",
												maxWidth: "180px",
												textDecoration: "none !important",
												marginBottom: "20px",
												textTransform: "initial",
											}}
											onClick={() => setpreviewOn(false)}
											className='btn mainColor secondarybg'>
											{dbTranslator("editor")}
										</button>
									</div>
									<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
										<button
											style={{
												width: "100%",
												maxWidth: "180px",
												textDecoration: "none !important",
												marginBottom: "20px",
												textTransform: "initial",
											}}
											onClick={newDownloadBrandNewFunction}
											className='btn mainColor thirdbg'>
											{dbTranslator("downpng")}
										</button>
									</div>
								</div>
							</>
						) : (
							<>
								<div className='editablecARD'>
									<img
										crossOrigin='anonymous'
										src={selectedCard?.imgSrc}
										alt='text'
									/>
									<div className='editableContent'>
										<div className='upperhalf'>
											<div className='inputConatiners'>
												<div className='blackcontainer'>
													<input
														maxLength={2}
														placeholder='00'
														style={{ color: selectedCard?.textColor }}
														value={carddata?.overallRatting}
														onChange={(e) => {
															setcarddata({
																...carddata,
																overallRatting: e.target.value,
															});
														}}
													/>
													<input
														maxLength={3}
														placeholder='PS'
														style={{ color: selectedCard?.textColor }}
														value={carddata?.mainPosition}
														onChange={(e) => {
															setcarddata({
																...carddata,
																mainPosition: e.target.value,
															});
														}}
													/>
													<div
														className='smallLinehh'
														style={{ background: selectedCard?.textColor }}
													/>
													<div className='smallImg'>
														<button
															onClick={() => setshowCountry(true)}
															className='smallSelctors'>
															<img
																src={carddataImages?.country}
																alt='country'
															/>
														</button>
													</div>
													<div
														className='smallLinehh'
														style={{ background: selectedCard?.textColor }}
													/>
													<div className='smallImg'>
														<button
															onClick={() => setshowClubs(true)}
															className='smallSelctors'>
															<img src={carddataImages?.team} alt='country' />
														</button>
													</div>
												</div>
												<div className='imgContainer'>
													<label htmlFor='file'>
														<input
															id='file'
															placeholder='image'
															hidden
															type='file'
															accept='image/png,image/jpg,image/jpeg'
															onChange={handleUpload}
														/>
														<img src={carddataImages?.imglink} alt='title' />
													</label>
												</div>
											</div>
											<div className='nameContaiber'>
												<input
													maxLength={12}
													placeholder='Your Name'
													style={{ color: selectedCard?.textColor }}
													value={carddata?.name}
													onChange={(e) => {
														setcarddata({
															...carddata,
															name: e.target.value,
														});
													}}
												/>
												<div
													className='largelinh'
													style={{ background: selectedCard?.textColor }}
												/>
											</div>
										</div>
										<div className='lowerhalf'>
											<div className='leftinputs'>
												<div className='fieldsContainer'>
													<input
														maxLength={2}
														placeholder='00'
														style={{
															fontWeight: "bold",
															color: selectedCard?.textColor,
														}}
														value={carddata?.subpValue1}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subpValue1: e.target.value,
															});
														}}
													/>
													<input
														maxLength={3}
														placeholder='PS1'
														style={{ color: selectedCard?.textColor }}
														value={carddata?.subp1}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subp1: e.target.value,
															});
														}}
													/>
												</div>
												<div className='fieldsContainer'>
													<input
														maxLength={2}
														placeholder='00'
														style={{
															fontWeight: "bold",
															color: selectedCard?.textColor,
														}}
														value={carddata?.subpValue2}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subpValue2: e.target.value,
															});
														}}
													/>
													<input
														maxLength={3}
														placeholder='PS1'
														style={{ color: selectedCard?.textColor }}
														value={carddata?.subp2}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subp2: e.target.value,
															});
														}}
													/>
												</div>
												<div className='fieldsContainer'>
													<input
														maxLength={2}
														placeholder='00'
														style={{
															fontWeight: "bold",
															color: selectedCard?.textColor,
														}}
														value={carddata?.subpValue3}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subpValue3: e.target.value,
															});
														}}
													/>
													<input
														maxLength={3}
														placeholder='PS1'
														style={{ color: selectedCard?.textColor }}
														value={carddata?.subp3}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subp3: e.target.value,
															});
														}}
													/>
												</div>
											</div>
											<div
												className='verticalLine'
												style={{ background: selectedCard?.textColor }}
											/>
											<div className='leftinputs'>
												<div className='fieldsContainer'>
													<input
														maxLength={2}
														placeholder='00'
														value={carddata?.subpValue4}
														style={{
															fontWeight: "bold",
															color: selectedCard?.textColor,
														}}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subpValue4: e.target.value,
															});
														}}
													/>
													<input
														maxLength={3}
														placeholder='PS1'
														style={{ color: selectedCard?.textColor }}
														value={carddata?.subp4}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subp4: e.target.value,
															});
														}}
													/>
												</div>
												<div className='fieldsContainer'>
													<input
														maxLength={2}
														placeholder='00'
														value={carddata?.subpValue5}
														style={{
															fontWeight: "bold",
															color: selectedCard?.textColor,
														}}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subpValue5: e.target.value,
															});
														}}
													/>
													<input
														maxLength={3}
														placeholder='PS1'
														style={{ color: selectedCard?.textColor }}
														value={carddata?.subp5}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subp5: e.target.value,
															});
														}}
													/>
												</div>
												<div className='fieldsContainer'>
													<input
														maxLength={2}
														placeholder='00'
														value={carddata?.subpValue6}
														style={{
															fontWeight: "bold",
															color: selectedCard?.textColor,
														}}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subpValue6: e.target.value,
															});
														}}
													/>
													<input
														maxLength={3}
														placeholder='PS1'
														style={{ color: selectedCard?.textColor }}
														value={carddata?.subp6}
														onChange={(e) => {
															setcarddata({
																...carddata,
																subp6: e.target.value,
															});
														}}
													/>
												</div>
											</div>
										</div>
										<div className='seclowehalf'>
											<div
												className='smallestLineh'
												style={{ background: selectedCard?.textColor }}
											/>
										</div>
									</div>
								</div>
								<div
									className='row w-100 mx-auto'
									style={{ marginTop: "30px" }}>
									<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
										<button
											style={{
												width: "100%",
												maxWidth: "180px",
												textDecoration: "none !important",
												marginBottom: "20px",
												textTransform: "initial",
											}}
											onClick={() => setpreviewOn(true)}
											className='btn mainColor secondarybg'>
											{dbTranslator("downpng")}
										</button>
									</div>
									<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
										<button
											style={{
												width: "100%",
												maxWidth: "180px",
												marginBottom: "20px",
											}}
											onClick={() => {
												dispatch(setCardInfo({ cardinfo: carddata }));
												dispatch(
													setCardInfoImages({
														cardInfoImages: carddataImages,
													})
												);
												navigate(`/cardCustomization1/${selectedCard?.id}`);
											}}
											className='btn mainColor thirdbg'>
											{dbTranslator("buyphy")}
										</button>
									</div>
								</div>
							</>
						)}

						{/*Editor End */}
					</div>
					<div className='col-12 col-md-4 mx-auto h-100'>
						<CommonChooseCard title={dbTranslator("chooseard")}>
							<div className='col-12 h-100'>
								<div
									style={{
										width: "100%",
										height: "450px",
										overflowX: "hidden",
										overflowY: "auto",
									}}>
									<div className='row'>
										{footballCards &&
											footballCards?.map((dat, index) => (
												<>
													<div
														onClick={() => setselectedCard(dat)}
														className={`col-6 col-md-4 d-flex align-items-center justify-content-center mb-2
											}`}>
														<div
															style={{
																background: "white",
																padding: "5px",
																cursor: "pointer",
															}}>
															<img
																style={{
																	objectFit: "contain",
																	width: "100%",
																	maxWidth: "60px",
																}}
																src={dat.imgSrc}
																alt={dat.title}
															/>
														</div>
													</div>
												</>
											))}
									</div>
								</div>
							</div>
						</CommonChooseCard>
					</div>
				</div>
			</div>
			<Modal fullscreen show={showAds}>
				<div className='shwoadscardsadsdiv'>
					<AdsComp slotnumber='5755097747' />
				</div>
			</Modal>
		</div>
	);
};

export default ChooseCardPage;
