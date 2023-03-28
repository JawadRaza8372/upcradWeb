import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import design1 from "../ownassets/design1.png";
import BasicInfoComp from "../Components/BasicInfoComp";
import ChooseClubComp from "../Components/ChooseClubComp";
import ChooseFlagComp from "../Components/ChooseFlagComp";
import ChooseAttributComp from "../Components/ChooseAttributComp";
import ExtraServiceComp from "../Components/ExtraServiceComp";
import { AiOutlineRight } from "react-icons/ai";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

export const CardCustomization = () => {
	let rattingdata = 4.5;
	let ratting = Math.floor(rattingdata);
	let decimalpoint = rattingdata - ratting;
	const { id } = useParams();
	const navigate = useNavigate();
	const [compSeq, setcompSeq] = useState(0);
	return (
		<div
			className='col-10 mx-auto'
			style={{
				height: "fit-content",
				minHeight: "60vh",
				overflow: "visible",
				background: "white",
				padding: "50px 0px",
			}}>
			<div className='row w-100 h-100'>
				<div className='col-12 col-md-6 h-100 mb-4'>
					{compSeq === 0 && <BasicInfoComp />}
					{compSeq === 1 && <ChooseClubComp />}
					{compSeq === 2 && <ChooseFlagComp />}
					{compSeq === 3 && <ChooseAttributComp />}
					{compSeq === 4 && <ExtraServiceComp />}
				</div>
				<div className=' mb-4 col-12 col-md-6 d-flex align-items-center justify-content-center flex-column'>
					<button className='btn mainColor secondarybg'>Preview Only</button>
					<img
						src={design1}
						className='my-2'
						style={{
							objectFit: "contain",
							width: "95%",
							maxWidth: "340px",
						}}
						alt='previewimg'
					/>
					<span
						style={{ fontSize: "28px", fontWeight: "bold" }}
						className='text-center mainColor mb-2'>
						S23 football greatest
					</span>
					<div className='row w-100'>
						<div
							style={{ fontSize: "16px", fontWeight: "bold" }}
							className='col-4 d-flex align-items-center justify-content-center flex-row'>
							Excellent
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
				<div className='col-12 mb-4 w-100'>
					<div className='row'>
						<div className='order-1 col-6 col-md-2 d-flex align-items-center justify-content-center'>
							<button
								className='btn w-90 mb-4'
								style={{
									background: "rgba(33,50,94,0.25)",
									color: "rgba(33,50,94,1)",
								}}>
								Return to product
							</button>
						</div>
						<div className='order-3 order-md-2 col-12  mb-4 col-md-8 d-flex align-items-center justify-content-center'>
							<div
								style={{
									width: "100%",
									height: "10px",
									borderRadius: "10px",
									background: "#D9D9D9",
								}}>
								<div
									style={{ height: "100%", width: "30%", borderRadius: "10px" }}
									className='mainbg'
								/>
							</div>
						</div>
						<div className='order-2 order-md-3 col-6  mb-4 col-md-2 d-flex align-items-center justify-content-center'>
							{compSeq >= 4 ? (
								<button
									onClick={() => navigate(`/success/${id}`)}
									className='btn w-90 mainColor secondarybg'>
									Submit
								</button>
							) : (
								<button
									onClick={() => setcompSeq(compSeq + 1)}
									className='btn w-90 mainColor secondarybg'>
									Next
									<AiOutlineRight
										className='mainColor'
										style={{ fontSize: "22px" }}
									/>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
