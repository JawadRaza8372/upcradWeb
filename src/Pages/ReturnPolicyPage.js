import React from "react";
import { CustomHook } from "../CustomHook/CustomHook";

const ReturnPolicyPage = () => {
	const { dbTranslator } = CustomHook();
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{dbTranslator("refplicy")}
				</h1>
			</div>
			<div
				style={{ height: "60vh" }}
				className='col-12 col-lg-10 mx-auto mb-5 mt-3'>
				<p className='py-5'> {dbTranslator("retrnpolicy")}</p>
			</div>
		</>
	);
};

export default ReturnPolicyPage;
