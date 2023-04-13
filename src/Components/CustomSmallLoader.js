import React from "react";

const CustomSmallLoader = () => {
	return (
		<div className='w-100 d-flex align-items-center justify-content-evenly flex-row'>
			<div className='smallloader mb-1' />
			<span className='smallloadertxt'>Uploading! Please Wait</span>
		</div>
	);
};

export default CustomSmallLoader;
