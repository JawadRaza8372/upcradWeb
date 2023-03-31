import React from "react";
import { FaTruck, FaScroll } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import SupportCard from "../Components/SupportCard";
const SupportPage = () => {
	const questionsArrayMain = [
		{
			symbol: (
				<FaTruck
					style={{ width: "50px", height: "50px" }}
					className='mainColor'
				/>
			),
			title: "Delivery",
			questionsArray: [
				{
					question: "Production, Shipping & Delivery Information",
					answer:
						"Please be aware that weekends are not considered working days and will not be included in the production time. Our standard times may be subject to change due to unexpected delays or busy seasons. Production will begin the day after your order is placed, so please plan accordingly. If you are ordering for a specific event, we recommend placing your order in advance to ensure timely delivery.",
				},
				{
					question: "Customs & Import Fees",
					answer:
						"The price you see at checkout includes all customs and duty fees, there may be extra fees to be paid if your order value reaches a certain threshold. This varies per country and we recommend a quick google search to find out what the threshold is for taxes on items coming from the UK. Most of the time it's very high and won't be applicable to our products. If you have any questions about this, we recommend contacting your local customs office for more information before ordering.",
				},
				{
					question: "How do I track my UpCrad delivery?",
					answer:
						"You'll receive an email once your order has shipped titled Your CardsPlug order #9999 is on the way, containing your tracking link and the courier used.We use a variety of shipping couriers to ensure prompt delivery of your order. We work with Royal Mail, Parcelforce, Fedex Cross Border, and Fedex Express. ",
				},
				{
					question: "My tracking information is not updating",
					answer:
						"If you have received a tracking number for your shipment and it has not been updated in a few days, there is no need to worry. Delays in shipment updates can occur due to various reasons, such as courier delays. However, please be aware that we have no control over these factors.",
				},
			],
		},
		{
			symbol: (
				<FaScroll
					style={{ width: "50px", height: "50px" }}
					className='mainColor'
				/>
			),
			title: "Orders",
			questionsArray: [
				{
					question:
						"How can I make changes to my order after it has been placed",
					answer:
						"We’re happy to make changes if there has been an error or if the image quality is too poor to proceed. We will send a preview of your card once we have finished designing it. If there are any urgent and essential errors (such as a mistake with the name), please contact us immediately using the email option at the bottom of this article.Apart from these special cases, all orders are final once placed.Please note that any non-essential late changes made after ordering may incur a processing fee, this will only happen if your card has already been produced. ",
				},
				{
					question: "My order arrived damaged",
					answer:
						"If your card arrives in poor condition, please contact our support team through email or messenger at the bottom of this article. Provide images of any damages and your order number so we can quickly resolve the issue. We strive for all orders to arrive in perfect condition, and we promptly address any exceptions.",
				},
				{
					question: "My order has not been shipped",
					answer:
						"Have you placed an order over 7-10 business days ago and it still has not been shipped?First thing to do in this case is check all of your emails, including your spam folder for any emails from our team. If there has been any issues with your order our team would have emailed you about it. If you cannot find any emails from our team please use one of the contact buttons and get in touch with us so we can look into your order.",
				},
				{
					question: "I have received the wrong card(s)",
					answer:
						"Did we get our wires crossed? If you’ve received the wrong card, please contact us immediately using the email or messenger option at the bottom of this article.Our friendly support team will make amends as quickly as possible and get the correct cards sent out to you.",
				},
			],
		},
		{
			symbol: (
				<RiMoneyDollarCircleFill
					style={{ width: "50px", height: "50px" }}
					className='mainColor'
				/>
			),
			title: "Payment Methods",
			questionsArray: [
				{
					question: "What currency is the store using?",
					answer:
						"UpCrad's default currency is USD Dollars ($) however in future we will add feature that website automatically changes the currency to your local currency based on your location. For example,  if you are from France it will be Euro (€). ",
				},
				{
					question: "Accepted Payment Methods",
					answer:
						"We offer a variety of convenient payment options to make your purchase as smooth as possible. We accept PayPal, Visa, Mastercard, Stripe.",
				},
			],
		},
	];
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading mainColor'>HOW CAN WE HELP?</h1>
			</div>
			<div className='col-12 col-lg-10 mx-auto'>
				<div className='row w-100 mx-auto'>
					{questionsArrayMain?.map((dat, index) => (
						<div className='col-11 mx-auto col-md-6 mb-3'>
							<SupportCard
								symbol={dat.symbol}
								key={index}
								title={dat.title}
								questionsArray={dat.questionsArray}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SupportPage;
