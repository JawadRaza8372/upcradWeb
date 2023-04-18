import React from "react";
import { FaGift } from "react-icons/fa";
const SuccessPage = () => {
	return (
		<div
			style={{
				height: "fit-content",
				minHeight: "70vh",
				background: "white",
				padding: "40px 0px",
			}}
			className='w-100 d-flex align-items-center justify-content-center flex-column'>
			<FaGift style={{ width: "150px", height: "150px" }} />
			{/* <img
				src={design1}
				style={{
					objectFit: "contain",
					width: "95%",
					maxWidth: "280px",
				}}
				alt='previewimg'
			/> */}
			{/* <span
				style={{ fontSize: "28px", fontWeight: "bold", marginTop: "30px" }}
				className='text-center mainColor mb-2'>
				S23 football greatest
			</span> */}
			<div
				style={{ maxWidth: "500px", marginBottom: "30px" }}
				className='row w-100'>
				{/* <div
					style={{ fontSize: "16px", fontWeight: "bold" }}
					className='col-4 d-flex align-items-center justify-content-center flex-row'>
					Excellent
				</div> */}
				{/* <div className='col-4 d-flex align-items-center justify-content-center flex-row'>
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
					4 out of 5
				</div> */}
			</div>
			<span
				style={{
					color: "#01A912",
					fontSize: "28px",
					fontWeight: "bold",
					textAlign: "center",
					width: "90%",
				}}>
				Congratulations! your order has been placed
			</span>
		</div>
	);
};

export default SuccessPage;
