import React from "react";
import { CustomHook } from "../CustomHook/CustomHook";

function CustomLoader() {
	const { dbTranslator } = CustomHook();
	return (
		<div className='w-100 d-flex align-items-center justify-content-center flex-column mb-3'>
			<div className='loader mb-1' />
			<span>{dbTranslator("process")}!...</span>
		</div>
	);
}

export default CustomLoader;
