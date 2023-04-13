import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const CartPageCard = ({ id, title, price, imgSrc, removeItemFun }) => {
	return (
		<>
			<div
				className='row w-100 gx-0 p-3 mb-4'
				style={{
					borderRadius: "5px",
					background: "#F2E1A2",
					position: "relative",
				}}>
				<button
					onClick={() => removeItemFun(id)}
					className='btn nillbtn allCenter'
					style={{
						position: "absolute",
						top: "10px",
						right: "10px",
						width: "fit-content",
						height: "30px",
						padding: "0px",
					}}>
					<AiOutlineClose />
				</button>
				<div
					className='col-2 d-flex align-items-center justify-content-center'
					style={{ background: "white" }}>
					<img
						style={{
							maxWidth: "90px",
							height: "100%",
							maxHeight: "90px",
							width: "100%",
							objectFit: "contain",
						}}
						src={imgSrc}
						alt='product'
					/>
				</div>
				<div className='col-10 px-3 d-flex align-items-start justify-content-center flex-column'>
					<span
						className='mainColor'
						style={{ fontWeight: "bold", fontSize: "20px" }}>
						{title}
					</span>
					<span
						style={{
							fontWeight: "bold",
							fontSize: "16px",
							color: "rgba(0, 0, 0, 0.5)",
						}}>
						${price}
					</span>
				</div>
			</div>
		</>
	);
};

export default CartPageCard;
