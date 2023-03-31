import React from "react";
import { IoIosQuote } from "react-icons/io";
import { BsStarFill, BsStar } from "react-icons/bs";

export const Reviewcard = ({ name, imaglink, message, ratting }) => {
	return (
		<div
			className='row mx-auto'
			style={{
				height: "280px",
				width: "90%",
				maxWidth: "580px",
				background: "white",
			}}>
			<div className='col-4'>
				<div className='w-100 h-100 d-flex align-items-center justify-content-center'>
					<img
						style={{ objectFit: "contain", width: "100%" }}
						src={imaglink}
						alt={name}
					/>
				</div>
			</div>
			<div
				style={{ position: "relative" }}
				className='col-8 d-flex align-items-start justify-content-center flex-column'>
				<IoIosQuote
					style={{
						position: "absolute",
						top: "15px",
						right: "20px",
						fontSize: "40px",
						color: "rgba(0,0,0,0.5)",
					}}
				/>
				<h5
					className='mainColor'
					style={{ fontSize: "24px", fontWeight: "bold" }}>
					{name}
				</h5>
				<div
					className='d-flex align-items-center justify-content-between flex-row'
					style={{ width: "100%", maxWidth: "120px", margin: "10px 0px" }}>
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
					{(ratting || ratting === 0) &&
						Array(5 - ratting)
							.fill("a")
							.map((dat, index) => (
								<BsStar
									key={index}
									style={{ fontSize: "22px" }}
									className='mainColor'
								/>
							))}
				</div>
				<p style={{ fontSize: "10px", fontWeight: "600", width: "95%" }}>
					{message.length > 100 ? message.substring(0, 107) + " ..." : message}
				</p>
			</div>
		</div>
	);
};
