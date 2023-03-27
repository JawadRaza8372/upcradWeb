import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import demoflag from "../ownassets/demoflag.png";

const ChooseFlagComp = () => {
	const rawdata = [
		{ title: "England0" },
		{ title: "England1" },
		{ title: "England2" },
		{ title: "England3" },
	];
	const [activePosition, setactivePosition] = useState("");

	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span
				className='mainColor'
				style={{ fontSize: "28px", fontWeight: "bold" }}>
				Country flag customization
			</span>
			<span
				style={{
					fontSize: "16px",
					fontWeight: "500",
					color: "rgba(0,0,0,0.5)",
				}}>
				Choose a country or upload a custom one.
			</span>
			<QuestionLinee label={"D"} title={"Choose a country flag"}>
				<span
					style={{
						fontSize: "16px",
						fontWeight: "500",
						color: "#21325E",
						marginTop: "30px",
					}}>
					Search
				</span>
				<input
					style={{
						height: "40px",
						width: "100%",
						border: "1px solid #21325E",
						background: "white",
						borderRadius: "5px",
						marginTop: "10px",
						marginBottom: "20px",
						padding: "0px 15px",
					}}
					placeholder='search'
				/>
				<div
					className='row w-100 gx-0'
					style={{
						border: "0px",
						borderBottom: "2px solid rgba(0,0,0,0.5)",
						marginBottom: "30px",
					}}>
					<div
						style={{
							color: "rgba(0,0,0,0.5)",
							fontSize: "14px",
							fontWeight: "600",
							textAlign: "center",
							cursor: "pointer",
							paddingBottom: "10px",
						}}
						className='col-3'>
						Popular
					</div>
					<div
						style={{
							color: "rgba(0,0,0,0.5)",
							fontSize: "14px",
							fontWeight: "600",
							textAlign: "center",
							cursor: "pointer",
							paddingBottom: "10px",
						}}
						className='col-3 text-center'>
						Asia
					</div>
					<div
						style={{
							color: "rgba(0,0,0,0.5)",
							fontSize: "14px",
							fontWeight: "600",
							textAlign: "center",
							cursor: "pointer",
							paddingBottom: "10px",
						}}
						className='col-3 text-center'>
						Affrica
					</div>
					<div
						style={{
							color: "rgba(0,0,0,0.5)",
							fontSize: "14px",
							fontWeight: "600",
							textAlign: "center",
							cursor: "pointer",
							paddingBottom: "10px",
						}}
						className='col-3 text-center'>
						Europe
					</div>
				</div>
				<div
					className='row w-100 gx-0'
					style={{
						marginBottom: "30px",
					}}>
					{rawdata.map((dat, index) => (
						<div
							onClick={() => setactivePosition(dat.title)}
							style={{
								cursor: "pointer",
								width: "fit-content",
								marginLeft: "10px",
								marginBottom: "10px",
								border:
									dat.title === activePosition
										? "1px solid rgba(0,0,0,1)"
										: "1px solid rgba(0,0,0,0.5)",
								color:
									dat.title === activePosition
										? "rgba(0,0,0,1)"
										: "rgba(0,0,0,0.5)",
								padding: "5px 10px",
								borderRadius: "20px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "row",
							}}>
							<div
								style={{
									width: "20px",
									height: "20px",
									border: "1px solid rgba(0,0,0,0.5)",
									borderRadius: "20px",
									marginRight: "10px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<img
									src={demoflag}
									alt='demoflag'
									style={{ width: "100%", objectFit: "fill" }}
								/>
							</div>
							{dat.title}
						</div>
					))}
				</div>
			</QuestionLinee>
		</div>
	);
};

export default ChooseFlagComp;
