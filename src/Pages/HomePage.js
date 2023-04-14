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

const HomePage = () => {
	const { footballCards, otherProducts } = useSelector(
		(state) => state.project
	);
	const navigate = useNavigate();
	const ourServiceCardData = [
		{ id: 0, imgSrc: service1, title: "Other Products" },
		{ id: 0, imgSrc: service2, title: "Football Cards" },
		{ id: 0, imgSrc: service3, title: "Match Moments" },
	];
	const specialFeatures = [
		{ title: "Preview before printing", img: fistImage1 },
		{ title: "Professional design", img: fistImage2 },
		{ title: "High quality print", img: fistImage3 },
		{ title: "Money back guarantee", img: fistImage4 },
	];
	const questioncardraw = [
		{ question: "What is Soccer card?", answer: "" },
		{ question: "What is AbcDef?", answer: "" },
		{
			question: "What is hdhd?",
			answer:
				"dhcfgd cdbcj djbjd ddbjbjd ddbjd jdwbjwhgdw jwhgdgwugdwkbdjkw dwkjdgwkjbkwjbdwjug d wdbnjwbd wjdbwbjw wdjwbjdbwbdw",
		},
	];
	const choosedata = [
		{
			imglink: choose1img,
			title: "Metal cards",
			subtitle:
				"nkjsnckj sackjnabdsknc cjbcjkbscj sbhc scjabjkca n dajhbsc asbjhbhcjbs ahbsc sabhjcbsahj c ahbchab",
		},
		{
			imglink: choose2img,
			title: "Easy to use card builder",
			subtitle:
				"nkjsnckj sackjnabdsknc cjbcjkbscj sbhc scjabjkca n dajhbsc asbjhbhcjbs ahbsc sabhjcbsahj c ahbchab",
		},

		{
			imglink: choose3img,
			title: "All image edit done for you",
			subtitle:
				"nkjsnckj sackjnabdsknc cjbcjkbscj sbhc scjabjkca n dajhbsc asbjhbhcjbs ahbsc sabhjcbsahj c ahbchab",
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

	return (
		<>
			{/*First Container */}
			<div className='firstContWrapper'>
				<div className='allCenter flex-column firstCont'>
					<div className='col-10 mx-auto h-100'>
						<div className='row h-100'>
							<div className='col-12 gb-2 col-md-6 d-flex align-items-start justify-content-center flex-column'>
								<h1 className='my-0 mainColor firstSectionHeading'>
									The Perfect
									<br />
									Football gift
								</h1>
								<p
									className='mainColor resptextp'
									style={{ marginTop: "30px", marginBottom: "30px" }}>
									sggsjh sxjhvhjxs xshvxhjsx shxvhsx sxhvshjxs xshvxhsvxn snhxsh
									<br />
									xnskjxbs xmnsbxms xns bhxvsx sxjhsvhjxvsxs jhsvhxvsxs xshjb
									<br />
									xsmbxjs xsjbhxbsx sxbshvxhsxs shjxjhsvjhs
								</p>
								<button
									onClick={() => navigate("/products")}
									className='btn mainColor secondarybg'>
									Shop cards
								</button>
							</div>
							<div className='col-12 col-md-6 allCenter'>
								<img
									style={{
										objectFit: "contain",
										maxWidth: "350px",
										height: "320px",
									}}
									src={firstimg}
									alt='first sectionimage'
								/>
							</div>
						</div>
					</div>
					<div className='mainbg d-none d-md-flex bottomLineDiv allCenter'>
						<div className='row gx-0 w-100 mx-auto'>
							<div className='col-6 col-md-3 allCenter'>
								<span>
									<BsStarFill
										style={{ fontSize: "18px", marginRight: "10px" }}
										className='secondaryColor'
									/>
									Trust Pilot
								</span>
							</div>
							<div className='col-6 col-md-4 allCenter'>
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
							<div className='col-12 col-md-5 allCenter'>
								<span>Trust score : 4.5 | 500+ Reviews</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*Second Container */}

			<br />
			<div className='secondContainer'>
				<div className='col-11 col-lg-10 mx-auto h-100 allCenter flex-column'>
					<div className='row w-100 h-88'>
						<div
							className='col-12 mb-4 col-lg-6 order-2 order-md-1 allCenter flex-column'
							style={{ padding: "0px" }}>
							<div className='allCenter flex-column secondContainerCard'>
								<h3 style={{ fontWeight: "bold" }} className='mainColor'>
									Shop Best Sellers
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
										Customized Real life football cards ,made with high quality
										material
									</p>
									<button
										onClick={() => navigate("/products")}
										className='btn mainColor secondarybg'>
										Shop best-sellers
									</button>
								</div>
								<img
									src={secssion}
									alt='shop best sellers'
									style={{
										objectFit: "contain",
										marginLeft: "auto",
										marginRight: "auto",
										maxWidth: "350px",
										height: "290px",
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
						Our Service
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
								Our Service
							</h3>
							<hr
								className='mainbg'
								style={{
									height: "4px",
									borderRadius: "4px",
									width: "40%",
								}}
							/>
							<p className='mainColor'>
								FIFA 23 video game cards isn’t the
								<br />
								only gift other personalized cards
								<br />
								are also available now
							</p>
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
										className='col-12 col-sm-6 col-md-4 allCenter'>
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
								happy customers
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
								Trust Pilot | 500+ Reviews
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
						why choose us?
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
							Shop cards
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
						Frequently asked questions
					</h3>
					<div className='row'>
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
							Want more help?
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
								How it’s all started
							</h3>
							<span
								style={{
									margin: "30px 0px",
									width: "90%",
									fontSize: "16px",
									fontWeight: "400",
								}}>
								hwdq dhwbhqbd dwhbvdvw dwhgdhjw dwhvdjw qhvdhw dqhvshvq dwhvdhw
								dwmbdjw dwhvbdhwvdw dhvwhvdw dhwvdvwhdw wbdh wdb mwhbdw
								dhvwvdhwv
							</span>
							<span
								style={{ width: "90%", fontSize: "16px", fontWeight: "400" }}>
								hwdq dhwbhqbd dwhbvdvw dwhgdhjw dwhvdjw qhvdhw dqhvshvq dwhvdhw
								dwmbdjw dwhvbdhwvdw dhvwhvdw dhwvdvwhdw wbdh wdb mwhbdw
								dhvwvdhwv
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
								My social media
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
