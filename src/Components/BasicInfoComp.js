import React, { useState } from "react";
import QuestionLinee from "./QuestionLinee";
import { BiImageAdd } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
const BasicInfoComp = () => {
	const rawdata = [
		{ title: "GE" },
		{ title: "DK" },
		{ title: "LM" },
		{ title: "TW" },
		{ title: "CDC" },
		{ title: "KLM" },
	];
	const [activePosition, setactivePosition] = useState("");
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span
				className='mainColor'
				style={{ fontSize: "28px", fontWeight: "bold" }}>
				Basic Information
			</span>
			<span
				style={{
					fontSize: "16px",
					fontWeight: "500",
					color: "rgba(0,0,0,0.5)",
				}}>
				Enter name, upload image and choose a position
			</span>
			<QuestionLinee label={"A"} title={"Name and image upload"}>
				<span
					style={{
						fontSize: "16px",
						fontWeight: "500",
						color: "#21325E",
						marginTop: "30px",
					}}>
					Name
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
					placeholder='name'
				/>
				<label className='w-100' htmlFor='file'>
					<input type='file' id='file' hidden />
					<div
						className='d-flex align-items-center justify-content-center'
						style={{
							background: "white",
							border: "1px solid #21325E",
							borderRadius: "5px",
							height: "70px",
							width: "100%",
							marginBottom: "30px",
						}}>
						<span>Click to Upload</span>
						<BiImageAdd
							style={{ fontSize: "26px", marginLeft: "10px" }}
							className='mainColor'
						/>
					</div>
				</label>
				<span style={{ fontSize: "14px", fontWeight: "400", color: "red" }}>
					<BsBell
						style={{ fontSize: "20px", marginRight: "10px" }}
						className='mainColor'
					/>
					If necessary background of the image will be removed by our design
					team
				</span>
			</QuestionLinee>

			<QuestionLinee label={"B"} title={"Choose a position"}>
				<div
					className='row w-100 gx-0'
					style={{
						border: "0px",
						borderBottom: "2px solid rgba(0,0,0,0.5)",
						margin: "30px 0px",
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
						Defense
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
						Midfield
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
						Attack
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
						Custom
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
									background:
										dat.title === activePosition ? "#21325E" : "white",
								}}
							/>
							{dat.title}
						</div>
					))}
				</div>
			</QuestionLinee>
		</div>
	);
};

export default BasicInfoComp;
