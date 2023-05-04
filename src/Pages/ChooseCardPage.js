import React, { useState, useEffect } from "react";
import CommonChooseCard from "../Components/CommonChooseCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CustomHook } from "../CustomHook/CustomHook";
import { saveAs } from "file-saver";
import AdsComp from "../Components/AdsComp";

const ChooseCardPage = () => {
	const { dbTranslator } = CustomHook();
	const navigate = useNavigate();
	const { footballCards } = useSelector((state) => state.project);
	const [selectedCard, setselectedCard] = useState(
		footballCards?.length > 0 ? footballCards[0] : {}
	);
	const [showAds, setshowAds] = useState(true);
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
		}, 12000);
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
	return (
		<>
			{showAds && (
				<div className='cardsadsdiv'>
					<AdsComp slotnumber='5755097747' />
				</div>
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
					className='row d-block d-md-none h-100 w-100 gx-0'>
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
													navigate(`/cardCustomization/${dat?.id}`)
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
					className='row d-none d-md-flex h-100 w-100 gx-0'>
					<div className='col-12 col-md-8  h-100 d-flex align-items-center flex-column justify-content-center'>
						<img
							style={{
								objectFit: "contain",
								width: "100%",
								maxWidth: "350px",
							}}
							src={selectedCard?.imgSrc}
							alt='teams'
						/>
						<div className='row w-100 mx-auto' style={{ marginTop: "30px" }}>
							<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
								<button
									style={{
										width: "100%",
										maxWidth: "180px",
										textDecoration: "none !important",
										marginBottom: "20px",
										textTransform: "initial",
									}}
									onClick={() => download(`${selectedCard?.imgSrc}`)}
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
										navigate(`/cardCustomization/${selectedCard?.id}`)
									}
									className='btn mainColor thirdbg'>
									{dbTranslator("buyphy")}
								</button>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-4  h-100'>
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
		</>
	);
};

export default ChooseCardPage;
