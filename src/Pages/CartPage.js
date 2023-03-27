import React from "react";
import design1 from "../ownassets/design1.png";
const CartPage = () => {
	const rawdata = [
		{
			title: "S23 FIFA Super fast track",
			shipping: "Rs.700",
			price: "Rs.1,600.00",
		},

		{
			title: "S23 FIFA Super track",
			shipping: "Rs.700",
			price: "Rs.2,600.00",
		},
		{
			title: "S23 FIFA fast track",
			shipping: "Rs.700",
			price: "Rs.3,600.00",
		},
	];
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
				<div className='col-12 order-2 order-md-1 col-md-8 h-100 mb-4'>
					<div
						className='w-100 p-4 d-flex align-items-start justify-content-center mt-3 flex-column'
						style={{ background: "rgba(62,73,122,0.08)" }}>
						<span
							className='mainColor'
							style={{
								fontSize: "28px",
								fontWeight: "bold",
								marginBottom: "40px",
							}}>
							Shopping Cart
						</span>
						{rawdata.map((dat, index) => (
							<div
								key={index}
								className='row w-100 gx-0 p-3 mb-4'
								style={{
									borderRadius: "5px",
									background: "#F2E1A2",
									position: "relative",
								}}>
								<button
									className='btn'
									style={{
										position: "absolute",
										top: "10px",
										right: "10px",
										width: "30px",
										height: "30px",
									}}>
									X
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
										src={design1}
										alt='product'
									/>
								</div>
								<div className='col-10 px-3 d-flex align-items-start justify-content-center flex-column'>
									<span
										className='mainColor'
										style={{ fontWeight: "bold", fontSize: "20px" }}>
										{dat.title}
									</span>
									<span style={{ fontWeight: "bold", fontSize: "20px" }}>
										{dat.price}
									</span>
									<span
										style={{
											fontWeight: "600",
											fontSize: "16px",
											color: "rgba(0, 0, 0, 0.5)",
										}}>
										+Shipping Fee {dat.shipping}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='order-1 order-md-2 col-12 col-md-4 h-100 mb-4'>
					<div
						className='w-100 p-4 d-flex align-items-start justify-content-center mt-3 flex-column'
						style={{ background: "rgba(62,73,122,0.08)" }}>
						<span
							className='mainColor'
							style={{
								fontSize: "28px",
								fontWeight: "bold",
								marginBottom: "40px",
							}}>
							Summary
						</span>
						<div className='row w-100 gx-0'>
							<div className='col-6' style={{ fontSize: "16px" }}>
								Total
							</div>
							<div
								className='col-6 mainColor'
								style={{
									textAlign: "end",
									fontWeight: "bold",
									fontSize: "20px",
								}}>
								US $123
							</div>
						</div>
						<div className='row w-100 gx-0 mt-4'>
							<button className='btn mainColor secondarybg'>Payment</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
