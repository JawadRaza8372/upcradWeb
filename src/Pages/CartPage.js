import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../store/projectSlice";
import CartPageCard from "../Components/CartPageCard";
//import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import PaymentMethod from "../Components/PaymentMethod";
import { useTranslation } from "react-i18next";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CartPage = () => {
	const { t } = useTranslation();

	const dispatch = useDispatch();
	// const [stripePromise, setStripePromise] = useState(null);
	// useEffect(() => {
	// 	fetch("https://upcradstripepayment-production.up.railway.app/config").then(
	// 		async (r) => {
	// 			const result = await r.json();
	// 			if (result?.publishableKey) {
	// 				setStripePromise(loadStripe(`${result?.publishableKey}`));
	// 			}
	// 		}
	// 	);
	// }, []);
	const {
		footballCards,
		otherProducts,
		cartItems,

		deliveryInfo,
	} = useSelector((state) => state.project);
	const { isAuth } = useSelector((state) => state.auth);

	const removeItemFun = (itId) => {
		let newdata = cartItems.filter((dat) => dat.pid !== itId);
		window.localStorage.setItem("upCradCartArry", JSON.stringify(newdata));
		dispatch(setCartItems({ cartItems: newdata }));
	};
	let subtotal = 0;

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
									deliveryInfo?.length > 0 ? (
										<>
											{subtotal > 0 ? (
												<PayPalScriptProvider
													options={{
														"client-id": import.meta.env.VITE_CLIENT_ID,
													}}>
													<PayPalButtons
														style={{ layout: "vertical" }}
														createOrder={(data, actions) => {
															return actions.order.create({
																purchase_units: [
																	{
																		amount: {
																			currency_code: "usd",
																			value: `${subtotal}`,
																		},
																	},
																],
															});
														}}
														onApprove={async (data, actions) => {
															const details = await actions.order.capture();
															const name = details.payer.name.given_name;
															alert("Transaction completed by " + name);
														}}
													/>
												</PayPalScriptProvider>
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
