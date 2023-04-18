import React from "react";
import { FaTruck, FaScroll } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import SupportCard from "../Components/SupportCard";
import { useTranslation } from "react-i18next";

const SupportPage = () => {
	const { t } = useTranslation();

	const questionsArrayMain = [
		{
			symbol: (
				<FaTruck
					style={{ width: "50px", height: "50px" }}
					className='mainColor'
				/>
			),
			title: t("delivery"),
			questionsArray: [
				{
					question: t("dliv1"),
					answer: t("div1val"),
				},
				{
					question: t("dliv2"),
					answer: t("div2val"),
				},
				{
					question: t("dliv3"),
					answer: t("div3val"),
				},
				{
					question: t("dliv4"),
					answer: t("div1va4"),
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
			title: t("ordr"),
			questionsArray: [
				{
					question: t("order1"),
					answer: t("order1val"),
				},
				{
					question: t("order2"),
					answer: t("order2val"),
				},
				{
					question: t("ordr3"),
					answer: t("ordr3val"),
				},
				{
					question: t("ordr4"),
					answer: t("ordr4val"),
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
			title: t("payment"),
			questionsArray: [
				{
					question: t("pay1"),
					answer: t("pay1val"),
				},
				{
					question: t("pay2"),
					answer: t("pay2val"),
				},
			],
		},
	];
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{t("howhelp")}
				</h1>
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
