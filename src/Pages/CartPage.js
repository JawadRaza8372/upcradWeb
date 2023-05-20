import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems, setExtraServices } from "../store/projectSlice";
import CartPageCard from "../Components/CartPageCard";
import { CustomHook } from "../CustomHook/CustomHook";
import { postData } from "../Database/Database";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentMethod from "../Components/PaymentMethod";
import extra1 from "../ownassets/extr1.jpg";
import extra2 from "../ownassets/ext2.png";
import extra3 from "../ownassets/extr3.jpg";
import extra4 from "../ownassets/extra4.png";
import extra5 from "../ownassets/extra5.jpg";
import truckicon from "../ownassets/truck.png";

const CartPage = () => {
	const { dbTranslator } = CustomHook();
	const dispatch = useDispatch();
	const [dopayment, setdopayment] = useState(false);
	const { footballCards, extraServices, cartItems, clientSecret } = useSelector(
		(state) => state.project
	);
	const { isAuth } = useSelector((state) => state.auth);

	const navigate = useNavigate();
	const removeItemFun = (itId) => {
		let newdata = cartItems.filter((dat) => dat.id !== itId);
		window.localStorage.setItem(
			"upcardcartArryUpdated",
			JSON.stringify(newdata)
		);
		dispatch(setCartItems({ cartItems: newdata }));
		setdopayment(false);
	};
	const removeItemFun2 = (itId) => {
		let newdata = extraServices.filter((dat, index) => index !== itId);
		window.localStorage.setItem(
			"upcardcartArryUpdatedExtras",
			JSON.stringify(newdata)
		);
		dispatch(setExtraServices({ extraServices: newdata }));
		setdopayment(false);
	};
	let subtotal = 0;
	const saveorderFunc = async (deta) => {
		console.log({
			products: cartItems,
			extras: extraServices,
			...deta,
		});
		const rest = await postData(
			{
				products: cartItems,
				extras: extraServices,
				...deta,
			},
			"Orders"
		);
		if (rest?.data) {
			dispatch(setCartItems({ cartItems: [] }));
			dispatch(setExtraServices({ extraServices: [] }));
			window.localStorage.removeItem("upcardcartArryUpdated");
			window.localStorage.removeItem("upcardcartArryUpdatedExtras");
			navigate(`/success/${rest?.data}`);
		} else {
			toast.error(`${rest?.error}`, {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};
	const [stripePromise, setStripePromise] = useState(null);
	useEffect(() => {
		fetch("https://upcradstripepayment-production.up.railway.app/config").then(
			async (r) => {
				const result = await r.json();
				if (result?.publishableKey) {
					setStripePromise(loadStripe(`${result?.publishableKey}`));
				}
			}
		);
	}, []);
	return (
		<>
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
								{dbTranslator("scart")}
							</span>
							{cartItems?.length > 0 || extraServices?.length > 0 ? (
								<>
									{cartItems?.map((dat, indea) => {
										const carddata = footballCards?.filter(
											(dac) => dac.id === dat.pid
										);
										const currentdata = carddata[0];
										subtotal = subtotal + parseFloat(currentdata?.price);
										if (isNaN(subtotal) === false) {
											return (
												<CartPageCard
													key={dat?.id ? dat.id : new Date().getTime()}
													id={dat?.id ? dat.id : new Date().getTime()}
													title={currentdata?.title}
													price={currentdata?.price + "€"}
													imgSrc={
														typeof dat?.imgSrc === "object"
															? `${dat?.imgSrc?.starter}${dat?.imgSrc?.imglink}`
															: dat?.imgSrc
													}
													removeItemFun={removeItemFun}
												/>
											);
										} else {
											return null;
										}
									})}

									{extraServices?.map((dat, indea) => {
										subtotal = subtotal + parseFloat(dat?.price);
										if (isNaN(subtotal) === false) {
											return (
												<CartPageCard
													key={indea}
													id={indea}
													title={dat?.title}
													price={dat?.price + "€"}
													imgSrc={
														dat?.price === "0"
															? truckicon
															: dat?.price === "1"
															? extra5
															: dat?.price === "2"
															? extra4
															: dat?.price === "3"
															? extra3
															: dat?.price === "5"
															? extra2
															: dat?.price === "7"
															? extra1
															: truckicon
													}
													removeItemFun={removeItemFun2}
												/>
											);
										} else {
											return null;
										}
									})}
								</>
							) : (
								<div className='errorDiv'>{dbTranslator("paddart")}</div>
							)}
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
								{dbTranslator("sumry")}
							</span>
							<div className='row w-100 gx-0'>
								<div className='col-6' style={{ fontSize: "16px" }}>
									{dbTranslator("subtol")}
								</div>
								<div
									className='col-6 mainColor'
									style={{
										textAlign: "end",
										fontSize: "16px",
									}}>
									{subtotal} €
								</div>
								<div className='col-6' style={{ fontSize: "16px" }}>
									{dbTranslator("ship")}
								</div>
								<div
									className='col-6 mainColor'
									style={{
										textAlign: "end",
										fontSize: "16px",
									}}>
									25 €
								</div>
								<div
									className='col-6'
									style={{ fontSize: "20px", fontWeight: "bold" }}>
									{dbTranslator("total")}
								</div>
								<div
									className='col-6 mainColor'
									style={{
										textAlign: "end",
										fontWeight: "bold",
										fontSize: "20px",
									}}>
									{parseFloat(subtotal + 25).toFixed(2)} €
								</div>
							</div>
							<div className='row w-100 gx-0 mt-4'>
								{subtotal > 0 ? (
									<>
										{dopayment ? (
											<Elements
												stripe={stripePromise}
												options={clientSecret ? { clientSecret } : {}}>
												<PaymentMethod
													price={subtotal + 25}
													data={cartItems}
													userid={isAuth?.uid ? isAuth?.uid : "---"}
													saveOrderInfo={saveorderFunc}
												/>
											</Elements>
										) : (
											<button
												className='btn mainColor secondarybg'
												style={{ width: "100%", marginTop: "20px" }}
												onClick={() => setdopayment(true)}>
												{dbTranslator("paynow")}
											</button>
										)}
									</>
								) : (
									<>
										<div className='errorDiv'>{dbTranslator("paddart")}</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartPage;
