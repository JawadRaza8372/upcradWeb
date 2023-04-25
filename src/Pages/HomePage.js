import React from "react";
import startedimage from "../ownassets/image 18.png";
import FootballCards from "../Components/FootballCards";
import firstimg from "../ownassets/firstsesion.png";
import secssion from "../ownassets/secsesion.png";
import design1 from "../ownassets/design1.png";
import design2 from "../ownassets/design2.png";
import ourservices1 from "../ownassets/ourservices1.png";
import service1 from "../ownassets/servis1.png";
import service2 from "../ownassets/servis2.png";
import service3 from "../ownassets/servis3.png";
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
import { useTranslation } from "react-i18next";
import AdsComp from "../Components/AdsComp";
const HomePage = () => {
	const { footballCards, otherProducts } = useSelector(
		(state) => state.project
	);
	const { t } = useTranslation();

	const navigate = useNavigate();
	const ourServiceCardData = [
		{ id: 0, imgSrc: service1, title: t("oprod") },
		{ id: 0, imgSrc: service2, title: t("fotCards") },
		{ id: 0, imgSrc: service3, title: t("mtchmomts") },
	];
	// useEffect(() => {
	// 	try {
	// 		(window.adsbygoogle = window.adsbygoogle || []).push({});
	// 	} catch (e) {}
	// }, []);

	const specialFeatures = [
		{ title: t("f1"), img: fistImage1 },
		{ title: t("f2"), img: fistImage2 },
		{ title: t("f3"), img: fistImage3 },
		{ title: t("f4"), img: fistImage4 },
	];
	const questioncardraw = [
		{ question: t("faq1"), answer: t("faq1val") },
		{ question: t("faq2"), answer: t("faq2val") },
		{
			question: t("faq3"),
			answer: t("faq3val"),
		},
	];
	const choosedata = [
		{
			imglink: choose1img,
			title: t("yChoseUs1"),
			subtitle: t("yChoseUs1Val"),
		},
		{
			imglink: choose2img,
			title: t("yChoseUs2"),
			subtitle: t("yChoseUs2Val"),
		},

		{
			imglink: choose3img,
			title: t("yChoseUs3"),
			subtitle: t("yChoseUs3Val"),
		},
	];
	const videodataraw = [
		{ videolink: "https://www.youtube.com/embed/FMdgidP2qbE" },
		{ videolink: "https://www.youtube.com/embed/FMdgidP2qbE" },
		{ videolink: "https://www.youtube.com/embed/FMdgidP2qbE" },
		{ videolink: "https://www.youtube.com/embed/FMdgidP2qbE" },
	];
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
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
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
		{ name: "Alex Hall", stars: 4, message: "very good", imageurl: design1 },
		{
			name: "Paul Hill",
			stars: 3,
			message:
				"sjbjkabkb asjbvchavbcja hbavsjvcahjvca scsvhchvhas chsvcvasvah sc ahsbv csvhcavshc svhavhsvha shavsvjbskhabshja shvbdsvhd sndksnd sdhsbahjvs dahbvdhba a cvhdabhdfa schdvehfdvaha hhe aknjkna sm,anbjs ajbsbad jbdjads ajbda",
			imageurl: design2,
		},
		{
			name: "Alex johnthan",
			stars: 4,
			message: "very good",
			imageurl: design2,
		},
		{
			name: "Paul kim",
			stars: 3,
			message:
				"sjbjkabkb asjbvchavbcja hbavsjvcahjvca scsvhchvhas chsvcvasvah sc ahsbv csvhcavshc svhavhsvha shavsvjbskhabshja shvbdsvhd sndksnd sdhsbahjvs dahbvdhba a cvhdabhdfa schdvehfdvaha hhe aknjkna sm,anbjs ajbsbad jbdjads ajbda",
			imageurl: design2,
		},
	];
	let sellerspara = t("tbNewSellerPara");
	return (
		<>
			{/*First Container */}
			<div className='firstContWrapper'>
				<div className='allCenter flex-column firstCont'>
					<div className='col-10 mx-auto h-100'>
						<div className='row h-100'>
							<div className='col-12 gb-2 col-md-6 d-flex align-items-start justify-content-center flex-column'>
								<h1 className='my-0 mainColor firstSectionHeading'>
									{t("perfect")}
								</h1>
								<p
									className='mainColor resptextp'
									style={{ marginTop: "30px", marginBottom: "30px" }}>
									{t("subperfect")}
								</p>
								<button
									onClick={() => navigate("/products")}
									className='btn mainColor secondarybg'>
									{t("shpCrd")}
								</button>
							</div>
							<div className='col-12 col-md-6 allCenter'>
								<img
									style={{
										objectFit: "contain",
										minHeight: "320px",
										maxHeight: "450px",
										margin: "30px auto",
									}}
									src={firstimg}
									alt='first sectionimage'
								/>
							</div>
						</div>
					</div>

					<div className='mainbg d-none d-md-flex bottomLineDiv allCenter'>
						<div className='row gx-0 w-100 mx-auto'>
							<div className='col-12 col-md-3 allCenter'>
								<span>
									<BsStarFill
										style={{ fontSize: "18px", marginRight: "10px" }}
										className='secondaryColor'
									/>
									{t("tpilot1")}
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
								<span>
									{t("TScore")} : 4.5 | 500+ {t("review")}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*Second Container */}

			<div className='secondContainer'>
				<div className='col-11 col-lg-10 my-2 mx-auto h-100 allCenter flex-column'>
					<div className='row w-100 h-88 my-4'>
						<div
							className='col-12 mb-4 col-lg-6 order-2 order-md-1 allCenter flex-column'
							style={{ padding: "0px" }}>
							<div className='allCenter flex-column secondContainerCard'>
								<h3
									style={{ fontWeight: "bold", textTransform: "capitalize" }}
									className='mainColor'>
									{t("TBSeller")}
								</h3>
								<hr
									className='mainbg'
									style={{
										height: "4px",
										borderRadius: "4px",
										width: "40%",
									}}
								/>
								<div style={{ width: "80%" }}>
									<p className='mainColor' style={{ fontWeight: "700" }}>
										{sellerspara}
									</p>
									<button
										onClick={() => navigate("/products")}
										className='btn mainColor secondarybg'>
										{t("TBSeller")}
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
										height: "420px",
									}}
								/>
							</div>
						</div>
						<div className='col-12 mb-4 col-lg-6  order-1 order-md-2 allCenter flex-row'>
							<div className='row w-100 h-100  d-flex d-md-none'>
								<Slider {...settings2}>
									{footballCards &&
										footballCards
											?.slice(0, 6)
											?.map((dat) => (
												<FootballCards
													onClickFun={() =>
														navigate(`/cardCustomization/${dat.id}`)
													}
													key={dat.id}
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
									footballCards?.slice(0, 4)?.map((dat) => (
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

			<div className='allCenter flex-column thirdContainer'>
				<div className='allCenter flex-column'>
					<h3 style={{ fontWeight: "bold" }} className='mainColor'>
						{t("service")}
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
				<div className='scrolledImageContainer'>
					<img
						alt='our services'
						style={{
							width: "95%",
							objectFit: "contain",
							// height: "450px",
							marginTop: "30px",
						}}
						src={ourservices1}
					/>
				</div>
			</div>
			{/*fourth Container */}

			<div className='allCenter fourthContainer flex-column'>
				<div className='col-11 col-lg-10 mx-auto h-100'>
					<div className='row w-100 mx-auto h-100'>
						<div className='col-12 gb-2 col-md-5 col-lg-4 d-flex align-items-start justify-content-center flex-column'>
							<h3 style={{ fontWeight: "bold" }} className='mainColor'>
								{t("service")}
							</h3>
							<hr
								className='mainbg'
								style={{
									height: "4px",
									borderRadius: "4px",
									width: "40%",
								}}
							/>
							<p className='mainColor'>{t("servicep")}</p>
						</div>
						<div className='col-12 col-md-7 col-lg-8 allCenter flex-column'>
							<div className='row w-100 h-100 d-flex d-md-none'>
								<Slider {...settings2}>
									{ourServiceCardData.map((dat) => (
										<ServiceMiniCard
											onClickFun={() => navigate(`/otherProducts`)}
											key={dat.id}
											sorce={dat.imgSrc}
											title={dat.title}
										/>
									))}
								</Slider>
							</div>
							<div className='row d-none d-md-flex'>
								{ourServiceCardData.map((dat) => (
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

			<div className='allCenter fifthContainer flex-column'>
				<div className='col-11 col-lg-11 mx-auto h-100'>
					{/* <div className=' row mx-auto' style={{ marginBottom: "20px" }}>
						<div className='col-8 col-md-6 d-flex align-items-center justify-content-start'>
							<h3 style={{ fontWeight: "bold" }} className='mainColor'>
								Our Service
							</h3>
						</div>
						<div className='col-4 col-md-6 d-flex align-items-center justify-content-end'>
							<button
								onClick={() => navigate("/otherProducts")}
								className='btn'
								style={{ outline: "0px", boxShadow: "none !important" }}>
								<AiOutlineRight
									style={{ fontSize: "30px" }}
									className='mainColor'
								/>
							</button>
						</div>
					</div> */}
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
													onClickFun={() => navigate(`/productInfo/${dat.id}`)}
													key={dat.id}
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
			{/*Sixth Container */}
			<AdsComp slotnumber='5755097747' />

			<div className='allCenter sixthContainer flex-column'>
				<div className='col-11 col-lg-10 mx-auto h-100'>
					<div className='row gx-100 h-100'>
						<div className='col-12 col-md-8 mb-4 '>
							<div className='w-90 mx-auto h-100'>
								<Slider {...settings}>
									{reviewraw.map((dat, index) => (
										<Reviewcard
											key={index}
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
								{t("hcustmer")}
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
								{t("tpilot1")}| 500+ {t("review")}
							</span>
						</div>
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
						{t("yChoseUs")}
					</h3>
					<div className='row d-flex align-items-center justify-content-start flex-row'>
						{choosedata.map((dat, index) => (
							<div
								key={index}
								className='col-12 col-md-6 col-lg-4 allCenter'
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
							{t("shpCrd")}
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
						{t("faqs")}
					</h3>
					<div className='row w-100 gx-0'>
						{questioncardraw.map((dat, index) => (
							<QuestionCard
								key={index}
								question={dat.question}
								answer={dat.answer}
							/>
						))}
					</div>
					<div className='row mt-4 mb-4 allCenter'>
						<button
							onClick={() => navigate("/support")}
							className='btn mainColor secondarybg'>
							{t("wnthlp")}
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
								{t("howStart")}
							</h3>
							<span
								style={{
									margin: "30px 0px",
									width: "90%",
									fontSize: "16px",
									fontWeight: "400",
								}}>
								{t("howStartVal")}
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
								{t("SocialMed")}
							</h3>
						</div>
						<div className='col-12 col-md-7 d-flex align-items-center justify-content-start flex-row'>
							<button className='btn'>
								<BsTiktok style={{ fontSize: "35px" }} className='mainColor' />
							</button>
							<button className='btn'>
								<AiOutlineInstagram
									style={{ fontSize: "40px" }}
									className='mainColor'
								/>
							</button>
							<button className='btn'>
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
								<div key={index} className='col-12 mx-auto d-flex allCenter'>
									<iframe
										title={`${index}`}
										src={`${dat.videolink}`}
										allowFullScreen
										scrolling='no'
										style={{ width: "90%", margin: "0 auto" }}
										height='200px'
										allow='encrypted-media;'></iframe>
								</div>
							))}
						</Slider>
					</div>
					<div className='row d-none d-md-flex align-items-center justify-content-start w-100'>
						{videodataraw.map((dat, index) => (
							<div
								key={index}
								className='col-12 col-sm-6 col-md-4 mb-4 col-lg-3 allCenter'>
								<iframe
									title={`${index}`}
									src={`${dat.videolink}`}
									allowFullScreen
									scrolling='no'
									style={{ width: "95%", maxWidth: "260px" }}
									height='500px'
									allow='encrypted-media;'></iframe>
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
