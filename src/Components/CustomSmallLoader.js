import React from "react";
import { CustomHook } from "../CustomHook/CustomHook";

const CustomSmallLoader = () => {
	const { dbTranslator } = CustomHook();

	return (
		<div className='w-100 d-flex align-items-center justify-content-evenly flex-row'>
			<div className='smallloader mb-1' />
			<span className='smallloadertxt'>{dbTranslator("process")}!...</span>
		</div>
	);
};

export default CustomSmallLoader;
