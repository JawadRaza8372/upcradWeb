import React, { useState } from "react";
import CommonChooseCard from "../Components/CommonChooseCard";
import flagsIcxon from "../ownassets/flags.png";
import teamIcxon from "../ownassets/team.png";
import design1 from "../ownassets/design1.png";
import design2 from "../ownassets/design2.png";
import design3 from "../ownassets/design3.png";
import design4 from "../ownassets/design4.png";
import teambtnicon from "../ownassets/teamicon.png";
import { IoPersonOutline } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
const ChooseCardPage = () => {
	const navigate = useNavigate();

	const rawdata = [
		{
			id: 0,
			title: "Design 1 hero",
			imgSrc: design1,
		},
		{
			id: 1,
			title: "design 2 monster",
			imgSrc: design2,
		},
		{
			id: 2,
			title: "design 3 conquror",
			imgSrc: design3,
		},
		{
			id: 3,
			title: "design 4 devil",
			imgSrc: design4,
		},
	];
	const [firstCompNumber, setfirstCompNumber] = useState(0);
	const [selectedCard, setselectedCard] = useState(design1);
	return (
		<div
			className='col-10 mx-auto'
			style={{
				height: "fit-content",
				minHeight: "60vh",
				overflow: "visible",
				background: "white",
			}}>
			<div style={{ margin: "50px auto" }} className='row  h-100 w-100 gx-0'>
				<div className='col-12 col-md-3  h-100'>
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
				</div>
				<div className='col-12 col-md-6  h-100 d-flex align-items-center flex-column justify-content-center'>
					<img
						style={{
							objectFit: "contain",
							width: "100%",
							maxWidth: "350px",
						}}
						src={selectedCard}
						alt='teams'
					/>
					<div className='row w-100 mx-auto' style={{ marginTop: "30px" }}>
						<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
							<a
								href={`${design1}`}
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
								onClick={() => navigate("/cardCustomization/1")}
								className='btn mainColor thirdbg'>
								Buy in physical
							</button>
						</div>
					</div>
				</div>
				<div className='col-12 col-md-3  h-100'>
					<CommonChooseCard title={"Choose card"}>
						<div className='col-12 h-100'>
							<div className='row'>
								{rawdata.map((dat, index) => (
									<>
										<div
											onClick={() => setselectedCard(dat.imgSrc)}
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
					</CommonChooseCard>
				</div>
			</div>
		</div>
	);
};

export default ChooseCardPage;
