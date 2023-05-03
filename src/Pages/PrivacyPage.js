import React from "react";
import { CustomHook } from "../CustomHook/CustomHook";

const PrivacyPage = () => {
	const { dbTranslator } = CustomHook();

	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{dbTranslator("pp")}
				</h1>
			</div>
			<div className='col-12 col-lg-10 mx-auto mb-5 mt-3'>
				<p>{dbTranslator("pp1")}</p>
				<p>{dbTranslator("pp2")}</p>
				<p>
					<b>{dbTranslator("pp3")}: </b>
					{dbTranslator("pp3val")}
				</p>
				<p>
					<b>{dbTranslator("pp4")}: </b>
					{dbTranslator("pp4val")}{" "}
				</p>
				<p>
					<b>{dbTranslator("pp5")}: </b>
					{dbTranslator("pp5val")}
				</p>
				<ul>
					<li>{dbTranslator("pp51")}</li>
					<li>{dbTranslator("pp52")}</li>
					<li>{dbTranslator("pp53")}</li>
					<li>{dbTranslator("pp54")}</li>
					<li>{dbTranslator("pp55")}</li>
					<li>{dbTranslator("pp56")}</li>
				</ul>
				<p>
					<b>{dbTranslator("pp6")}: </b>
					{dbTranslator("pp6val")}
				</p>
			</div>
		</>
	);
};

export default PrivacyPage;
