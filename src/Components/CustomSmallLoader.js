import React from "react";
import { useTranslation } from "react-i18next";

const CustomSmallLoader = () => {
	const { t } = useTranslation();

	return (
		<div className='w-100 d-flex align-items-center justify-content-evenly flex-row'>
			<div className='smallloader mb-1' />
			<span className='smallloadertxt'>{t("process")}!...</span>
		</div>
	);
};

export default CustomSmallLoader;
