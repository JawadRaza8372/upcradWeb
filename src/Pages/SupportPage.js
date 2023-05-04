import React from "react";
import { FaTruck, FaScroll } from "react-icons/fa";
import { RiMoneyDollarCircleFill, RiQuestionnaireFill } from "react-icons/ri";
import SupportCard from "../Components/SupportCard";
import { CustomHook } from "../CustomHook/CustomHook";

const SupportPage = () => {
	const { dbTranslator } = CustomHook();

	const questionsArrayMain = [
		{
			symbol: (
				<RiQuestionnaireFill
					style={{ width: "50px", height: "50px" }}
					className='mainColor'
				/>
			),
			title: dbTranslator("general"),
			questionsArray: [
				{
					question: dbTranslator("faq3"),
					answer: dbTranslator("faq3val"),
				},
				{ question: dbTranslator("faq1"), answer: dbTranslator("faq1val") },
				{ question: dbTranslator("faq2"), answer: dbTranslator("faq2val") },
			],
		},
		{
			symbol: (
				<FaTruck
					style={{ width: "50px", height: "50px" }}
					className='mainColor'
				/>
			),
			title: dbTranslator("delivery"),
			questionsArray: [
				{
					question: dbTranslator("dliv1"),
					answer: dbTranslator("div1val"),
				},
				{
					question: dbTranslator("dliv2"),
					answer: dbTranslator("div2val"),
				},
				{
					question: dbTranslator("dliv3"),
					answer: dbTranslator("div3val"),
				},
				{
					question: dbTranslator("dliv4"),
					answer: dbTranslator("div1va4"),
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
			title: dbTranslator("ordr"),
			questionsArray: [
				{
					question: dbTranslator("order1"),
					answer: dbTranslator("order1val"),
				},
				{
					question: dbTranslator("order2"),
					answer: dbTranslator("order2val"),
				},
				{
					question: dbTranslator("ordr3"),
					answer: dbTranslator("ordr3val"),
				},
				{
					question: dbTranslator("ordr4"),
					answer: dbTranslator("ordr4val"),
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
			title: dbTranslator("payment"),
			questionsArray: [
				{
					question: dbTranslator("pay1"),
					answer: dbTranslator("pay1val"),
				},
				{
					question: dbTranslator("pay2"),
					answer: dbTranslator("pay2val"),
				},
			],
		},
	];
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{dbTranslator("howhelp")}
				</h1>
			</div>
			<div className='col-12 col-lg-10 mx-auto'>
				<div className='row w-100 mx-auto'>
					{questionsArrayMain[0]?.title &&
						questionsArrayMain?.map((dat, index) => (
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
