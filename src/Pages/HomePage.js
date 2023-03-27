import React from "react";
import startedimage from "../ownassets/image 18.png";
import FootballCards from "../Components/FootballCards";
import firstimg from "../ownassets/firstsesion.png";
import secssion from "../ownassets/secsesion.png";
import design1 from "../ownassets/design1.png";
import design2 from "../ownassets/design2.png";
import design3 from "../ownassets/design3.png";
import design4 from "../ownassets/design4.png";
import somefeatures from "../ownassets/Frame 20.png";
import ourservices1 from "../ownassets/ourservices1.png";
import ourservices2 from "../ownassets/ourservices2.png";
import prosuct1 from "../ownassets/products1.png";
import prosuct2 from "../ownassets/products2.png";

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
import {
	AiOutlineLeft,
	AiOutlineRight,
	AiOutlineYoutube,
	AiOutlineInstagram,
} from "react-icons/ai";
import { BsTiktok, BsStarFill, BsStarHalf } from "react-icons/bs";
const HomePage = () => {
	const navigate = useNavigate();
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
		{ videolink: "https://www.tiktok.com/embed/7072819797184171310" },
		{ videolink: "https://www.youtube.com/embed/FMdgidP2qbE" },
		{ videolink: "https://www.tiktok.com/embed/7072819797184171310" },
	];
	const CustomLeftArrow = (props) => {
		const { className, onClick } = props;

		return (
			<button className={className} onClick={() => onClick()}>
				<AiOutlineLeft className='mainColor' style={{ fontSize: "30px" }} />
			</button>
		);
	};

	const CustomRightArrow = (props) => {
		const { className, onClick } = props;

		return (
			<button className={className} onClick={() => onClick()}>
				<AiOutlineRight className='mainColor' style={{ fontSize: "30px" }} />
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
	const reviewraw = [
		{ name: "Alex Hall", stars: 4, message: "very good", imageurl: design1 },
		{
			name: "Paul Hill",
			stars: 3,
			message:
				"sjbjkabkb asjbvchavbcja hbavsjvcahjvca scsvhchvhas chsvcvasvah sc ahsbv csvhcavshc svhavhsvha shavsvjbskhabshja shvbdsvhd sndksnd sdhsbahjvs dahbvdhba a cvhdabhdfa schdvehfdvaha hhe aknjkna sm,anbjs ajbsbad jbdjads ajbda",
			imageurl: design2,
		},
	];
	const rawdata = [
		{
			id: 0,
			title: "Design 1 hero",
			imgSrc: design1,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 1,
			title: "design 2 monster",
			imgSrc: design2,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 2,
			title: "design 3 conquror",
			imgSrc: design3,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 3,
			title: "design 4 devil",
			imgSrc: design4,
			price: "12$",
			oldprice: "15$",
		},
	];
	const rawdata2 = [
		{
			id: 0,
			title: "game 1 hero",
			imgSrc: prosuct1,
			price: "12$",
		},
		{
			id: 1,
			title: "game 2 monster",
			imgSrc: prosuct2,
			price: "12$",
		},
		{
			id: 2,
			title: "Game 3 conquror",
			imgSrc: prosuct1,
			price: "12$",
		},
		{
			id: 3,
			title: "Game 4 devil",
			imgSrc: prosuct2,
			price: "12$",
		},
		{
			id: 4,
			title: "Game 5 devil",
			imgSrc: prosuct1,
			price: "12$",
		},
	];
	return (
		<>
			<div
				className='d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "#F0F0F0",
					minHeight: "60vh",
					height: "fit-content",
					position: "relative",
					marginBottom: "20px",
					overflow: "visible",
				}}>
				<div className='col-10 mx-auto h-100'>
					<div className='row h-100'>
						<div className='col-12 gb-2 col-md-6 d-flex align-items-start justify-content-center flex-column'>
							<h1
								className='my-0 mainColor'
								style={{ fontSize: "50px", fontWeight: "bold" }}>
								The Perfect
								<br />
								Football gift
							</h1>
							<h6
								className='mainColor'
								style={{ marginTop: "30px", marginBottom: "30px" }}>
								sggsjh sxjhvhjxs xshvxhjsx shxvhsx sxhvshjxs xshvxhsvxn snhxsh
								<br />
								xnskjxbs xmnsbxms xns bhxvsx sxjhsvhjxvsxs jhsvhxvsxs xshjb
								<br />
								xsmbxjs xsjbhxbsx sxbshvxhsxs shjxjhsvjhs
							</h6>
							<button
								onClick={() => navigate("/cards")}
								className='btn mainColor secondarybg'>
								Shop cards
							</button>
						</div>
						<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
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
				<div
					className='mainbg'
					style={{
						width: "95%",
						maxWidth: "750px",
						position: "absolute",
						bottom: "-20px",
						left: "0px",
						right: "0px",
						marginLeft: "auto",
						marginRight: "auto",
						padding: "10px 0px",
						minHeight: "50px",
						height: "fit-content",
						borderRadius: "5px",
						color: "white",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<div className='row gx-0 w-100 mx-auto'>
						<div className='col-6 col-md-3 d-flex align-items-center justify-content-center'>
							<span>
								<BsStarFill
									style={{ fontSize: "18px", marginRight: "10px" }}
									className='secondaryColor'
								/>
								Trust Pilot
							</span>
						</div>
						<div className='col-6 col-md-4 d-flex align-items-center justify-content-center'>
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
						<div className='col-12 col-md-5 d-flex align-items-center justify-content-center'>
							<span>Trust score : 4.5 | 500+ Reviews</span>
						</div>
					</div>
				</div>
			</div>

			<br />
			<div
				style={{
					background: "#FFFFFF",
					minHeight: "80vh",
					height: "fit-content",
					marginTop: "20px",
				}}>
				<div className='col-10 mx-auto h-100 d-flex align-items-center justify-content-center flex-column'>
					<div className='row h-88'>
						<div className='col-12 mb-4 col-lg-6 d-flex align-items-center justify-content-center flex-column'>
							<div
								style={{
									background: "rgba(33,50,94,0.22)",
									height: "520px",
									width: "95%",
									maxWidth: "500px",
									borderRadius: "33px",
								}}
								className='d-flex align-items-center justify-content-center flex-column'>
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
									<button className='btn mainColor secondarybg'>
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
						<div className='col-12 mb-4 col-lg-6 d-flex align-items-center justify-content-center flex-row'>
							<div className='row'>
								{rawdata.map((dat) => (
									<div
										key={dat.id}
										className='col-12 col-sm-6 d-flex align-items-center justify-content-center'>
										<FootballCards
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

					<img
						width={"90%"}
						style={{
							objectFit: "contain",
							margin: "30px 0px",
						}}
						src={somefeatures}
						alt='specific features'
					/>
				</div>
			</div>
			<div
				className='d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "rgba(206,210,220,0.5)",
					minHeight: "60vh",
					height: "fit-content",
					position: "relative",
					overflow: "visible",
					padding: "30px 0px",
				}}>
				<div className='d-flex align-items-center justify-content-center flex-column'>
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
			<div
				className='d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "rgba(242,225,162,0.54)",
					minHeight: "40vh",
					padding: "40px 0px",
					height: "fit-content",
					overflow: "visible",
				}}>
				<div className='col-10 mx-auto h-100'>
					<div className='row h-100'>
						<div className='col-12 gb-2 col-md-6 col-lg-4 d-flex align-items-start justify-content-center flex-column'>
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
						<div className='col-12 col-md-6 col-lg-8 d-flex align-items-center justify-content-center flex-column'>
							<img
								style={{
									objectFit: "contain",
									width: "90%",
								}}
								src={ourservices2}
								alt='our services secondimage'
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				className='d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "rgba(242,225,162,0.54)",
					minHeight: "60vh",
					height: "fit-content",
					overflow: "visible",
				}}>
				<div className='col-10 mx-auto h-100'>
					<div className='row' style={{ marginBottom: "20px" }}>
						<div className='col-8 col-md-6'>
							<h3 style={{ fontWeight: "bold" }} className='mainColor'>
								Our Service
							</h3>
						</div>
						<div className='col-4 col-md-6 d-flex align-items-center justify-content-end'>
							<button
								className='btn'
								style={{ outline: "0px", boxShadow: "none !important" }}>
								<AiOutlineRight
									style={{ fontSize: "30px" }}
									className='mainColor'
								/>
							</button>
						</div>
					</div>
					<div className='row d-flex align-items-center justify-content-evenly'>
						{rawdata2.map((dat) => (
							<div
								key={dat.id}
								className='col-12 col-sm-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center'>
								<FootballCards
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
			<div
				className='d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "rgba(206,210,220,0.5)",
					minHeight: "60vh",
					height: "fit-content",
					position: "relative",
					overflow: "visible",
					padding: "30px 0px",
				}}>
				<div className='col-10 mx-auto h-100'>
					<div className='row h-100'>
						<div className='col-12 col-md-8 mb-4 '>
							<div className='w-100 h-100'>
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
						<div className='col-12 col-md-4 mb-4 d-flex align-items-center justify-content-center flex-column'>
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
			<div
				className='d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "white",
					minHeight: "60vh",
					height: "fit-content",
					overflow: "visible",
					padding: "30px 0px",
				}}>
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
								className='col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center'
								style={{ marginBottom: "20px" }}>
								<ChooseUsCard
									imglink={dat.imglink}
									title={dat.title}
									subtitle={dat.subtitle}
								/>
							</div>
						))}
					</div>
					<div className='row mt-4 mb-4 d-flex align-items-center justify-content-center'>
						<button className='btn mainColor secondarybg'>Shop cards</button>
					</div>
				</div>
			</div>
			<div
				className='d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "white",
					minHeight: "60vh",
					height: "fit-content",
					overflow: "visible",
					padding: "30px 0px",
				}}>
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
					<div className='row mt-4 mb-4 d-flex align-items-center justify-content-center'>
						<button className='btn mainColor secondarybg'>
							Want more help?
						</button>
					</div>
				</div>
			</div>
			<div
				className='d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "white",
					minHeight: "60vh",
					height: "fit-content",
					overflow: "visible",
					padding: "30px 0px",
				}}>
				<div
					style={{
						background: "rgba(242,225,162,0.54)",
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
						<div className='col-12  col-md-5 d-flex align-items-center justify-content-center'>
							<img
								src={startedimage}
								style={{ objectFit: "contain" }}
								alt='how it all started'
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				className=' d-flex align-items-center justify-content-center flex-column'
				style={{
					background: "rgba(248,154,68,0.18)",
					minHeight: "60vh",
					height: "fit-content",
					overflow: "visible",
					padding: "30px 0px",
					marginBottom: "30px",
				}}>
				<div className='col-10 mx-auto'>
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
					<div className='row d-flex align-items-center justify-content-start w-100'>
						{videodataraw.map((dat, index) => (
							<div
								key={index}
								className='col-12 col-sm-6 col-md-4 mb-4 col-lg-3 d-flex align-items-center justify-content-center'>
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

				<div className='row d-flex align-items-center justify-content-center'>
					<button
						style={{ width: "100%", maxWidth: "120px" }}
						className='btn secondaryColor mainbg'>
						View more
					</button>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default HomePage;
