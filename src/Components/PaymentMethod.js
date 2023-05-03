import React, { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { setClientSecretId, setCartItems } from "../store/projectSlice";
import { postData } from "../Database/Database";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CustomHook } from "../CustomHook/CustomHook";

const PaymentMethod = ({ price, data, userid }) => {
	const { dbTranslator } = CustomHook();

	const navigate = useNavigate();
	const stripe = useStripe();
	const elements = useElements();
	const { clientSecret, deliveryInfo } = useSelector((state) => state.project);
	const dispatch = useDispatch();
	useEffect(() => {
		let data = { priceit: `${price}` };
		fetch(
			"https://upcradstripepayment-production.up.railway.app/create-payment-intent",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		).then(async (result) => {
			var newRest = await result.json();
			dispatch(setClientSecretId({ clientSecret: newRest?.clientSecret }));
		});
	}, [price, dispatch]);
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(false);
	const [disabled, setDisabled] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setError(null);
		}, 7000);
	}, [error]);

	const cardStyle = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: "Arial, sans-serif",
				fontSmoothing: "antialiased",
				fontSize: "16px",
				"::placeholder": {
					color: "#32325d",
				},
			},
			invalid: {
				fontFamily: "Arial, sans-serif",
				color: "#fa755a",
				iconColor: "#fa755a",
			},
		},
	};

	const handleSubmitNewWala = async (ev) => {
		ev.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});

		if (payload.error) {
			setError(t("payfailed"));
			console.log(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setProcessing(false);
			setSucceeded(true);
			const rest = await postData(
				{ ...data, price: price, postedBy: userid, deliveryInfo: deliveryInfo },
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
		}
	};

	const handleChangeCard = async (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<>
			{clientSecret ? (
				<>
					<form id='payment-form' onSubmit={handleSubmitNewWala}>
						{/* <PaymentElement
											options={{
												layout: "auto",
											}}
											id='payment-element'
										/> */}
						<CardElement
							id='card-element'
							options={cardStyle}
							onChange={handleChangeCard}
						/>

						<button
							className='btn mainColor secondarybg'
							style={{ width: "100%", marginTop: "20px" }}
							disabled={processing || disabled || succeeded}
							id='submit'>
							<span id='button-text'>
								{processing ? t("process") + " ... " : t("paynow")}
							</span>
						</button>
						{/* Show any error or success messages */}
						{error && (
							<div className='errorDiv' id='paerror'>
								{error}
							</div>
						)}
					</form>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default PaymentMethod;
