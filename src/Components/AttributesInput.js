import React from "react";

const AttributesInput = ({ title }) => {
	return (
		<div className='row gx-0 w-100 mb-2 d-flex align-items-center justify-content-evenly flex-row'>
			<input placeholder='00' className='AttributeInputCust' />
			<div className='AttributeInputCust allCenter'>{title}</div>
		</div>
	);
};

export default AttributesInput;
