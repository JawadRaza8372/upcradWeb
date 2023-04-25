import React, { Component } from "react";
//import AdSense from "react-adsense";

class AdsComp extends Component {
	componentDidMount() {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}

	render() {
		return (
			<div
				className='allCenter'
				style={{ width: "100%", margin: "0px auto", minWidth: "250px" }}>
				<ins
					className='adsbygoogle'
					style={{
						display: "block",
						width: "100%",
						minHeight: "1px",
						minWidth: "250px",
					}}
					data-ad-client='ca-pub-3453611888054749'
					data-ad-slot={`${this.props.slotnumber}`}
					data-ad-format='auto'
					data-full-width-responsive='true'></ins>
				{/* <AdSense.Google
					client='ca-pub-3453611888054749'
					slot={`${this.props.slotnumber}`}
					style={{
						display: "block",
						width: "100%",
						minHeight: "1px",
						minWidth: "250px",
					}}
					layout='in-article'
					format='fluid'
				/> */}
			</div>
		);
	}
}

export default AdsComp;
