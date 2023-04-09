import React from "react";

function CustomLoader() {
	return (
		<div className='w-100 d-flex align-items-center justify-content-center flex-column mb-3'>
			<div className='loader mb-1' />
			<span>Uploading! Please Wait</span>
		</div>
	);
}

export default CustomLoader;
