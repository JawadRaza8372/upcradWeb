import React, { useState, useEffect } from "react";
import CommonChooseCard from "../Components/CommonChooseCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const ChooseCardPage = () => {
	const navigate = useNavigate();
	const { footballCards } = useSelector((state) => state.project);
	const [selectedCard, setselectedCard] = useState(
		footballCards?.length > 0 ? footballCards[0] : {}
	);
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
										<a
											href={`${dat?.imgSrc}`}
											style={{
												width: "100%",
												maxWidth: "180px",
												textDecoration: "none !important",
												marginBottom: "20px",
												textTransform: "initial",
											}}
											download
											// onClick={download}
											className='btn mainColor secondarybg'>
											Download as png
										</a>
									</div>
									<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
										<button
											style={{
												width: "100%",
												maxWidth: "180px",
												marginBottom: "20px",
											}}
											onClick={() => navigate(`/cardCustomization/${dat?.id}`)}
											className='btn mainColor thirdbg'>
											Buy in physical
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
				{/* <div className='col-12 col-md-3  h-100'>
					<CommonChooseCard title={"Personalize"}>
						<>
							<div className='d-flex align-items-center justify-content-center flex-column'>
								<button
									onClick={() => setfirstCompNumber(1)}
									style={{ width: "100%", maxWidth: "180px" }}
									className='btn secondarybg mainColor'>
									Upload Photo
									<IoPersonOutline
										style={{
											fontSize: "18px",
											marginLeft: "5px",
										}}
										className='mainColor'
									/>
								</button>
								<button
									onClick={() => setfirstCompNumber(2)}
									className='btn secondarybg mainColor'
									style={{
										margin: "30px auto",
										width: "100%",
										maxWidth: "180px",
									}}>
									Flags
									<BsFlag
										style={{
											fontSize: "16px",
											marginLeft: "5px",
										}}
										className='mainColor'
									/>
								</button>
								<button
									onClick={() => setfirstCompNumber(3)}
									style={{ width: "100%", maxWidth: "180px" }}
									className='btn secondarybg mainColor'>
									Teams
									<img
										src={teambtnicon}
										alt='team'
										style={{
											objectFit: "contain",
											width: "17px",
											marginLeft: "5px",
										}}
									/>
								</button>
							</div>
							<div
								style={{
									height: "250px",
									width: "100%",
									marginTop: "20px",
								}}
								className='d-flex align-items-center justify-content-center flex-column'>
								{firstCompNumber === 0 && (
									<>
										<span
											style={{
												width: "95%",
												textAlign: "center",
												fontSize: "14px",
												fontWeight: "600",
											}}>
											Click on the buttons above to customize the elements of
											your letter and click on the letter texts to edit them
										</span>
										<span
											style={{
												marginTop: "15px",
												width: "95%",
												textAlign: "center",
												fontWeight: "600",
												fontSize: "14px",
											}}>
											Watch this video if you need help
										</span>
									</>
								)}
								{firstCompNumber === 1 && (
									<>
										<span
											style={{
												width: "95%",
												textAlign: "center",
												fontSize: "14px",
												fontWeight: "600",
												marginBottom: "20px",
											}}>
											Upload your Image
										</span>
										<BiImageAdd
											style={{ fontSize: "120px" }}
											className='mainColor'
										/>
									</>
								)}
								{firstCompNumber === 2 && (
									<>
										<img
											style={{
												objectFit: "contain",
												width: "200px",
											}}
											src={flagsIcxon}
											alt='Flags'
										/>
									</>
								)}
								{firstCompNumber === 3 && (
									<>
										<img
											style={{
												objectFit: "contain",
												width: "200px",
											}}
											src={teamIcxon}
											alt='teams'
										/>
									</>
								)}
							</div>
						</>
					</CommonChooseCard>
				</div> */}
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
							<a
								href={`${selectedCard?.imgSrc}`}
								style={{
									width: "100%",
									maxWidth: "180px",
									textDecoration: "none !important",
									marginBottom: "20px",
									textTransform: "initial",
								}}
								download
								// onClick={download}
								className='btn mainColor secondarybg'>
								Download as png
							</a>
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
								Buy in physical
							</button>
						</div>
					</div>
				</div>
				<div className='col-12 col-md-4  h-100'>
					<CommonChooseCard title={"Choose card"}>
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
	);
};

export default ChooseCardPage;
