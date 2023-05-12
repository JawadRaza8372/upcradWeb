import React from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ext2 from "../ownassets/ext2.png";
import { MdDone } from "react-icons/md";
import { CustomHook } from "../CustomHook/CustomHook";
const ContinueShopping = ({ title, imgSrc, show, hide }) => {
	const { dbTranslator } = CustomHook();

	return (
		<>
			<Modal fullscreen show={show}>
				<div className='h-100 w-100 allCenter'>
					<div
						className=' d-flex align-items-center justify-content-evenly flex-column'
						style={{
							background: "white",
							height: "90%",
							width: "90%",
							maxWidth: "700px",
							borderRadius: "50px",
							padding: "30px 20px",
						}}>
						<div className='doneIcondic'>
							<MdDone />
						</div>
						<p
							style={{ width: "90%", textAlign: "center", fontSize: "22px" }}
							className='my-3'>
							<span className='thirdClr fw-bold'>{title}</span>{" "}
							{dbTranslator("hasbeen")}
						</p>

						<img
							style={{
								width: "100%",
								objectFit: "contain",
								maxHeight: "400px",
							}}
							src={imgSrc ? imgSrc : ext2}
							alt='product'
						/>
						<div className='row w-100 gx-0'>
							<div className='col-12 col-md-6 allCenter'>
								<NavLink
									onClick={hide}
									to='/'
									className='btn nillbtn secondarybg mainColor modalCheckingbtn'>
									{dbTranslator("continueShopping")}
								</NavLink>
							</div>
							<div className='col-12 col-md-6 allCenter '>
								<NavLink
									onClick={hide}
									to='/cart'
									className='btn nillbtn mainColor thirdbg modalCheckingbtn'>
									{dbTranslator("proceedcheckout")}
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ContinueShopping;
