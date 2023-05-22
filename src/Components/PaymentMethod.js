import React, { useEffect, useState } from "react";
import {
	useStripe,
	useElements,
	AddressElement,
} from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { setClientSecretId } from "../store/projectSlice";
import { CustomHook } from "../CustomHook/CustomHook";
import { apiurl } from "../Harddata";

const PaymentMethod = ({ price, data, userid, saveOrderInfo }) => {
	const { dbTranslator } = CustomHook();
	const [showPay, setshowPay] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	const [deliveryinfo, setdeliveryinfo] = useState({
		name: { full_name: "" },
		address: {
			address_line_1: "",
			admin_area_1: "",
			admin_area_2: "",
			country_code: "",
			postal_code: "",
		},
	});
	const { clientSecret } = useSelector((state) => state.project);
	const dispatch = useDispatch();
	useEffect(() => {
		let data = { priceit: `${price}` };
		fetch(`${apiurl}/create-payment-intent`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(async (result) => {
			var newRest = await result.json();
			dispatch(setClientSecretId({ clientSecret: newRest?.clientSecret }));
		});
	}, [price, dispatch]);
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setError(null);
		}, 7000);
	}, [error]);

	const handleSubmitNewWala = async (ev) => {
		ev.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});

		if (payload.error) {
			setError(dbTranslator("payfailed"));
			console.log(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setProcessing(false);
			await saveOrderInfo({
				price: price,
				postedBy: userid,
				deliveryInfo: deliveryinfo,
			});
			setSucceeded(true);
		}
	};

	const handleChangeCard = async (event) => {
		setError(event.error ? event.error.message : "");
	};

	return (
		<>
			{clientSecret ? (
				<>
					<form id='payment-form' onSubmit={handleSubmitNewWala}>
						<div className='sameasshippinginp'>
							<CardElement id='card-element' onChange={handleChangeCard} />
						</div>

						<AddressElement
							options={{ mode: "shipping" }}
							onChange={(event) => {
								if (event.complete) {
									const address = event.value;
									let newformdata = {
										name: { full_name: address?.name },
										address: {
											address_line_1:
												address?.address?.line1 + "," + address?.address?.line2,
											admin_area_1: address?.address?.state,
											admin_area_2: address?.address?.city,
											country_code: address?.address?.country,
											postal_code: address?.address?.postal_code,
										},
									};
									setdeliveryinfo(newformdata);
									setshowPay(true);
								} else {
									console.log("event", event);
								}
							}}
						/>

						{showPay && (
							<button
								className='btn mainColor secondarybg'
								style={{ width: "100%", marginTop: "20px" }}
								disabled={processing || succeeded}
								id='submit'>
								<span id='button-text'>
									{processing
										? dbTranslator("process") + " ... "
										: dbTranslator("paynow")}
								</span>
							</button>
						)}
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
