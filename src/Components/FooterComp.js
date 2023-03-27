import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
const FooterComp = () => {
	const firstwala = [
		{ title: "website", path: "" },
		{ title: "Affiliate", path: "" },
		{ title: "Terms and conditions", path: "" },
		{ title: "Shipping information", path: "" },
		{ title: "Return policy", path: "" },
	];
	const secondwala = [
		{ title: "Support", path: "" },
		{ title: "Review", path: "" },
		{ title: "About us", path: "" },
		{ title: "Terms and refunds", path: "" },
	];
	const thirdwala = [
		{ title: "Contact us", path: "" },
		{ title: "FAQ", path: "" },
		{ title: "Privacy policy", path: "" },
	];
	return (
		<>
			<div className='wholeSection2 w-100'>
				<div
					style={{ margin: "20px 0px", width: "80%" }}
					className='widthissue row d-flex align-items-start justify-content-start flex-row'>
					<div className='col-12 col-md-6 col-lg-4 h-100 d-flex align-items-center justify-content-evenly flex-column'>
						{firstwala.map((dat, index) => (
							<>
								<Link key={index} className='footerlinks'>
									{dat.title}
								</Link>
							</>
						))}
					</div>
					<div className='col-12 col-md-6 col-lg-4 h-100 d-flex align-items-center justify-content-evenly flex-column'>
						{secondwala.map((dat, index) => (
							<>
								<Link key={index} className='footerlinks'>
									{dat.title}
								</Link>
							</>
						))}
					</div>
					<div className='col-12 col-md-6 col-lg-4 h-100 d-flex align-items-center justify-content-evenly flex-column'>
						{thirdwala.map((dat, index) => (
							<>
								<Link key={index} className='footerlinks'>
									{dat.title}
								</Link>
							</>
						))}
					</div>
				</div>
				<div
					style={{ margin: "20px 0px", width: "80%" }}
					className='widthissue row d-flex align-items-start justify-content-evenly flex-row'>
					<div className='col-12 col-md-6 col-lg-9 h-100 d-flex align-items-center justify-content-center flex-column'>
						<span className='text-center footerlinks'>
							All rights reserverd
						</span>
					</div>
					<div className='col-12 col-md-6 col-lg-3 h-100 d-flex align-items-center justify-content-center flex-row'>
						<button className='btn'>
							<FaFacebook style={{ fontSize: "30px", color: "white" }} />
						</button>
						<button className='btn mx-3'>
							<AiOutlineInstagram
								style={{ fontSize: "30px", color: "white" }}
							/>
						</button>
						<button className='btn'>
							<AiOutlineTwitter style={{ fontSize: "30px", color: "white" }} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterComp;
