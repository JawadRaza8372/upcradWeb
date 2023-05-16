import React, { useState, useEffect, useLayoutEffect } from "react";
import CommonChooseCard from "../Components/CommonChooseCard";
import { useNavigate } from "react-router-dom";
import { Stage, Layer, Image, Text, Line } from "react-konva";
import { getDatabase, ref, child, get } from "firebase/database";
import useImage from "use-image";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../ownassets/firstsesion.png";
import Cropper from "react-cropper";
import "../Components/OnClickCard/OnClickCard.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
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
		mainPosition: "DC",
		name: "NOMBRE",
		subpValue1: "67",
		subpValue2: "87",
		subpValue3: "99",
		subpValue4: "44",
		subpValue5: "98",
		subpValue6: "65",
		subp1: "RIT",
		subp2: "PAS",
		subp3: "TIR",
		subp4: "REG",
		subp5: "DEF",
		subp6: "FIS",
	});
	useEffect(() => {
		setCardInfo({
			overallRatting: "",
			mainPosition: "",
			name: "",
			subpValue1: "",
			subpValue2: "",
			subpValue3: "",
			subpValue4: "",
			subpValue5: "",
			subpValue6: "",
			subp1: "",
			subp2: "",
			subp3: "",
			subp4: "",
			subp5: "",
			subp6: "",
		});
	}, []);
	useLayoutEffect(() => {
		setCardInfo({
			overallRatting: "",
			mainPosition: "",
			name: "",
			subpValue1: "",
			subpValue2: "",
			subpValue3: "",
			subpValue4: "",
			subpValue5: "",
			subpValue6: "",
			subp1: "",
			subp2: "",
			subp3: "",
			subp4: "",
			subp5: "",
			subp6: "",
		});
	}, []);

	const [showAds, setshowAds] = useState(false);
	useEffect(() => {
		setselectedCard(footballCards?.length > 0 ? footballCards[0] : {});
	}, [footballCards]);

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
	const newDownloadBrandNewFunction = () => {
		const uri = stageRef.current.toDataURL({ pixelRatio: 3 });
		setshowAds(true);
		setTimeout(() => {
			setshowAds(false);
			saveAs(`${uri}`, "upCardSoccerLetter.jpg");
		}, 7000);
	};
	console.log("showsads", showAds);
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
			{showAds && (
				<Modal fullscreen show={showAds}>
					<div className='shwoadscardsadsdiv'>
						<AdsComp slotnumber='5755097747' />
					</div>
				</Modal>
			)}
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
					className='row d-flex h-100 w-100 gx-0'>
					<div
						id='topdiv'
						className='col-12 col-md-8  h-100 d-flex align-items-center flex-column justify-content-center'>
						<p
							className='respiveLabel mainColor w-100'
							style={{ textAlign: "center", marginBottom: "-15px" }}>
							{dbTranslator("appPagetxt")}
						</p>

						{/*Editor start */}
						<div style={{ position: "relative" }}>
							<div className='editableContent'>
								<div className='upperhalf'>
									<div className='inputConatiners'>
										<div className='blackcontainer'>
											<input
												maxLength={2}
												placeholder='00'
												value={carddata?.overallRatting}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														overallRatting: e.target.value,
													});
												}}
											/>
											<input
												maxLength={3}
												placeholder='PS'
												value={carddata?.mainPosition}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														mainPosition: e.target.value,
													});
												}}
											/>
											<div className='smallImg my-1'>
												<button
													onClick={() => setshowCountry(true)}
													className='smallSelctors'>
													<img
														src={
															"https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
														}
														alt='country'
													/>
												</button>
											</div>
											<div className='smallImg'>
												<button
													onClick={() => setshowClubs(true)}
													className='smallSelctors'>
													<img
														src={
															"https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
														}
														alt='country'
													/>
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
												<img
													src={
														"https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
													}
													alt='title'
												/>
											</label>
										</div>
									</div>
									<div className='nameContaiber'>
										<input
											maxLength={12}
											placeholder='Your Name'
											value={carddata?.name}
											onChange={(e) => {
												e.target.setSelectionRange(
													e.target.value.length,
													e.target.value.length
												);
												setcarddata({
													...carddata,
													name: e.target.value,
												});
											}}
										/>
									</div>
								</div>
								<div className='lowerhalf'>
									<div className='leftinputs'>
										<div className='fieldsContainer'>
											<input
												maxLength={2}
												placeholder='00'
												value={carddata?.subpValue1}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														subpValue1: e.target.value,
													});
												}}
											/>
											<input
												maxLength={3}
												placeholder='PS1'
												value={carddata?.subp1}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
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
												value={carddata?.subpValue2}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														subpValue2: e.target.value,
													});
												}}
											/>
											<input
												maxLength={3}
												placeholder='PS1'
												value={carddata?.subp2}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
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
												value={carddata?.subpValue3}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														subpValue3: e.target.value,
													});
												}}
											/>
											<input
												maxLength={3}
												placeholder='PS1'
												value={carddata?.subp3}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														subp3: e.target.value,
													});
												}}
											/>
										</div>
									</div>
									<div className='verticalLine' />
									<div className='leftinputs'>
										<div className='fieldsContainer'>
											<input
												maxLength={2}
												placeholder='00'
												value={carddata?.subpValue4}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														subpValue4: e.target.value,
													});
												}}
											/>
											<input
												maxLength={3}
												placeholder='PS1'
												value={carddata?.subp4}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
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
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														subpValue5: e.target.value,
													});
												}}
											/>
											<input
												maxLength={3}
												placeholder='PS1'
												value={carddata?.subp5}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
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
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
													setcarddata({
														...carddata,
														subpValue6: e.target.value,
													});
												}}
											/>
											<input
												maxLength={3}
												placeholder='PS1'
												value={carddata?.subp6}
												onChange={(e) => {
													e.target.setSelectionRange(
														e.target.value.length,
														e.target.value.length
													);
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
									<div className='smallestLineh' />
								</div>
							</div>

							<div className='d-none d-sm-block allCenter'>
								<Stage
									ref={stageRef}
									width={377}
									height={599}
									className='mx-auto'>
									<Layer>
										<Image x={0} y={0} height={599} width={377} image={image} />
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
											text={`${carddata?.subpValue1?.toUpperCase()}`}
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
											text={`${carddata?.subp1?.toUpperCase()}`}
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
											text={`${carddata?.subpValue2?.toUpperCase()}`}
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
											text={`${carddata?.subp2?.toUpperCase()}`}
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
											text={`${carddata?.subpValue3?.toUpperCase()}`}
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
											text={`${carddata?.subp3?.toUpperCase()}`}
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
											text={`${carddata?.subpValue4?.toUpperCase()}`}
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
											text={`${carddata?.subp4?.toUpperCase()}`}
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
											text={`${carddata?.subpValue5?.toUpperCase()}`}
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
											text={`${carddata?.subp5?.toUpperCase()}`}
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
											text={`${carddata?.subpValue6?.toUpperCase()}`}
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
											text={`${carddata?.subp6?.toUpperCase()}`}
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
											text={`${carddata?.name?.toUpperCase()}`}
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
													? carddata?.overallRatting?.toUpperCase()
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
											text={`${carddata?.mainPosition?.toUpperCase()}`}
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
											x={120}
											y={110}
											height={220}
											width={220}
											image={useravtar}
											scale={{ x: 1, y: 1 }}
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
										<Image x={0} y={0} height={400} width={270} image={image} />
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
											text={`${carddata?.subpValue1?.toUpperCase()}`}
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
											text={`${carddata?.subp1?.toUpperCase()}`}
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
											text={`${carddata?.subpValue2?.toUpperCase()}`}
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
											text={`${carddata?.subp2?.toUpperCase()}`}
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
											text={`${carddata?.subpValue3?.toUpperCase()}`}
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
											text={`${carddata?.subp3?.toUpperCase()}`}
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
											text={`${carddata?.subpValue4?.toUpperCase()}`}
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
											text={`${carddata?.subp4?.toUpperCase()}`}
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
											text={`${carddata?.subpValue5?.toUpperCase()}`}
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
											text={`${carddata?.subp5?.toUpperCase()}`}
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
											text={`${carddata?.subpValue6?.toUpperCase()}`}
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
											text={`${carddata?.subp6?.toUpperCase()}`}
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
											text={`${carddata?.name?.toUpperCase()}`}
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
													? carddata?.overallRatting?.toUpperCase()
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
											text={`${carddata?.mainPosition?.toUpperCase()}`}
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
											x={92}
											y={71}
											height={150}
											width={150}
											image={useravtar}
											scale={{ x: 1, y: 1 }}
										/>
									</Layer>
								</Stage>
							</div>
						</div>
						<div className='w-100 allCenter justify-content-evenly flex-row'>
							{/* <div className='col-6 col-md-6 d-flex align-items-center justify-content-center'> */}
							<button
								style={{
									width: "46%",
									marginBottom: "5px",
								}}
								onClick={newDownloadBrandNewFunction}
								className='btn mainColor secondarybg responsiveFontBtn'>
								{dbTranslator("downpng")}
							</button>
							{/* </div>
							<div className='col-6 col-md-6 d-flex align-items-center justify-content-center'> */}
							<button
								style={{
									width: "46%",
									marginBottom: "5px",
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
								className='btn mainColor thirdbg responsiveFontBtn'>
								{dbTranslator("buyphy")}
							</button>
							{/* </div> */}
						</div>
						{/*  */}

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
														onClick={() => {
															setselectedCard(dat);
															const section = document.querySelector("#topdiv");
															section?.scrollIntoView({
																behavior: "smooth",
																block: "end",
																inline: "nearest",
															});
														}}
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
		</div>
	);
};

export default ChooseCardPage;
