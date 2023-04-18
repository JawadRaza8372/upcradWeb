import React from "react";
import { useTranslation } from "react-i18next";

const ReturnPolicyPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{t("refplicy")}
				</h1>
			</div>
			<div
				style={{ height: "60vh" }}
				className='col-12 col-lg-10 mx-auto mb-5 mt-3'>
				<p className='py-5'> {t("retrnpolicy")}</p>
			</div>
		</>
	);
};

export default ReturnPolicyPage;
