import React, { useState } from "react";
import truckicon from "../ownassets/truck.png";
import { CustomHook } from "../CustomHook/CustomHook";
import extra1 from "../ownassets/extr1.jpg";
import extra2 from "../ownassets/ext2.png";
import extra3 from "../ownassets/extr3.jpg";
import extra4 from "../ownassets/extra4.png";
import extra5 from "../ownassets/extra5.jpg";

const ExtraServiceComp = ({ value, setvalue }) => {
	const [disableother, setdisableother] = useState(false);
	const { dbTranslator } = CustomHook();
	const imgearry = [
		{ imgSrc: extra1 },
		{ imgSrc: extra2 },
		{ imgSrc: extra3 },
		{ imgSrc: extra4 },
		{ imgSrc: extra5 },
	];
	const rawdata = [
		{
			title: dbTranslator("headextra3"),
			subtitle: dbTranslator("subextra3"),
			price: "3",
		},
		{
			title: dbTranslator("headextra4"),
			subtitle: dbTranslator("subextra4"),
			price: "2",
		},
		{
			title: dbTranslator("headextra5"),
			subtitle: dbTranslator("subextra5"),
			price: "1",
		},
	];
	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>
				{dbTranslator("lasthead")}
			</span>
			<span className='CustSubHeadingRespComp'>
				{dbTranslator("lastsdead")}
			</span>
			<div
				className='w-100 p-4 d-flex align-items-start justify-content-center mt-3 flex-column'
				style={{ background: "rgba(62,73,122,0.08)" }}>
				{rawdata &&
					rawdata?.map((dat, index) => {
						let check =
							value?.length > 0
								? value?.find((da) => (da.title === dat.title ? true : false))
								: false;
						return (
							<div
								key={index}
								onClick={() => {
									let checking = value?.find((dr) => `${dr.price}` === "0");
									if (checking) {
										setvalue([dat]);
									} else {
										if (check) {
											let newvAL = value.filter(
												(daw) => daw.title !== dat.title
											);
											setvalue(newvAL);
										} else {
											setvalue(value?.length > 0 ? [...value, dat] : [dat]);
										}
									}
								}}
								className={`row w-100 mb-3 mx-auto ${disableother ? "" : ""}`}
								style={{
									height: "fit-content",
									minHeight: "80px",
									border: check ? "1px solid black" : "0px",
									borderRadius: "10px",
									cursor: "pointer",
									overflow: "hidden",
								}}>
								<div
									className='col-3 col-md-2'
									style={{
										background: "white",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}>
									<img
										src={`${
											imgearry[index] ? imgearry[index]?.imgSrc : truckicon
										}`}
										alt='truck'
										style={{
											width: "100%",
											objectFit: "cover",
											maxWidth: "250px",
										}}
									/>
								</div>
								<div className='col-9 col-md-10 d-flex align-items-start justify-content-center flex-column'>
									<span className='mainColor extraserviceheadresp'>
										{dat.title}+ {dat.price}€
									</span>
									<span
										className='extraservicesheadresp'
										style={{
											color: "rgba(106, 106, 106, 1)",
										}}>
										{dat.subtitle}
									</span>
								</div>
							</div>
						);
					})}

				<div
					onClick={() => {
						setdisableother(true);
						setvalue([
							{
								title: "DO NOT ADD ANYTHING",
								subtitle: "---",
								price: "0",
							},
						]);
					}}
					className='row w-100 mb-3 mx-auto'
					style={{
						height: "fit-content",
						minHeight: "80px",
						border:
							value.length > 0 && value[0]?.title === "DO NOT ADD ANYTHING"
								? "1px solid black"
								: "0px",
						borderRadius: "10px",
						cursor: "pointer",
						overflow: "hidden",
					}}>
					<div
						className='col-3 col-md-2'
						style={{
							background: "white",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<img
							src={truckicon}
							alt='truck'
							style={{
								width: "100%",
								objectFit: "cover",
								maxWidth: "250px",
							}}
						/>
					</div>
					<div className='col-9 col-md-10 d-flex align-items-start justify-content-center flex-column'>
						<span className='mainColor extraserviceheadresp'>
							{dbTranslator("headextra6")} + 0€
						</span>
						<span
							className='extraservicesheadresp'
							style={{
								color: "rgba(106, 106, 106, 1)",
							}}>
							---
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExtraServiceComp;
