import React from "react";
import { useTranslation } from "react-i18next";

function CustomLoader() {
	const { t } = useTranslation();
	return (
		<div className='w-100 d-flex align-items-center justify-content-center flex-column mb-3'>
			<div className='loader mb-1' />
			<span>{t("process")}!...</span>
		</div>
	);
}

export default CustomLoader;
