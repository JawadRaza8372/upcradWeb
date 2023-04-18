import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPage = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>{t("pp")}</h1>
			</div>
			<div className='col-12 col-lg-10 mx-auto mb-5 mt-3'>
				<p>{t("pp1")}</p>
				<p>{t("pp2")}</p>
				<p>
					<b>{t("pp3")}: </b>
					{t("pp3val")}
				</p>
				<p>
					<b>{t("pp4")}: </b>
					{t("pp4val")}{" "}
				</p>
				<p>
					<b>{t("pp5")}: </b>
					{t("pp5val")}
				</p>
				<ul>
					<li>{t("pp51")}</li>
					<li>{t("pp52")}</li>
					<li>{t("pp53")}</li>
					<li>{t("pp54")}</li>
					<li>{t("pp55")}</li>
					<li>{t("pp56")}</li>
				</ul>
				<p>
					<b>{t("pp6")}: </b>
					{t("pp6val")}
				</p>
			</div>
		</>
	);
};

export default PrivacyPage;
