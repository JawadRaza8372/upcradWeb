import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
//import { AiOutlineTwitter } from "react-icons/ai";
//import { FaFacebook } from "react-icons/fa";
import { CustomHook } from "../CustomHook/CustomHook";

const FooterComp = () => {
	const { dbTranslator } = CustomHook();

	const firstwala = [
		{ title: dbTranslator("website"), path: "/" },
		{ title: dbTranslator("affiliate"), path: "/" },
		{ title: dbTranslator("termscond"), path: "/privacy" },
		{ title: dbTranslator("deliveryInfo"), path: "/" },
		{ title: dbTranslator("rpolicy"), path: "/return" },
	];
	const secondwala = [
		{ title: dbTranslator("suprt"), path: "/support" },
		{ title: dbTranslator("review"), path: "/" },
		{ title: dbTranslator("aboutus"), path: "/" },
		{ title: dbTranslator("termRefnd"), path: "/return" },
	];
	const thirdwala = [
		{ title: dbTranslator("ContactUs"), path: "/contact" },
		{ title: dbTranslator("faqftr"), path: "/support" },
		{ title: dbTranslator("pp"), path: "/privacy" },
	];
	return (
		<>
			<div className='wholeSection2 w-100'>
				<div
					style={{ width: "80%" }}
					className='widthissue marginIssue row d-flex align-items-start justify-content-start flex-row'>
					<div className='col-12 col-md-6 col-lg-4 h-100 d-flex align-items-center justify-content-evenly flex-column'>
						{firstwala[0]?.title &&
							firstwala.map((dat, index) => (
								<Link
									to={dat?.path}
									key={dat.title + index}
									className='footerlinks'>
									{dat.title}
								</Link>
							))}
					</div>
					<div className='col-12 col-md-6 col-lg-4 h-100 d-flex align-items-center justify-content-evenly flex-column'>
						{secondwala[0]?.title &&
							secondwala.map((dat, index) => (
								<Link
									to={dat?.path}
									key={dat.title + index}
									className='footerlinks'>
									{dat.title}
								</Link>
							))}
					</div>
					<div className='col-12 col-md-6 col-lg-4 h-100 d-flex align-items-center justify-content-evenly flex-column'>
						{thirdwala[0]?.title &&
							thirdwala.map((dat, index) => (
								<Link
									to={dat?.path}
									key={dat.title + index}
									className='footerlinks'>
									{dat.title}
								</Link>
							))}
					</div>
				</div>
				<div
					style={{ width: "80%" }}
					className='marginIssue widthissue row d-flex align-items-start justify-content-evenly flex-row'>
					<div className='col-12 col-md-6 col-lg-9 h-100 d-flex align-items-center justify-content-center flex-column'>
						<span className='text-center footerlinks'>
							{dbTranslator("rightresr")}
						</span>
					</div>
					<div className='col-12 col-md-6 col-lg-3 h-100 d-flex align-items-center justify-content-center flex-row'>
						<button
							onClick={() => {
								window.open(
									"https://www.youtube.com/channel/UCeMtYgcM-546smTRkCSx-og",
									"_blank"
								);
							}}
							className='btn'>
							<AiOutlineYoutube
								className='whiteColor'
								style={{ fontSize: "30px" }}
							/>
						</button>
						<button
							onClick={() => {
								window.open("https://www.instagram.com/upcardsfc/", "_blank");
							}}
							className='btn mx-3'>
							<AiOutlineInstagram
								className='whiteColor'
								style={{ fontSize: "30px" }}
							/>
						</button>
						<button
							onClick={() => {
								window.open("https://www.tiktok.com/@upcardsfc", "_blank");
							}}
							className='btn'>
							<BsTiktok className='whiteColor' style={{ fontSize: "30px" }} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterComp;
