import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems, setDeliveryInfo } from "../store/projectSlice";
import CartPageCard from "../Components/CartPageCard";
//import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import PaymentMethod from "../Components/PaymentMethod";
import { useTranslation } from "react-i18next";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { getDeliveryInfo, postData } from "../Database/Database";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
	const { t } = useTranslation();

	const dispatch = useDispatch();

	const { footballCards, otherProducts, cartItems, deliveryInfo } = useSelector(
		(state) => state.project
	);
	const { isAuth } = useSelector((state) => state.auth);
	useEffect(() => {
		const getDelivery = async () => {
			const devRes = await getDeliveryInfo(isAuth?.uid);
			if (devRes?.data) {
				dispatch(
					setDeliveryInfo({
						deliveryInfo: { ...devRes?.data, email: isAuth?.email },
					})
				);
			}
		};
		if (isAuth?.uid) {
			getDelivery();
		}
	}, [isAuth?.uid, dispatch]);
	const navigate = useNavigate();
	const removeItemFun = (itId) => {
		let newdata = cartItems.filter((dat) => dat.pid !== itId);
		window.localStorage.setItem("upCradCartArry", JSON.stringify(newdata));
		dispatch(setCartItems({ cartItems: newdata }));
	};
	let subtotal = 0;
	const saveorderFunc = async (deta) => {
		const rest = await postData(
			{
				products: cartItems,
				price: subtotal,
				postedBy: isAuth?.uid,
				deliveryInfo: deta,
			},
			"Orders"
		);
		if (rest?.data) {
			dispatch(setCartItems({ cartItems: [] }));
			window.localStorage.removeItem("upCradCartArry");
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
								{t("scart")}
							</span>
							{cartItems?.length ? (
								cartItems.map((dat) => {
									const carddata = footballCards?.filter(
										(dac) => dac.id === dat.pid
									);
									const otherp = otherProducts?.filter(
										(dec) => dec.id === dat.pid
									);
									const currentdata =
										carddata?.length > 0
											? { ...carddata[0], extra: dat?.extra }
											: otherp?.length > 0
											? { ...otherp[0], extra: dat?.extra }
											: {
													price: "not available",
													title: "not available",
													extra: { price: "0" },
											  };
									let nowSubol =
										parseFloat(currentdata?.price) +
										parseFloat(currentdata?.extra?.price);
									subtotal = subtotal + nowSubol;
									return (
										<CartPageCard
											key={dat.pid}
											id={dat?.pid}
											title={currentdata?.title}
											price={
												"Product Price + Extra Service = " +
												currentdata?.price +
												" + " +
												currentdata?.extra?.price +
												" = " +
												"$" +
												nowSubol
											}
											imgSrc={dat?.imgSrc}
											removeItemFun={removeItemFun}
										/>
									);
								})
							) : (
								<div className='errorDiv'>{t("paddart")}</div>
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
								{t("sumry")}
							</span>
							<div className='row w-100 gx-0'>
								<div className='col-6' style={{ fontSize: "16px" }}>
									{t("subtol")}
								</div>
								<div
									className='col-6 mainColor'
									style={{
										textAlign: "end",
										fontSize: "16px",
									}}>
									US ${subtotal}
								</div>
								<div className='col-6' style={{ fontSize: "16px" }}>
									{t("ship")}
								</div>
								<div
									className='col-6 mainColor'
									style={{
										textAlign: "end",
										fontSize: "16px",
									}}>
									US $25
								</div>
								<div
									className='col-6'
									style={{ fontSize: "20px", fontWeight: "bold" }}>
									{t("total")}
								</div>
								<div
									className='col-6 mainColor'
									style={{
										textAlign: "end",
										fontWeight: "bold",
										fontSize: "20px",
									}}>
									US ${subtotal + 25}
								</div>
							</div>
							<div className='row w-100 gx-0 mt-4'>
								{/* <Elements
													stripe={stripePromise}
													options={
														clientSecret
															? {
																	clientSecret,
															  }
															: {}
													}>
													<PaymentMethod
														price={subtotal + 25}
														data={cartItems}
														userid={isAuth?.uid}
													/>
												</Elements> */}
								{isAuth ? (
									deliveryInfo !== {} ? (
										<>
											{subtotal > 0 ? (
												<>
													<PayPalScriptProvider
														options={{
															"client-id":
																"Af7bJjVcA0B6i1eyIW8E8UbvHVAPkyUFbqVafnFBwBNjs-oKr3FpJNwDFkB3QdHrw1mAXmJf-TRDlsYB",
														}}>
														<PayPalButtons
															style={{ layout: "vertical" }}
															createOrder={(data, actions) => {
																return actions.order.create({
																	purchase_units: [
																		{
																			amount: {
																				value: `${subtotal + 25}`,
																			},
																		},
																	],
																});
															}}
															onApprove={async (data, actions) => {
																const details = await actions.order.capture();
																//const name = details.payer.name.given_name;
																let delivery =
																	details?.purchase_units[0]?.shipping;
																saveorderFunc(delivery);
															}}
														/>
													</PayPalScriptProvider>
												</>
											) : (
												<></>
											)}
										</>
									) : (
										<>
											<div className='errorDiv'>{t("delvInfp")} </div>
										</>
									)
								) : (
									<>
										<div className='errorDiv' id='paerror'>
											{t("loginp")}{" "}
										</div>
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
