import React from "react";
import ReactPlayer from "react-player";
import instaImag0 from "../ownassets/insta1.webp";
import instaImag1 from "../ownassets/insta2.webp";
import instaImag3 from "../ownassets/insta3.jpg";
import instaImag4 from "../ownassets/insta4.jpg";
import instaImag5 from "../ownassets/insta5.jpg";
import instaImag6 from "../ownassets/insta6.webp";
import instaImag7 from "../ownassets/insta7.jpg";
import instaImag8 from "../ownassets/insta8.jpg";
import startedimage from "../ownassets/image 18.png";
import FootballCards from "../Components/FootballCards";
import secssion from "../ownassets/secsesion.png";
import service1 from "../ownassets/servis1.jpeg";
import service2 from "../ownassets/servis2.jpeg";
import service3 from "../ownassets/servis3.jpeg";
import Slider from "react-slick";
import { Reviewcard } from "../Components/Reviewcard";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import ChooseUsCard from "../Components/ChooseUsCard";
import choose1img from "../ownassets/chose1.png";
import choose2img from "../ownassets/choosestar.png";
import choose3img from "../ownassets/chooseedit.png";
import QuestionCard from "../Components/QuestionCard";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import {
	AiOutlineLeft,
	AiOutlineRight,
	AiOutlineYoutube,
	AiOutlineInstagram,
} from "react-icons/ai";
import { BsTiktok, BsStarFill, BsStarHalf } from "react-icons/bs";
import fistImage1 from "../ownassets/firstimg (1).png";
import fistImage2 from "../ownassets/firstimg (2).png";
import fistImage3 from "../ownassets/firstimg (3).png";
import fistImage4 from "../ownassets/firstimg (4).png";
import ServiceMiniCard from "../Components/ServiceMiniCard";
import { useSelector } from "react-redux";
import { CustomHook } from "../CustomHook/CustomHook";
//import OurServicesCard from "../Components/OurServicesCard";
import banner from "../ownassets/firstsesion1.png";
import reviimg1 from "../ownassets/Canvas.png";
import reviimg2 from "../ownassets/Canvas16.png";
import reviimg3 from "../ownassets/Canvas18.png";
import reviimg4 from "../ownassets/Canvas4.png";
import reviimg5 from "../ownassets/Canvas8.png";

const HomePage = () => {
	const { footballCards, otherProducts } = useSelector(
		(state) => state.project
	);
	const { dbTranslator } = CustomHook();

	const navigate = useNavigate();
	const ourServiceCardData = [
		{ id: 0, imgSrc: service1, title: dbTranslator("oprod") },
		{ id: 1, imgSrc: service2, title: dbTranslator("fotCards") },
		{ id: 2, imgSrc: service3, title: dbTranslator("mtchmomts") },
	];
	const instaImages = [
		{
			imglink: instaImag0,
			id: 0,
		},
		{
			imglink: instaImag1,
			id: 1,
		},
		{ imglink: instaImag3, id: 2 },
		{ imglink: instaImag4, id: 3 },
		{ imglink: instaImag5, id: 4 },
		{ imglink: instaImag6, id: 5 },
		{
			imglink: instaImag7,
			id: 7,
		},
		{
			imglink: instaImag8,
			id: 8,
		},
	];
	const specialFeatures = [
		{ title: dbTranslator("f1"), img: fistImage1 },
		{ title: dbTranslator("f2"), img: fistImage2 },
		{ title: dbTranslator("f3"), img: fistImage3 },
		{ title: dbTranslator("f4"), img: fistImage4 },
	];
	const questioncardraw = [
		{ question: dbTranslator("faq1"), answer: dbTranslator("faq1val") },
		{ question: dbTranslator("faq2"), answer: dbTranslator("faq2val") },
		{
			question: dbTranslator("faq3"),
			answer: dbTranslator("faq3val"),
		},
	];
	const choosedata = [
		{
			imglink: choose1img,
			title: dbTranslator("yChoseUs1"),
			subtitle: dbTranslator("yChoseUs1Val"),
		},
		{
			imglink: choose2img,
			title: dbTranslator("yChoseUs2"),
			subtitle: dbTranslator("yChoseUs2Val"),
		},

		{
			imglink: choose3img,
			title: dbTranslator("yChoseUs3"),
			subtitle: dbTranslator("yChoseUs3Val"),
		},
	];
	const videodataraw = [
		{ videolink: "https://www.youtube.com/embed/brMnOm206cw" },
		{ videolink: "https://www.youtube.com/embed/ymDzA0luT5g" },
		{ videolink: "https://www.youtube.com/embed/TtIoPVRgqpQ" },
		{ videolink: "https://www.youtube.com/embed/xSD71AoO6WA" },
	];
	const CustomLeftArrow = (props) => {
		const { className, onClick } = props;

		return (
			<button className={className} onClick={onClick}>
				<AiOutlineLeft className='mainColor' style={{ fontSize: "20px" }} />
			</button>
		);
	};

	const CustomRightArrow = (props) => {
		const { className, onClick } = props;

		return (
			<button className={className} onClick={onClick}>
				<AiOutlineRight className='mainColor' style={{ fontSize: "20px" }} />
			</button>
		);
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <CustomRightArrow />,
		prevArrow: <CustomLeftArrow />,
	};
	const settings3 = {
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		speed: 50,
		dots: true,
		slidesToScroll: 1,
		swipeToSlide: true,
		nextArrow: <CustomRightArrow />,
		prevArrow: <CustomLeftArrow />,
	};
	const settings2 = {
		dots: true,
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
	const reviewraw = [
		{
			name: "Oliver",
			stars: 5,
			message: "I like this socccer card very much felt like royality.",
			imageurl: reviimg1,
		},
		{
			name: "Alejandro",
			stars: 5,
			message: "Me gustó mucho esta combinación de colores es increíble",
			imageurl: reviimg2,
		},
		{
			name: "Lorenzo",
			stars: 4,
			message:
				"Mi è piaciuto così tanto il colore nero su oro che si adatta alla mia personalità",
			imageurl: reviimg3,
		},
		{
			name: "Laurent",
			stars: 5,
			message:
				"Une des cartes préférées avec ma combinaison de couleurs préférée.",
			imageurl: reviimg4,
		},
		{
			name: "Jürgen",
			stars: 4,
			message:
				"Eine goldene Karte fühlt sich an wie ein Geschenk des Königs an einen Adligen.",
			imageurl: reviimg5,
		},
	];
	let sellerspara = dbTranslator("tbNewSellerPara");
	return (
		<>
			{/*First Container */}
			<div id='mainSection' className='firstContWrapper'>
				<div className='allCenter flex-column firstCont'>
					<div className='col-12 mx-auto h-100'>
						<div className='row h-100 m-0'>
							<div
								style={{ padding: "25px 20px", paddingTop: "0px" }}
								className='order-2 order-md-1 col-12 gb-2 col-md-6 d-none d-sm-flex align-items-start justify-content-center flex-column'>
								<h1
									className='firstSectionHeading newColor'
									style={{
										color: "white",
										margin: "10px 0px",
										textTransform: "none",
									}}>
									{dbTranslator("perfect")}
								</h1>
								<p
									className='resptextp newColor'
									style={{
										marginTop: "20px",
										marginBottom: "20px",
										color: "white",
										textTransform: "none",
									}}>
									{dbTranslator("subperfect")}
								</p>
								<button
									onClick={() => navigate("/products")}
									className='btn newColor secondarybg'>
									{dbTranslator("shpCrd")}
								</button>
							</div>
							<div className='order-1 order-md-2 d-none d-sm-flex p-0 col-12 col-md-6 allCenter flex-column'>
								<img
									style={{
										margin: "0px auto",
										marginBottom: "10px",
										width: "100%",
										objectFit: "contain",
									}}
									src={banner}
									alt='first sectionimage'
								/>
								{/* <button
									onClick={() => navigate("/products")}
									className='btn mainColor secondarybg d-block d-md-none mb-4'>
									{dbTranslator("shpCrd")}
								</button> */}
							</div>
						</div>
					</div>

					<div className='mainbg d-none d-md-flex bottomLineDiv allCenter'>
						<div className='row gx-0 w-100 mx-auto'>
							<div className='col-12 col-md-3 allCenter'>
								<span style={{ color: "white" }}>
									<BsStarFill
										style={{ fontSize: "18px", marginRight: "10px" }}
										className='secondaryColor'
									/>
									{dbTranslator("tpilot1")}
								</span>
							</div>
							<div className='col-12 col-md-3 allCenter'>
								<span style={{ margin: "0px 10px" }}>
									{Array(4)
										.fill()
										.map((dat, index) => (
											<BsStarFill
												key={index}
												style={{ fontSize: "18px", marginLeft: "5px" }}
												className='secondaryColor'
											/>
										))}
									<BsStarHalf
										style={{ fontSize: "18px", marginLeft: "5px" }}
										className='secondaryColor'
									/>
								</span>
							</div>
							<div className='col-12 col-md-6 allCenter'>
								<span style={{ color: "white" }}>
									{dbTranslator("TScore")} : 4.5 | 500+ {dbTranslator("review")}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*Second Container */}
			<h1
				className='newfirstSectionHeading mainColor fw-bold d-block d-sm-none'
				style={{
					marginTop: "-22px",
					marginBottom: "-20px",
					textTransform: "none",
					textAlign: "center",
				}}>
				{dbTranslator("perfectpresent")}
			</h1>
			<div className='secondContainer'>
				<div className='col-11 col-lg-10 my-2 mx-auto h-100 allCenter flex-column'>
					<div className='row w-100 h-88 my-0 my-md-4'>
						<div
							className='col-12 mb-4 col-lg-6 order-2 order-md-1 allCenter flex-column'
							style={{ padding: "0px" }}>
							<div className='allCenter flex-column secondContainerCard'>
								<h3
									style={{ fontWeight: "bold", textTransform: "capitalize" }}
									className='mainColor'>
									{dbTranslator("TBSeller")}
								</h3>
								<hr
									className='mainbg'
									style={{
										height: "4px",
										borderRadius: "4px",
										width: "40%",
									}}
								/>
								<div className='allCenter flex-column' style={{ width: "80%" }}>
									<p className='mainColor' style={{ fontWeight: "700" }}>
										{sellerspara}
									</p>
									<button
										onClick={() => navigate("/products")}
										className='btn mainColor secondarybg d-none d-lg-block'>
										{dbTranslator("TBSeller")}
									</button>
								</div>
								<img
									src={secssion}
									alt='shop best sellers'
									style={{
										objectFit: "contain",
										marginLeft: "auto",
										marginRight: "auto",
										marginTop: "20px",
										borderRadius: "24px",
										minHeight: "320px",
										width: "95%",
									}}
								/>
								<button
									onClick={() => navigate("/products")}
									className='btn mainColor secondarybg d-block d-lg-none mt-3'>
									{dbTranslator("TBSeller")}
								</button>
							</div>
						</div>
						<div className='col-12 mb-4 col-lg-6  order-1 order-md-2 allCenter flex-column'>
							<div className='row w-100 h-100  d-flex d-md-none'>
								<Slider {...settings3}>
									{footballCards &&
										footballCards
											?.slice(4, 10)
											?.map((dat) => (
												<FootballCards
													onClickFun={() =>
														navigate(`/cardCustomization/${dat.id}`)
													}
													key={dat.id + dat.title + "sliderfootball"}
													isbestSeller={true}
													sorce={dat.imgSrc}
													title={dat.title}
													price={dat.price}
													oldprice={dat.oldprice}
												/>
											))}
								</Slider>
							</div>
							<div className='row w-100 d-none d-md-flex'>
								{footballCards &&
									footballCards?.slice(4, 8)?.map((dat) => (
										<div
											key={dat.id}
											className='col-12 col-sm-6 mx-auto allCenter'>
											<FootballCards
												onClickFun={() =>
													navigate(`/cardCustomization/${dat.id}`)
												}
												isbestSeller={true}
												sorce={dat.imgSrc}
												title={dat.title}
												price={dat.price}
												oldprice={dat.oldprice}
											/>
										</div>
									))}
							</div>
							<div className='row w-100 mt-3 h-100 allCenter'>
								<button
									onClick={() => navigate("/products")}
									className='btn mainColor secondarybg'
									style={{ maxWidth: "170px", textTransform: "capitalize" }}>
									{dbTranslator("showmore")}
								</button>
							</div>
						</div>
					</div>
					<div className='row my-4 w-100 gx-0'>
						{specialFeatures.map((dat, index) => (
							<div key={index} className='col-6 col-md-3 mb-2'>
								<div
									style={{
										width: "120px",
										height: "max-content",
									}}
									className='allCenter flex-column mx-auto h-100'>
									<img
										style={{ width: "100%", objectFit: "contain" }}
										src={dat.img}
										alt={dat.title}
									/>
									<span
										style={{
											textAlign: "center",
											fontSize: "16px",
											fontWeight: "500",
										}}>
										{dat.title}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/*third Container */}

			{/* <div className='allCenter flex-column thirdContainer'>
				<div className='allCenter flex-column'>
					<h3 style={{ fontWeight: "bold" }} className='mainColor'>
						{dbTranslator("service")}
					</h3>
					<hr
						className='mainbg'
						style={{
							height: "4px",
							borderRadius: "4px",
							width: "40%",
						}}
					/>
				</div>

				<OurServicesCard />
			</div> */}
			{/*fourth Container */}

			<div className='allCenter fourthContainer flex-column'>
				<div className='col-11 col-lg-10 mx-auto h-100'>
					<div className='row w-100 mx-auto h-100'>
						<div className='col-12 gb-2 col-md-5 col-lg-4 d-flex align-items-start justify-content-center flex-column'>
							<h3 style={{ fontWeight: "bold" }} className='mainColor'>
								{dbTranslator("oprod")}
							</h3>
							<hr
								className='mainbg'
								style={{
									height: "4px",
									borderRadius: "4px",
									width: "40%",
								}}
							/>
							<p className='mainColor'>{dbTranslator("servicep")}</p>
						</div>
						<div className='col-12 col-md-7 col-lg-8 allCenter flex-column'>
							<div className='row w-100 h-100 d-flex d-md-none'>
								<Slider {...settings2}>
									{ourServiceCardData[0]?.title &&
										ourServiceCardData.map((dat, index) => (
											<ServiceMiniCard
												onClickFun={() => navigate(`/otherProducts`)}
												key={dat.id + index + "sliderservice" + dat.title}
												sorce={dat.imgSrc}
												title={dat.title}
											/>
										))}
								</Slider>
							</div>
							<div className='row d-none d-md-flex'>
								{ourServiceCardData[0]?.title &&
									ourServiceCardData.map((dat) => (
										<div
											key={dat.id}
											className='col-12 col-sm-6 col-md-4 h-100 allCenter'>
											<ServiceMiniCard
												onClickFun={() => navigate(`/otherProducts`)}
												sorce={dat.imgSrc}
												title={dat.title}
											/>
										</div>
									))}
							</div>
							{/* <img
								style={{
									objectFit: "contain",
									width: "90%",
								}}
								src={ourservices2}
								alt='our services secondimage'
							/> */}
						</div>
					</div>
				</div>
			</div>
			{/*fifth Container */}
			{otherProducts?.length > 0 && (
				<div className='allCenter fifthContainer flex-column'>
					<div className='col-11 col-lg-11 mx-auto h-100'>
						<div className=' row w-100 mx-auto'>
							<div className='col-12 mb-4 allCenter flex-row'>
								<div className='row w-100 h-100 d-flex d-md-none'>
									<Slider {...settings2}>
										{otherProducts &&
											otherProducts
												?.slice(0, 6)
												?.map((dat) => (
													<FootballCards
														isLargeImg={true}
														onClickFun={() =>
															navigate(`/productInfo/${dat.id}`)
														}
														key={dat.id + dat.title + "sliderProduct"}
														sorce={dat.imgSrc}
														title={dat.title}
														price={dat.price}
														oldprice={dat.oldprice}
													/>
												))}
									</Slider>
								</div>
								<div className='row w-100 d-none d-md-flex align-items-center justify-content-evenly'>
									{otherProducts &&
										otherProducts?.slice(0, 4)?.map((dat) => (
											<div
												key={dat.id}
												className='col-12 col-sm-6 col-md-4 col-lg-3 allCenter'>
												<FootballCards
													isLargeImg={true}
													onClickFun={() => navigate(`/productInfo/${dat.id}`)}
													sorce={dat.imgSrc}
													title={dat.title}
													price={dat.price}
													oldprice={dat.oldprice}
												/>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/*Sixth Container */}
			{/* <AdsComp slotnumber='5755097747' /> */}

			<div className='allCenter sixthContainer flex-column'>
				<div className='col-11 col-lg-10 mx-auto h-100'>
					<div className='row gx-100 h-100'>
						<div className='col-12 col-md-8 mb-4 '>
							<div className='w-90 mx-auto h-100'>
								<Slider {...settings}>
									{reviewraw.map((dat, index) => (
										<Reviewcard
											key={"sliderReview" + index}
											imaglink={dat.imageurl}
											name={dat.name}
											message={dat.message}
											ratting={dat.stars}
										/>
									))}
								</Slider>
							</div>
						</div>
						<div className='col-12 col-md-4 mb-4 allCenter flex-column'>
							<span
								className='secondaryColor'
								style={{
									fontSize: "36px",
									fontWeight: "bold",
									margin: "0px !important",
									marginBottom: "0px !important",
								}}>
								500+
							</span>
							<span
								className='mainColor'
								style={{
									fontSize: "36px",
									fontWeight: "bold",
									margin: "20px 0px",
									textAlign: "center",
								}}>
								{dbTranslator("hcustmer")}
							</span>
							<span
								className='mainColor'
								style={{
									fontSize: "16px",
									fontWeight: "600",
									marginBottom: "0px",
								}}>
								<BsStarFill
									className='secondaryColor'
									style={{ fontSize: "20px", marginRight: "7px" }}
								/>
								{dbTranslator("tpilot1")}| 500+ {dbTranslator("review")}
							</span>
						</div>
					</div>
					<div className='row w-100 mt-4 mx-auto h-100 d-flex d-md-none'>
						<Slider {...settings2}>
							{instaImages.map((dat, index) => (
								<div
									key={index + "slidervideo"}
									className='col-12 h-100 mx-auto d-flex allCenter'>
									<div
										style={{
											width: "100%",
											maxWidth: "250px",
											height: "100%",
											overflow: "hidden",
											cursor: "pointer",
										}}
										onClick={() => {
											window.open(
												"https://www.instagram.com/upcardsfc/",
												"_blank"
											);
										}}>
										<img
											className='rounded img-fluid'
											src={dat?.imglink}
											alt=''
										/>
									</div>
								</div>
							))}
						</Slider>
					</div>
					<div className='row mt-4 d-none d-md-flex align-items-center justify-content-start w-100'>
						{instaImages.map((dat, index) => (
							<div
								key={index}
								className='col-12 h-100 col-sm-6 col-md-4 mb-4 col-lg-3 allCenter'>
								<div
									style={{
										width: "100%",
										maxWidth: "250px",
										height: "100%",
										overflow: "hidden",
										cursor: "pointer",
									}}
									onClick={() => {
										window.open(
											"https://www.instagram.com/upcardsfc/",
											"_blank"
										);
									}}>
									<img
										className='rounded img-fluid'
										src={dat?.imglink}
										alt=''
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/*Seventh Container */}

			<div className='allCenter seventhContainer flex-column'>
				<div className='col-10 mx-auto h-100 d-flex align-items-center justify-content-evenly flex-column'>
					<h3
						style={{
							fontWeight: "bold",
							textAlign: "center",
							marginBottom: "30px",
						}}
						className='mainColor'>
						{dbTranslator("yChoseUs")}
					</h3>
					<div
						className='row d-flex align-items-center justify-content-start flex-row'
						style={{ height: "max-content" }}>
						{choosedata[0]?.title &&
							choosedata.map((dat, index) => (
								<div
									key={index + dat.title}
									className='col-12 col-md-6 col-lg-4 allCenter h-100'
									style={{ marginBottom: "20px" }}>
									<ChooseUsCard
										imglink={dat.imglink}
										title={dat.title}
										subtitle={dat.subtitle}
									/>
								</div>
							))}
					</div>
					<div className='row mt-4 mb-4 allCenter'>
						<button
							onClick={() => navigate("/products")}
							className='btn mainColor secondarybg'>
							{dbTranslator("shpCrd")}
						</button>
					</div>
				</div>
			</div>
			{/*Eight Container */}

			<div className='allCenter seventhContainer flex-column'>
				<div className='col-10 mx-auto h-100 d-flex align-items-center justify-content-evenly flex-column'>
					<h3
						style={{
							fontWeight: "bold",
							textAlign: "center",
							marginBottom: "30px",
						}}
						className='mainColor'>
						{dbTranslator("faqs")}
					</h3>
					<div className='row w-100 gx-0'>
						{questioncardraw[0]?.question &&
							questioncardraw.map((dat, index) => (
								<QuestionCard
									key={index + dat.question}
									question={dat.question}
									answer={dat.answer}
								/>
							))}
					</div>
					<div className='row mt-4 mb-4 allCenter'>
						<button
							onClick={() => navigate("/support")}
							className='btn mainColor secondarybg'>
							{dbTranslator("wnthlp")}
						</button>
					</div>
				</div>
			</div>
			{/*Ninth Container */}

			<div className='allCenter seventhContainer flex-column'>
				<div
					style={{
						background: "rgba(248, 154, 68, 0.18)",
						minHeight: "300px",
						height: "fit-content",
						padding: "0px 20px",
					}}
					className='col-10 mx-auto'>
					<div className='row gx-0'>
						<div className='col-12 col-md-7 mb-3 d-flex align-items-start justify-content-center flex-column'>
							<h3
								className='mainColor'
								style={{ fontWeight: "bold", margin: "10px 0px" }}>
								{dbTranslator("howStart")}
							</h3>
							<span
								style={{
									margin: "30px 0px",
									width: "90%",
									fontSize: "16px",
									fontWeight: "400",
								}}>
								{dbTranslator("howStartVal")}
							</span>
						</div>
						<div className='col-12  col-md-5 allCenter'>
							<img
								src={startedimage}
								style={{ objectFit: "contain" }}
								alt='how it all started'
							/>
						</div>
					</div>
				</div>
			</div>
			{/*tenth Container */}

			<div className=' allCenter tenthContainer flex-column'>
				<div className='col-11 col-lg-10 mx-auto'>
					<div style={{ marginBottom: "30px" }} className='row overflow-hidden'>
						{/* <div style={{ marginBottom: "30px" }} className='w-100'> */}
						<div className='col-12 col-md-5'>
							<h3
								className='mainColor'
								style={{ fontWeight: "bold", margin: "10px 0px" }}>
								{dbTranslator("SocialMed")}
							</h3>
						</div>
						<div className='col-12 col-md-7 d-flex align-items-center justify-content-start flex-row'>
							<button
								onClick={() => {
									window.open("https://www.tiktok.com/@upcardsfc", "_blank");
								}}
								className='btn'>
								<BsTiktok style={{ fontSize: "35px" }} className='mainColor' />
							</button>
							<button
								onClick={() => {
									window.open("https://www.instagram.com/upcardsfc/", "_blank");
								}}
								className='btn'>
								<AiOutlineInstagram
									style={{ fontSize: "40px" }}
									className='mainColor'
								/>
							</button>
							<button
								onClick={() => {
									window.open(
										"https://www.youtube.com/channel/UCeMtYgcM-546smTRkCSx-og",
										"_blank"
									);
								}}
								className='btn'>
								<AiOutlineYoutube
									style={{ fontSize: "40px" }}
									className='mainColor'
								/>
							</button>
						</div>
					</div>
					<div className='row w-100 mx-auto h-100 d-flex d-md-none'>
						<Slider {...settings2}>
							{videodataraw.map((dat, index) => (
								<div
									key={index + "slidervideo"}
									className='col-12 mx-auto d-flex allCenter'>
									<ReactPlayer
										height={"400px"}
										width={"90%"}
										url={`${dat.videolink}`}
										style={{ margin: "0px auto" }}
									/>
								</div>
							))}
						</Slider>
					</div>
					<div className='row d-none d-md-flex align-items-center justify-content-start w-100'>
						{videodataraw.map((dat, index) => (
							<div
								key={index}
								className='col-12 col-sm-6 col-md-4 mb-4 col-lg-3 allCenter'>
								<ReactPlayer
									height={"500px"}
									width={"95%"}
									style={{ maxWidth: "260px" }}
									url={`${dat.videolink}`}
								/>
							</div>
						))}
					</div>
				</div>

				{/* <div className='row allCenter'>
					<button
						style={{ width: "100%", maxWidth: "120px" }}
						className='btn secondaryColor mainbg'>
						View more
					</button>
				</div> */}
			</div>
			{/* </div> */}
		</>
	);
};

export default HomePage;
