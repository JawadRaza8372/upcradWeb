import React from "react";
import logo from "../ownassets/logo.png";
const ErrorPage = () => {
	return (
		<div
			style={{
				height: "fit-content",
				minHeight: "70vh",
				background: "white",
				padding: "40px 0px",
			}}
			className='w-100 d-flex align-items-center justify-content-center flex-column'>
			<img
				src={logo}
				alt='logo'
				style={{ width: "95%", maxWidth: "450px", objectFit: "contain" }}
			/>
			<h1 className='mainColor'>Requested URL is not valid.</h1>
		</div>
	);
};

export default ErrorPage;
